'use client'

import { Users, Zap, TrendingUp, Mic2 } from 'lucide-react'

export default function LeadershipCard() {
  const roles = [
    {
      icon: Users,
      title: 'Team Management',
      description: 'Managed and mentored diverse club members, fostering collaboration and a positive, performance-driven environment.',
    },
    {
      icon: Zap,
      title: 'Event Planning',
      description: 'Spearheaded the successful planning and execution of dance events, workshops, and inter-collegiate competitions.',
    },
    {
      icon: TrendingUp,
      title: 'Member Development',
      description: 'Cultivated artistic and technical growth through structured training sessions and tailored performance opportunities.',
    },
    {
      icon: Mic2,
      title: 'Public Speaking',
      description: 'Represented the club in various forums, delivering speeches and coordinating performances for wider audiences.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="p-8 md:p-12">
          <h2 className="section-title">Leadership & Roles</h2>

          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-4xl">
            As President of the Dyna-Might (Dance Club) at IIIT Dharwad from 2023 to 2024, 
            Sreeshanth led a vibrant community of dancers, overseeing operations, events, and member growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => {
              const Icon = role.icon
              return (
                <div
                  key={role.title}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-sanguine-700/50 transition-all group"
                >
                  <div className="bg-sanguine-700/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-sanguine-700/40 transition-colors">
                    <Icon size={28} className="text-sanguine-500" />
                  </div>
                  <h3 className="font-semibold text-white mb-3">{role.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{role.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
