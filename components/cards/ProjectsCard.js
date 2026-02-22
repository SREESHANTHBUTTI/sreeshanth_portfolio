'use client'

import { Github } from 'lucide-react'

export default function ProjectsCard() {
  const projects = [
    {
      title: 'Quantum-GenAI-Cryptography',
      date: 'October 2025',
      tech: ['Quantum Computing', 'Generative AI', 'Cryptographic Workflows'],
      description: 'Built hybrid Quantum + GenAI cryptographic workflow using Qiskit and LLM-based text processing.',
    },
    {
      title: 'Diarizing Patient-Doctor Conversations',
      date: 'September - October 2025',
      tech: ['Speech Processing', 'Speaker Diarization', 'Deep Learning'],
      description: 'Created medical audio diarization system using SpeechBrain and PyTorch.',
    },
    {
      title: 'Real-Time Collaborative Drawing Canvas',
      date: 'August - September 2025',
      tech: ['Real-Time Systems', 'WebSockets', 'Backend Engineering'],
      description: 'Built multi-user drawing canvas with broadcast synchronization.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title m-0">Projects</h2>
            <a
              href="https://github.com/sreeshanthbutti3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid flex items-center gap-2 hover:shadow-lg hover:shadow-sanguine-700/50 transition-all"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="border-l-4 border-sanguine-700 pl-6 py-2 hover:pl-8 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{project.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-sanguine-700/20 text-sanguine-400 text-xs px-3 py-1 rounded-full border border-sanguine-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
