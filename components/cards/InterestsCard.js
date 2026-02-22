'use client'

import { Brain, Lightbulb, Volume2 } from 'lucide-react'

export default function InterestsCard() {
  const interests = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Modeling and research in neural architectures and training.',
    },
    {
      icon: Lightbulb,
      title: 'NLP & LLMs',
      description: 'Semantic search, language modeling, and applied NLP systems.',
    },
    {
      icon: Volume2,
      title: 'Speech Processing',
      description: 'Audio analysis, speech recognition, and related ML pipelines.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div
        className="rounded-xl overflow-hidden border border-gray-800"
        style={{ backgroundColor: '#740B0A' }}
      >
        <div className="p-8 md:p-12">
          <h2 className="section-title text-white">Technical Interests</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest) => {
              const Icon = interest.icon
              return (
                <div key={interest.title} className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg w-fit hover:bg-white/20 transition-colors">
                    <Icon size={40} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{interest.title}</h3>
                    <p className="text-gray-100 text-sm leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
