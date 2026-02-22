import type { CollectionConfig } from 'payload'

export const ContentBlocks: CollectionConfig = {
  slug: 'content-blocks',
  admin: {
    useAsTitle: 'title',
    group: 'Training',
    defaultColumns: ['title', 'type', 'module', 'order', 'status'],
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
        { label: 'Video Lesson', value: 'VID' },
        { label: 'Interactive Walkthrough', value: 'INT' },
        { label: 'Scenario Simulation', value: 'SCN' },
        { label: 'Hands-On Lab', value: 'LAB' },
        { label: 'Knowledge Check', value: 'QIZ' },
        { label: 'Case Study', value: 'CAS' },
        { label: 'Reference Card', value: 'REF' },
        { label: 'Demo Script', value: 'DEM' },
        { label: 'Infographic', value: 'INF' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Main content for text-based blocks',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'embedUrl',
      type: 'text',
      admin: {
        description: 'URL for embedded video or interactive content',
      },
    },
    {
      name: 'duration',
      type: 'number',
      admin: {
        description: 'Duration in minutes',
      },
    },
    {
      name: 'instructions',
      type: 'richText',
      admin: {
        description: 'Step-by-step instructions for labs/scenarios',
      },
    },
    {
      name: 'module',
      type: 'relationship',
      relationTo: 'modules',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
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
