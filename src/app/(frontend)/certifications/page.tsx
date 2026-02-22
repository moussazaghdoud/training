import React from 'react'
import Link from 'next/link'
import { tracksData } from '@/lib/tracks-data'
import { CertificationsClient } from '@/components/ui/CertificationsClient'

const tiers = [
  {
    tier: 'silver',
    label: 'Certified',
    gradient: 'from-gray-300 to-gray-400',
    textColor: 'text-gray-700',
    borderColor: 'border-gray-300',
    requirements: 'Complete L1 (Foundation) + L2 (Practitioner), pass assessment at 70%',
    validity: '2 years',
    badge: 'Silver Shield',
  },
  {
    tier: 'gold',
    label: 'Expert',
    gradient: 'from-yellow-300 to-yellow-500',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-400',
    requirements: 'Complete L1-L3 (Foundation through Expert), pass assessment at 80%',
    validity: '2 years',
    badge: 'Gold Shield + Star',
  },
  {
    tier: 'platinum',
    label: 'Champion',
    gradient: 'from-slate-300 to-slate-500',
    textColor: 'text-slate-700',
    borderColor: 'border-slate-400',
    requirements: 'Complete all 4 levels, pass assessment at 85% + practical evaluation',
    validity: '1 year (renewable)',
    badge: 'Platinum Shield + Crown',
  },
]

const certifications = tracksData.map((track) => ({
  track: track.name,
  slug: track.slug,
  color: track.color,
  certs: [
    { tier: 'silver', name: `Rainbow Certified ${track.persona === 'support' ? 'Support Agent' : track.persona === 'customer-success' ? 'CS Associate' : track.persona === 'executive' ? 'Executive' : track.persona === 'partner' ? 'Partner' : track.persona === 'sales' ? 'Sales Associate' : track.persona === 'administrator' ? 'Administrator' : 'Developer'}` },
    { tier: 'gold', name: `Rainbow ${track.persona === 'support' ? 'Support Expert' : track.persona === 'customer-success' ? 'CS Expert' : track.persona === 'executive' ? 'Executive Strategist' : track.persona === 'partner' ? 'Partner Expert' : track.persona === 'sales' ? 'Sales Expert' : track.persona === 'administrator' ? 'Administrator Expert' : 'Developer Expert'}` },
    { tier: 'platinum', name: `Rainbow ${track.persona === 'support' ? 'Support Champion' : track.persona === 'customer-success' ? 'CS Champion' : track.persona === 'executive' ? 'Executive Champion' : track.persona === 'partner' ? 'Partner Champion' : track.persona === 'sales' ? 'Sales Champion' : track.persona === 'administrator' ? 'Administrator Champion' : 'Developer Champion'}` },
  ],
}))

export default function CertificationsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">Certifications</span>
      </nav>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-extrabold text-slate-900">Certifications</h1>
        <p className="text-slate-500 mt-2">
          Earn industry-recognized credentials through our 3-tier certification program across all learning tracks.
        </p>
      </div>

      {/* Earned Certifications (client component) */}
      <CertificationsClient />

      {/* Tier Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.tier} className={`bg-white rounded-2xl border ${t.borderColor} p-6 relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${t.gradient}`} />
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center mb-4 shadow-lg`}>
              <svg className={`w-7 h-7 ${t.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 capitalize">{t.tier}</h3>
            <p className="text-sm font-semibold text-indigo-600 mb-3">{t.label}</p>
            <div className="space-y-2 text-sm text-slate-600">
              <p><span className="font-medium text-slate-700">Requirements:</span> {t.requirements}</p>
              <p><span className="font-medium text-slate-700">Validity:</span> {t.validity}</p>
              <p><span className="font-medium text-slate-700">Badge:</span> {t.badge}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications by Track */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-bold text-slate-900">All Certifications</h2>
        {certifications.map((trackCert) => (
          <div key={trackCert.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="h-1" style={{ backgroundColor: trackCert.color }} />
            <div className="p-6">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: trackCert.color }} />
                {trackCert.track}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {trackCert.certs.map((cert) => {
                  const tierInfo = tiers.find((t) => t.tier === cert.tier)!
                  return (
                    <div key={cert.tier} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tierInfo.gradient} flex items-center justify-center shadow-sm shrink-0`}>
                        <svg className={`w-5 h-5 ${tierInfo.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{cert.name}</p>
                        <p className="text-xs text-slate-400 capitalize">{cert.tier}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6 text-center">
        <h3 className="text-lg font-display font-bold text-slate-900 mb-2">Badge Verification</h3>
        <p className="text-sm text-slate-600 mb-4">
          All certifications are issued as Open Badges 3.0 standard digital credentials.
          Share on LinkedIn, embed in email signatures, or verify via unique URL.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Cryptographically signed
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            LinkedIn compatible
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Publicly verifiable
          </span>
        </div>
      </div>
    </div>
  )
}
