import type { CollectionConfig } from 'payload'

export const QuizAttempts: CollectionConfig = {
  slug: 'quiz-attempts',
  admin: {
    group: 'Learner Data',
    defaultColumns: ['user', 'quiz', 'score', 'passed', 'completedAt'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'quiz',
      type: 'relationship',
      relationTo: 'quizzes',
      required: true,
    },
    {
      name: 'score',
      type: 'number',
      min: 0,
      max: 100,
    },
    {
      name: 'passed',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'answers',
      type: 'array',
      fields: [
        {
          name: 'questionId',
          type: 'text',
        },
        {
          name: 'answer',
          type: 'text',
        },
        {
          name: 'correct',
          type: 'checkbox',
        },
        {
          name: 'points',
          type: 'number',
        },
      ],
    },
    {
      name: 'startedAt',
      type: 'date',
    },
    {
      name: 'completedAt',
      type: 'date',
    },
    {
      name: 'duration',
      type: 'number',
      admin: {
        description: 'Duration in minutes',
      },
    },
  ],
}
