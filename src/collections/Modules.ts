import type { CollectionConfig } from 'payload'

export const Modules: CollectionConfig = {
  slug: 'modules',
  admin: {
    useAsTitle: 'title',
    group: 'Training',
    defaultColumns: ['moduleId', 'title', 'track', 'level', 'duration', 'status'],
  },
  fields: [
    {
      name: 'moduleId',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique module ID (e.g., SUP-201, CS-301)',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      maxLength: 300,
    },
    {
      name: 'track',
      type: 'relationship',
      relationTo: 'tracks',
      required: true,
    },
    {
      name: 'level',
      type: 'relationship',
      relationTo: 'levels',
      required: true,
    },
    {
      name: 'duration',
      type: 'number',
      required: true,
      admin: {
        description: 'Duration in minutes',
      },
    },
    {
      name: 'objectives',
      type: 'array',
      fields: [
        {
          name: 'objective',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'prerequisites',
      type: 'relationship',
      relationTo: 'modules',
      hasMany: true,
      admin: {
        description: 'Modules that must be completed before this one',
      },
    },
    {
      name: 'contentTypes',
      type: 'select',
      hasMany: true,
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
        { label: 'Assessment', value: 'ASM' },
      ],
    },
    {
      name: 'primaryType',
      type: 'select',
      options: [
        { label: 'Conceptual', value: 'conceptual' },
        { label: 'Guided', value: 'guided' },
        { label: 'Hands-on', value: 'hands-on' },
        { label: 'Scenario', value: 'scenario' },
        { label: 'Strategic', value: 'strategic' },
        { label: 'Demo-driven', value: 'demo-driven' },
        { label: 'Case-based', value: 'case-based' },
        { label: 'Reference', value: 'reference' },
        { label: 'Interactive', value: 'interactive' },
        { label: 'Assessment', value: 'assessment' },
      ],
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
        { label: 'Vertical', value: 'vertical' },
        { label: 'AI', value: 'ai' },
        { label: 'Teams', value: 'teams' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order within the level',
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'In Review', value: 'review' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'version',
      type: 'number',
      defaultValue: 1,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
