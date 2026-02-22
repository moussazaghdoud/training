import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Tracks } from './collections/Tracks'
import { Levels } from './collections/Levels'
import { Modules } from './collections/Modules'
import { ContentBlocks } from './collections/ContentBlocks'
import { Quizzes } from './collections/Quizzes'
import { Questions } from './collections/Questions'
import { Certifications } from './collections/Certifications'
import { Resources } from './collections/Resources'
import { UserProgress } from './collections/UserProgress'
import { QuizAttempts } from './collections/QuizAttempts'
import { EarnedCertifications } from './collections/EarnedCertifications'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | Rainbow Training Academy',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Tracks,
    Levels,
    Modules,
    ContentBlocks,
    Quizzes,
    Questions,
    Certifications,
    Resources,
    UserProgress,
    QuizAttempts,
    EarnedCertifications,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'default-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [],
})
