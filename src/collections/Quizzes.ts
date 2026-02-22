import type { CollectionConfig } from 'payload'

export const Quizzes: CollectionConfig = {
  slug: 'quizzes',
  admin: {
    useAsTitle: 'title',
    group: 'Assessment',
    defaultColumns: ['title', 'type', 'passingScore', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Knowledge Check', value: 'knowledge_check' },
        { label: 'Level Assessment', value: 'level_assessment' },
        { label: 'Certification Exam', value: 'certification_exam' },
      ],
    },
    {
      name: 'module',
      type: 'relationship',
      relationTo: 'modules',
      admin: {
        description: 'Associated module (for knowledge checks)',
      },
    },
    {
      name: 'certification',
      type: 'relationship',
      relationTo: 'certifications',
      admin: {
        description: 'Associated certification (for exams)',
      },
    },
    {
      name: 'passingScore',
      type: 'number',
      required: true,
      min: 0,
      max: 100,
      defaultValue: 70,
      admin: {
        description: 'Passing score percentage',
      },
    },
    {
      name: 'timeLimit',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Time limit in minutes (0 = unlimited)',
      },
    },
    {
      name: 'maxAttempts',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Maximum attempts (0 = unlimited)',
      },
    },
    {
      name: 'randomize',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showResults',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
