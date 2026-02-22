import fs from 'fs'
import path from 'path'

const contentDir = path.join(process.cwd(), 'content')

/**
 * Load markdown content for a module by its ID (e.g., SUP-101)
 */
export function loadModuleContent(moduleId: string): string | null {
  const trackMap: Record<string, string> = {
    SUP: 'support',
    CS: 'customer-success',
    EXEC: 'executives',
    PTR: 'partners',
    DEV: 'developers',
    SLS: 'sales',
    ADM: 'administrators',
  }

  const prefix = moduleId.split('-')[0]
  const trackDir = trackMap[prefix]
  if (!trackDir) return null

  // Determine level from module number
  const num = parseInt(moduleId.split('-')[1])
  let levelDir: string
  if (num >= 100 && num < 200) levelDir = 'L1'
  else if (num >= 200 && num < 300) levelDir = 'L2'
  else if (num >= 300 && num < 400) levelDir = 'L3'
  else levelDir = 'L4'

  // Try to find the specific module file in the level directory
  const levelPath = path.join(contentDir, trackDir, levelDir)
  if (fs.existsSync(levelPath)) {
    const files = fs.readdirSync(levelPath)
    const match = files.find((f) => f.startsWith(moduleId) && f.endsWith('.md'))
    if (match) {
      return fs.readFileSync(path.join(levelPath, match), 'utf-8')
    }
  }

  // Fallback: check the L2-L4 combined file for the module section
  if (levelDir !== 'L1') {
    const combinedPath = path.join(contentDir, trackDir, 'L2-L4-modules.md')
    if (fs.existsSync(combinedPath)) {
      const content = fs.readFileSync(combinedPath, 'utf-8')
      // Extract the section for this module
      const moduleHeader = new RegExp(`(#{1,4}\\s*(?:\\*\\*)?${moduleId.replace('-', '[-–]')}[^\\n]*\\n)`, 'i')
      const match = content.match(moduleHeader)
      if (match && match.index !== undefined) {
        const startIdx = match.index
        // Find next module header or end
        const rest = content.slice(startIdx + match[0].length)
        const nextModule = rest.match(/\n#{1,4}\s*(?:\*\*)?(?:SUP|CS|EXEC|PTR|DEV|SLS|ADM)-\d{3}/i)
        const endIdx = nextModule?.index
          ? startIdx + match[0].length + nextModule.index
          : content.length
        return content.slice(startIdx, endIdx).trim()
      }
    }
  }

  return null
}

/**
 * Load assessment content for a track
 */
export function loadAssessmentContent(trackSlug: string): string | null {
  const slugMap: Record<string, string> = {
    support: 'support-silver-assessment',
    'customer-success': 'cs-silver-assessment',
    executives: 'executive-silver-assessment',
    partners: 'partner-silver-assessment',
    developers: 'developer-silver-assessment',
    sales: 'sales-silver-assessment',
    administrators: 'admin-silver-assessment',
  }

  const filename = slugMap[trackSlug]
  if (!filename) return null

  const filePath = path.join(contentDir, 'assessments', `${filename}.md`)
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8')
  }
  return null
}

/**
 * Load a resource file by type and filename
 */
export function loadResource(type: string, filename: string): string | null {
  const filePath = path.join(contentDir, 'resources', type, filename)
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8')
  }
  return null
}

/**
 * List all available resources by type
 */
export function listResources(type: string): string[] {
  const dirPath = path.join(contentDir, 'resources', type)
  if (!fs.existsSync(dirPath)) return []
  return fs.readdirSync(dirPath).filter((f) => f.endsWith('.md'))
}

/**
 * Parse quiz questions from assessment markdown
 */
export interface QuizQuestion {
  id: number
  question: string
  type: 'multiple_choice' | 'multi_select' | 'true_false' | 'scenario'
  options: { label: string; value: string }[]
  correctAnswer: string | string[]
  explanation: string
  difficulty: string
  domain: string
}

export function parseQuizQuestions(markdown: string): QuizQuestion[] {
  const questions: QuizQuestion[] = []
  // Split by question markers (## Question or ### Question or **Question N**)
  const questionBlocks = markdown.split(/(?=#{2,3}\s*(?:Question|Q)\s*\d+|(?=\*\*(?:Question|Q)\s*\d+))/i)

  let id = 0
  for (const block of questionBlocks) {
    if (!block.trim() || !(/(?:question|Q)\s*\d+/i.test(block))) continue
    id++

    const question: QuizQuestion = {
      id,
      question: '',
      type: 'multiple_choice',
      options: [],
      correctAnswer: '',
      explanation: '',
      difficulty: 'medium',
      domain: '',
    }

    // Extract question text
    const qMatch = block.match(/(?:question|Q)\s*\d+[^:]*[:\s]*\*?\*?\s*(.+?)(?=\n(?:[A-D]\)|type:|options:|difficulty:|\*\*type))/is)
    if (qMatch) question.question = qMatch[1].trim().replace(/\*\*/g, '')

    // Extract type
    const typeMatch = block.match(/type:\s*(\w+)/i)
    if (typeMatch) question.type = typeMatch[1].toLowerCase().replace(/_/g, '_') as QuizQuestion['type']

    // Extract options (A), B), C), D) format)
    const optionMatches = block.matchAll(/([A-D])\)\s*(.+?)(?=\n[A-D]\)|\n\n|\ncorrect|\nexplanation|\*\*correct|$)/gis)
    for (const m of optionMatches) {
      question.options.push({ label: m[2].trim().replace(/\*\*/g, ''), value: m[1] })
    }

    // Extract correct answer
    const correctMatch = block.match(/correct\s*(?:answer)?:\s*([A-D](?:\s*,\s*[A-D])*)/i)
    if (correctMatch) question.correctAnswer = correctMatch[1].trim()

    // Extract explanation
    const explMatch = block.match(/explanation:\s*(.+?)(?=\n#{2,}|\nquestion|\n\*\*question|$)/is)
    if (explMatch) question.explanation = explMatch[1].trim().replace(/\*\*/g, '')

    // Extract difficulty
    const diffMatch = block.match(/difficulty:\s*(\w+)/i)
    if (diffMatch) question.difficulty = diffMatch[1].toLowerCase()

    // Extract domain
    const domainMatch = block.match(/domain:\s*(.+?)(?=\n)/i)
    if (domainMatch) question.domain = domainMatch[1].trim()

    if (question.question && question.options.length >= 2) {
      questions.push(question)
    }
  }

  return questions
}
