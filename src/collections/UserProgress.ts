import type { CollectionConfig } from 'payload'

export const UserProgress: CollectionConfig = {
  slug: 'user-progress',
  admin: {
    group: 'Learner Data',
    defaultColumns: ['user', 'module', 'status', 'completedAt'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'module',
      type: 'relationship',
      relationTo: 'modules',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'not_started',
      options: [
        { label: 'Not Started', value: 'not_started' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Completed', value: 'completed' },
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
      name: 'timeSpent',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Time spent in minutes',
      },
    },
    {
      name: 'completedBlocks',
      type: 'array',
      fields: [
        {
          name: 'blockId',
          type: 'text',
        },
        {
          name: 'completedAt',
          type: 'date',
        },
      ],
    },
  ],
}
