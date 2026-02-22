'use client'

export default function ProfileSnapshotCard() {
  const stats = [
    {
      label: 'Ongoing',
      heading: 'Internship',
      content: 'Intern @ NTT DATA, applying AI & ML skills. (FEB - JUN)',
    },
    {
      label: 'DS & AI',
      heading: 'Field',
      content: 'Undergraduate in Artificial Intelligence (IIIT Dharwad).',
    },
    {
      label: '2Y',
      heading: 'Leadership Tenure',
      content: 'President of student dance club (2023–2024)',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="p-8 md:p-12">
          <h2 className="section-title">Professional Profile Snapshot</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.heading}
                className="bg-gradient-to-br from-sanguine-700/20 to-sanguine-700/5 border border-sanguine-700/30 rounded-lg p-8 text-center hover:border-sanguine-700/60 transition-all"
              >
                <p className="text-xs font-semibold text-sanguine-400 uppercase tracking-wider mb-3">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">{stat.heading}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{stat.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
