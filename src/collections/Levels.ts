import type { CollectionConfig } from 'payload'

export const Levels: CollectionConfig = {
  slug: 'levels',
  admin: {
    useAsTitle: 'name',
    group: 'Training',
    defaultColumns: ['name', 'track', 'number', 'status'],
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
    },
    {
      name: 'number',
      type: 'number',
      required: true,
      min: 1,
      max: 4,
      admin: {
        description: '1=Foundation, 2=Practitioner, 3=Expert, 4=Champion',
      },
    },
    {
      name: 'track',
      type: 'relationship',
      relationTo: 'tracks',
      required: true,
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
      name: 'unlockRule',
      type: 'select',
      defaultValue: 'sequential',
      options: [
        { label: 'Sequential (complete previous level)', value: 'sequential' },
        { label: 'All previous completed', value: 'all_previous' },
        { label: 'Manual unlock', value: 'manual' },
      ],
    },
    {
      name: 'estimatedDuration',
      type: 'number',
      admin: {
        description: 'Estimated duration in hours',
        position: 'sidebar',
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
