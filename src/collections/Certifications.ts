import type { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  admin: {
    useAsTitle: 'name',
    group: 'Assessment',
    defaultColumns: ['name', 'track', 'tier', 'status'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'track',
      type: 'relationship',
      relationTo: 'tracks',
      required: true,
    },
    {
      name: 'tier',
      type: 'select',
      required: true,
      options: [
        { label: 'Silver (Certified)', value: 'silver' },
        { label: 'Gold (Expert)', value: 'gold' },
        { label: 'Platinum (Champion)', value: 'platinum' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'requirements',
      type: 'richText',
    },
    {
      name: 'requiredLevels',
      type: 'relationship',
      relationTo: 'levels',
      hasMany: true,
      admin: {
        description: 'Levels that must be completed for this certification',
      },
    },
    {
      name: 'badgeImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'badgeColor',
      type: 'text',
      defaultValue: '#C0C0C0',
    },
    {
      name: 'validityMonths',
      type: 'number',
      defaultValue: 24,
      admin: {
        description: 'Certification validity in months',
      },
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
