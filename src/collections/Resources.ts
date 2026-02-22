import type { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'type', 'status'],
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
        { label: 'Reference Card', value: 'reference_card' },
        { label: 'Demo Script', value: 'demo_script' },
        { label: 'Case Study', value: 'case_study' },
        { label: 'Infographic', value: 'infographic' },
        { label: 'Template', value: 'template' },
        { label: 'External Link', value: 'external_link' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'externalUrl',
      type: 'text',
    },
    {
      name: 'modules',
      type: 'relationship',
      relationTo: 'modules',
      hasMany: true,
    },
    {
      name: 'tracks',
      type: 'relationship',
      relationTo: 'tracks',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Communication', value: 'communication' },
        { label: 'Telephony', value: 'telephony' },
        { label: 'Integration', value: 'integration' },
        { label: 'Administration', value: 'administration' },
        { label: 'Security', value: 'security' },
        { label: 'Deployment', value: 'deployment' },
        { label: 'Developer', value: 'developer' },
        { label: 'Sales', value: 'sales' },
      ],
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
