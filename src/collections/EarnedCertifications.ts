import type { CollectionConfig } from 'payload'

export const EarnedCertifications: CollectionConfig = {
  slug: 'earned-certifications',
  admin: {
    group: 'Learner Data',
    defaultColumns: ['user', 'certification', 'earnedAt', 'status'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'certification',
      type: 'relationship',
      relationTo: 'certifications',
      required: true,
    },
    {
      name: 'earnedAt',
      type: 'date',
      required: true,
    },
    {
      name: 'expiresAt',
      type: 'date',
    },
    {
      name: 'badgeUrl',
      type: 'text',
      admin: {
        description: 'Public verification URL',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'Revoked', value: 'revoked' },
      ],
    },
    {
      name: 'renewalHistory',
      type: 'array',
      fields: [
        {
          name: 'renewedAt',
          type: 'date',
        },
        {
          name: 'method',
          type: 'text',
        },
      ],
    },
  ],
}
