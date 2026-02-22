import type { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  admin: {
    useAsTitle: 'stemPreview',
    group: 'Assessment',
    defaultColumns: ['stemPreview', 'type', 'difficulty', 'domain'],
  },
  fields: [
    {
      name: 'stemPreview',
      type: 'text',
      admin: {
        description: 'Short preview of the question (for admin list)',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Multiple Choice', value: 'multiple_choice' },
        { label: 'Multi Select', value: 'multi_select' },
        { label: 'Matching', value: 'matching' },
        { label: 'Ordering', value: 'ordering' },
        { label: 'True/False', value: 'true_false' },
        { label: 'Scenario', value: 'scenario' },
        { label: 'Code Review', value: 'code_review' },
        { label: 'Diagram', value: 'diagram' },
      ],
    },
    {
      name: 'stem',
      type: 'richText',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'options',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'isCorrect',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'explanation',
      type: 'richText',
      admin: {
        description: 'Explanation shown after answering',
      },
    },
    {
      name: 'difficulty',
      type: 'select',
      options: [
        { label: 'Easy', value: 'easy' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hard', value: 'hard' },
      ],
    },
    {
      name: 'domain',
      type: 'text',
      admin: {
        description: 'Assessment domain tag (e.g., telephony, security)',
      },
    },
    {
      name: 'points',
      type: 'number',
      defaultValue: 1,
    },
    {
      name: 'quiz',
      type: 'relationship',
      relationTo: 'quizzes',
      required: true,
    },
  ],
}
