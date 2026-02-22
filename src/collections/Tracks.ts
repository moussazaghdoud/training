import type { CollectionConfig } from 'payload'

export const Tracks: CollectionConfig = {
  slug: 'tracks',
  admin: {
    useAsTitle: 'name',
    group: 'Training',
    defaultColumns: ['name', 'persona', 'status', 'moduleCount'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      maxLength: 200,
    },
    {
      name: 'persona',
      type: 'select',
      required: true,
      options: [
        { label: 'Support Teams', value: 'support' },
        { label: 'Customer Success', value: 'customer-success' },
        { label: 'Executives / CEOs', value: 'executive' },
        { label: 'Partners / Resellers', value: 'partner' },
        { label: 'Developers', value: 'developer' },
      ],
    },
    {
      name: 'color',
      type: 'text',
      required: true,
      defaultValue: '#6366f1',
      admin: {
        description: 'Hex color for the track (e.g., #2196F3)',
      },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Lucide icon name (e.g., headset, trophy, briefcase)',
      },
    },
    {
      name: 'totalDuration',
      type: 'number',
      admin: {
        description: 'Total duration in hours',
        position: 'sidebar',
      },
    },
    {
      name: 'moduleCount',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'goal',
      type: 'textarea',
      admin: {
        description: 'Primary learning goal for this track',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
