# Rainbow Training Platform — Content Architecture Blueprint

> Phase 2 Deliverable | Platform Structure, CMS Schema & Scalability Design

---

## PART A: INFORMATION ARCHITECTURE

### Site Map

```
Rainbow Training Academy
│
├── / (Home / Dashboard)
│   ├── My Learning Path (persona-specific progress)
│   ├── Continue Learning (next module recommendation)
│   ├── My Certifications & Badges
│   └── Announcements / What's New
│
├── /tracks
│   ├── /support          → Support Track Landing
│   ├── /customer-success → CS Track Landing
│   ├── /executives       → Executive Track Landing
│   ├── /partners         → Partner Track Landing
│   └── /developers       → Developer Track Landing
│
├── /tracks/{track}/levels
│   ├── /foundation       → L1 Module List
│   ├── /practitioner     → L2 Module List
│   ├── /expert           → L3 Module List
│   └── /champion         → L4 Module List
│
├── /modules/{module-id}
│   ├── Overview (objectives, duration, prerequisites)
│   ├── Content Blocks (VID, INT, SCN, LAB, etc.)
│   ├── Resources (REF downloads, links)
│   └── Knowledge Check (QIZ)
│
├── /certifications
│   ├── Overview & Requirements
│   ├── /assessments/{track}/{tier}
│   ├── /badges (My earned badges)
│   └── /verify/{badge-id} (Public verification)
│
├── /resources
│   ├── /reference-cards (Downloadable REFs)
│   ├── /demo-scripts (DEMs)
│   ├── /case-studies (CASs)
│   ├── /infographics (INFs)
│   └── /glossary
│
├── /sandbox (Developer track)
│   ├── API Playground
│   ├── Lab Environments
│   └── Sample Projects
│
├── /community
│   ├── Discussion Forums (per track)
│   ├── Champion Directory
│   └── Events & Webinars
│
└── /admin (Platform Administration)
    ├── User Management
    ├── Cohort Management
    ├── Content Management
    ├── Analytics & Reports
    └── Certification Management
```

---

## PART B: CMS CONTENT MODEL

### Core Collections

#### 1. Tracks
```
Track {
  id:           string (unique slug)
  name:         string
  description:  richText
  icon:         media
  color:        string (hex)
  persona:      string
  levels:       relationship → Level[]
  totalDuration:computed (sum of module durations)
  moduleCount:  computed
  status:       enum [draft, published, archived]
}
```

#### 2. Levels
```
Level {
  id:           string
  name:         string (Foundation | Practitioner | Expert | Champion)
  number:       number (1-4)
  track:        relationship → Track
  description:  richText
  modules:      relationship → Module[] (ordered)
  unlockRule:   enum [sequential, all_previous, manual]
  certification:relationship → Certification (optional)
  status:       enum [draft, published, archived]
}
```

#### 3. Modules
```
Module {
  id:           string (e.g., SUP-201)
  title:        string
  description:  richText
  track:        relationship → Track
  level:        relationship → Level
  duration:     number (minutes)
  objectives:   richText[] (learning objectives)
  prerequisites:relationship → Module[]
  contentBlocks:relationship → ContentBlock[] (ordered)
  knowledgeCheck:relationship → Quiz (optional)
  resources:    relationship → Resource[]
  tags:         string[]
  status:       enum [draft, review, published, archived]
  version:      number
  publishedAt:  date
  updatedAt:    date
}
```

#### 4. Content Blocks
```
ContentBlock {
  id:           string
  type:         enum [VID, INT, SCN, LAB, QIZ, CAS, REF, DEM, INF]
  title:        string
  content:      richText (for text-based blocks)
  media:        media (for video/image blocks)
  embedUrl:     string (for external interactive content)
  duration:     number (minutes)
  instructions: richText (for labs/scenarios)
  module:       relationship → Module
  order:        number
  status:       enum [draft, published]
}
```

#### 5. Quizzes
```
Quiz {
  id:           string
  title:        string
  type:         enum [knowledge_check, level_assessment, certification_exam]
  module:       relationship → Module (optional)
  certification:relationship → Certification (optional)
  questions:    relationship → Question[]
  passingScore: number (percentage)
  timeLimit:    number (minutes, 0 = unlimited)
  maxAttempts:  number
  randomize:    boolean
  showResults:  boolean
  status:       enum [draft, published]
}
```

#### 6. Questions
```
Question {
  id:           string
  type:         enum [multiple_choice, multi_select, matching, ordering,
                      true_false, scenario, code_review, diagram]
  stem:         richText (question text)
  media:        media (optional — image, diagram, code screenshot)
  options:      QuestionOption[]
  correctAnswer:string | string[]
  explanation:  richText (shown after answering)
  difficulty:   enum [easy, medium, hard]
  domain:       string (assessment domain tag)
  points:       number
  quiz:         relationship → Quiz
}
```

#### 7. Certifications
```
Certification {
  id:           string
  name:         string
  track:        relationship → Track
  tier:         enum [silver, gold, platinum]
  description:  richText
  requirements: richText
  assessment:   relationship → Quiz
  practicalSpec:richText (for platinum)
  badgeImage:   media
  validityMonths:number
  status:       enum [draft, published]
}
```

#### 8. Resources
```
Resource {
  id:           string
  type:         enum [reference_card, demo_script, case_study,
                      infographic, template, external_link]
  title:        string
  description:  richText
  file:         media (downloadable)
  externalUrl:  string (optional)
  modules:      relationship → Module[]
  tracks:       relationship → Track[]
  tags:         string[]
  status:       enum [draft, published]
}
```

