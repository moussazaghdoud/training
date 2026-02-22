import { getPayload } from 'payload'
import config from '../payload.config'
import { tracksData } from '../lib/tracks-data'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding Rainbow Training Academy...')

  // Create admin user
  try {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@rainbow-academy.com',
        password: 'RainbowAdmin2024!',
        firstName: 'Admin',
        lastName: 'Rainbow',
        role: 'admin',
      },
    })
    console.log('Admin user created')
  } catch {
    console.log('Admin user already exists, skipping')
  }

  // Seed all tracks, levels, and modules
  for (const trackData of tracksData) {
    console.log(`\nSeeding track: ${trackData.name}`)

    // Create track
    let track
    try {
      track = await payload.create({
        collection: 'tracks',
        data: {
          name: trackData.name,
          slug: trackData.slug,
          persona: trackData.persona as any,
          color: trackData.color,
          icon: trackData.icon,
          goal: trackData.goal,
          shortDescription: trackData.shortDescription,
          totalDuration: trackData.totalDuration,
          moduleCount: trackData.moduleCount,
          status: 'published',
        },
      })
      console.log(`  Track created: ${track.name} (ID: ${track.id})`)
    } catch {
      console.log(`  Track "${trackData.name}" already exists, finding it...`)
      const existing = await payload.find({
        collection: 'tracks',
        where: { slug: { equals: trackData.slug } },
      })
      track = existing.docs[0]
    }

    // Create levels for this track
    for (const levelData of trackData.levels) {
      let level
      try {
        level = await payload.create({
          collection: 'levels',
          data: {
            name: levelData.name,
            slug: levelData.slug,
            number: levelData.number,
            track: track.id,
            shortDescription: `Level ${levelData.number} of the ${trackData.name} track`,
            unlockRule: 'sequential',
            estimatedDuration: levelData.duration,
            status: 'published',
          },
        })
        console.log(`    Level created: L${levelData.number} ${levelData.name} (ID: ${level.id})`)
      } catch {
        console.log(`    Level L${levelData.number} already exists, finding it...`)
        const existing = await payload.find({
          collection: 'levels',
          where: {
            and: [
              { track: { equals: track.id } },
              { number: { equals: levelData.number } },
            ],
          },
        })
        level = existing.docs[0]
      }

      // Create modules for this level
      for (let modIdx = 0; modIdx < levelData.modules.length; modIdx++) {
        const modData = levelData.modules[modIdx]
        try {
          const mod = await payload.create({
            collection: 'modules',
            data: {
              moduleId: modData.id,
              title: modData.title,
              shortDescription: modData.objectives[0] || '',
              track: track.id,
              level: level.id,
              duration: modData.duration,
              objectives: modData.objectives.map((obj) => ({ objective: obj })),
              contentTypes: modData.contentTypes as any,
              primaryType: modData.primaryType as any,
              order: modIdx + 1,
              status: 'published',
              version: 1,
            },
          })
          console.log(`      Module created: ${modData.id} - ${modData.title}`)
        } catch {
          console.log(`      Module ${modData.id} already exists, skipping`)
        }
      }
    }
  }

  // Seed certifications
  console.log('\nSeeding certifications...')
  const certData = [
    { trackSlug: 'support', tiers: [
      { tier: 'silver', name: 'Rainbow Certified Support Agent', validity: 24 },
      { tier: 'gold', name: 'Rainbow Support Expert', validity: 24 },
      { tier: 'platinum', name: 'Rainbow Support Champion', validity: 12 },
    ]},
    { trackSlug: 'customer-success', tiers: [
      { tier: 'silver', name: 'Rainbow Certified CS Associate', validity: 24 },
      { tier: 'gold', name: 'Rainbow CS Expert', validity: 24 },
      { tier: 'platinum', name: 'Rainbow CS Champion', validity: 12 },
    ]},
    { trackSlug: 'executives', tiers: [
      { tier: 'silver', name: 'Rainbow Certified Executive', validity: 24 },
      { tier: 'gold', name: 'Rainbow Executive Strategist', validity: 24 },
      { tier: 'platinum', name: 'Rainbow Executive Champion', validity: 12 },
    ]},
    { trackSlug: 'partners', tiers: [
      { tier: 'silver', name: 'Rainbow Certified Partner', validity: 24 },
      { tier: 'gold', name: 'Rainbow Partner Expert', validity: 24 },
      { tier: 'platinum', name: 'Rainbow Partner Champion', validity: 12 },
    ]},
    { trackSlug: 'developers', tiers: [
      { tier: 'silver', name: 'Rainbow Certified Developer', validity: 24 },
      { tier: 'gold', name: 'Rainbow Developer Expert', validity: 24 },
      { tier: 'platinum', name: 'Rainbow Developer Champion', validity: 12 },
    ]},
  ]

  for (const cd of certData) {
    const trackResult = await payload.find({
      collection: 'tracks',
      where: { slug: { equals: cd.trackSlug } },
    })
    if (trackResult.docs.length === 0) continue
    const track = trackResult.docs[0]

    for (const tierData of cd.tiers) {
      try {
        await payload.create({
          collection: 'certifications',
          data: {
            name: tierData.name,
            track: track.id,
            tier: tierData.tier as any,
            validityMonths: tierData.validity,
            badgeColor: tierData.tier === 'silver' ? '#C0C0C0' : tierData.tier === 'gold' ? '#FFD700' : '#E5E4E2',
            status: 'published',
          },
        })
        console.log(`  Certification created: ${tierData.name}`)
      } catch {
        console.log(`  Certification "${tierData.name}" already exists, skipping`)
      }
    }
  }

  console.log('\nSeeding complete!')
  console.log(`  Tracks: ${tracksData.length}`)
  console.log(`  Levels: ${tracksData.reduce((sum, t) => sum + t.levels.length, 0)}`)
  console.log(`  Modules: ${tracksData.reduce((sum, t) => sum + t.levels.reduce((s, l) => s + l.modules.length, 0), 0)}`)
  console.log(`  Certifications: ${certData.reduce((sum, c) => sum + c.tiers.length, 0)}`)

  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed error:', err)
  process.exit(1)
})
