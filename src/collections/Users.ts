import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'learner',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Manager', value: 'manager' },
        { label: 'Learner', value: 'learner' },
      ],
    },
    {
      name: 'persona',
      type: 'select',
      options: [
        { label: 'Support', value: 'support' },
        { label: 'Customer Success', value: 'customer-success' },
        { label: 'Executive', value: 'executive' },
        { label: 'Partner', value: 'partner' },
        { label: 'Developer', value: 'developer' },
      ],
    },
    {
      name: 'organization',
      type: 'text',
    },
  ],
}