#### 9. User Progress
```
UserProgress {
  id:           string
  user:         relationship → User
  module:       relationship → Module
  status:       enum [not_started, in_progress, completed]
  startedAt:    date
  completedAt:  date
  timeSpent:    number (minutes)
  contentBlockProgress: {
    blockId:    string
    completed:  boolean
    completedAt:date
  }[]
  quizAttempts: relationship → QuizAttempt[]
}
```

#### 10. Quiz Attempts
```
QuizAttempt {
  id:           string
  user:         relationship → User
  quiz:         relationship → Quiz
  score:        number (percentage)
  passed:       boolean
  answers:      {
    questionId: string
    answer:     string | string[]
    correct:    boolean
    points:     number
  }[]
  startedAt:    date
  completedAt:  date
  duration:     number (minutes)
}
```

#### 11. Earned Certifications
```
EarnedCertification {
  id:           string
  user:         relationship → User
  certification:relationship → Certification
  earnedAt:     date
  expiresAt:    date
  badgeUrl:     string (public verification URL)
  status:       enum [active, expired, revoked]
  renewalHistory: {
    renewedAt:  date
    method:     string
  }[]
}
```

---

## PART C: SCALABILITY & EXTENSIBILITY

### Content Versioning Strategy

| Scenario | Approach |
|---|---|
| Minor update (typo, clarification) | Edit in place, increment version number |
| Feature update (new Rainbow feature) | Create delta module, link to affected modules |
| Major restructure | Archive old version, publish new version, migrate learner progress |
| New language | Clone content structure, translate content blocks |

### Multi-Language Support

| Level | Implementation |
|---|---|
| Phase 1 | English only |
| Phase 2 | French (full), Spanish (full), German (full) |
| Phase 3 | Additional languages based on demand |
| Architecture | Each content block has a `locale` field; fallback to English |

### Extensibility Points

| Extension | How |
|---|---|
| New persona track | Add new Track + Levels + Modules following the schema |
| New content type | Add enum value to ContentBlock.type, define renderer |
| New assessment type | Add enum value to Question.type, define evaluator |
| New certification tier | Add enum value to Certification.tier, define requirements |
| New vertical | Add modules within existing tracks tagged with vertical |
| Third-party LMS integration | xAPI / SCORM export from content blocks |

### Integration Architecture

```
┌─────────────────────────────────────────────────┐
│            Rainbow Training Academy             │
│               (Next.js Frontend)                │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ Payload  │  │ Auth     │  │ Progress     │  │
│  │ CMS      │  │ Provider │  │ Engine       │  │
│  │ (Content)│  │ (SSO)    │  │ (Tracking)   │  │
│  └────┬─────┘  └────┬─────┘  └──────┬───────┘  │
│       │              │               │          │
│  ┌────┴──────────────┴───────────────┴───────┐  │
│  │              API Layer (REST/GraphQL)      │  │
│  └────┬──────────────┬───────────────┬───────┘  │
│       │              │               │          │
├───────┼──────────────┼───────────────┼──────────┤
│       │              │               │          │
│  ┌────┴─────┐  ┌─────┴────┐  ┌──────┴───────┐  │
│  │PostgreSQL│  │ Media    │  │ Analytics    │  │
│  │(Data)    │  │ Storage  │  │ (Events)     │  │
│  └──────────┘  └──────────┘  └──────────────┘  │
│                                                 │
│  External Integrations:                         │
│  ├── Rainbow API (sandbox labs)                 │
│  ├── Open Badges API (credential issuance)      │
│  ├── SSO / SAML (enterprise auth)               │
│  ├── xAPI / LRS (LMS interoperability)          │
│  └── Email / Notification service               │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## PART D: USER EXPERIENCE PRINCIPLES

### 1. Persona-First Navigation
- Users select their track on first visit (or are assigned by admin)
- Dashboard shows only relevant track content
- Cross-track content is accessible but not prominent

### 2. Progressive Disclosure
- L2 content is locked until L1 is completed
- Module prerequisites are enforced
- Advanced resources surface only after relevant modules

### 3. Micro-Learning Support
- Every module is completable in one sitting (max 60 min)
- Content blocks are individually bookmarkable
- "Resume where you left off" on every return visit

### 4. Active Learning Priority
- Minimum 40% of each module is interactive (INT, SCN, LAB)
- Knowledge checks after every 2-3 content blocks
- No module is 100% passive video

### 5. Enterprise-Grade Features
- SSO integration (SAML 2.0 / OpenID Connect)
- Cohort management (assign groups to tracks/deadlines)
- Manager dashboards (team progress, completion rates)
- Offline access for reference materials (PDF export)
- White-label capability (partner-branded instances)

### 6. Mobile-Responsive
- All content viewable on tablet
- Videos and quizzes functional on mobile
- Labs require desktop (clearly communicated)

---

## PART E: ANALYTICS & REPORTING MODEL

### Learner-Level Metrics
| Metric | Description |
|---|---|
| Track progress (%) | Percentage of modules completed per track |
| Time spent | Total learning hours |
| Assessment scores | Per-quiz and per-domain breakdown |
| Certification status | Active, expired, in-progress |
| Streak / engagement | Days active in the last 30 days |

### Cohort-Level Metrics
| Metric | Description |
|---|---|
| Completion rate | % of cohort that completed assigned track/level |
| Average score | Mean assessment score per cohort |
| Time to certification | Average days from enrollment to certification |
| Drop-off analysis | Where learners abandon (which module/block) |
| Content effectiveness | Correlation between content completion and assessment scores |

### Platform-Level Metrics
| Metric | Description |
|---|---|
| Total active learners | Monthly active users |
| Certifications issued | Per track, per tier, per period |
| Content utilization | Most/least accessed modules |
| Assessment analytics | Question difficulty, discrimination index |
| NPS / satisfaction | Post-module and post-certification surveys |
