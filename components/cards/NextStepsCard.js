'use client'

import { Mail, Linkedin } from 'lucide-react'

export default function NextStepsCard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="p-8 md:p-12 text-center">
          <h2 className="section-title text-center">Next Steps & Connect</h2>

          <p className="text-gray-300 text-base leading-relaxed mx-auto max-w-2xl mb-10">
            Open to Full time & internship opportunities and collaborations in AI, ML, and speech technologies. 
            Reach out via email or LinkedIn to discuss projects, research, or event collaborations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sreeshanthbutti3@gmail.com"
              className="btn-solid flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-sanguine-700/50 transition-all"
            >
              <Mail size={18} />
              Contact via Email
            </a>
            <a
              href="https://www.linkedin.com/in/sreeshanth-b-26a8a9295"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-sanguine-700/50 transition-all"
            >
              <Linkedin size={18} />
              View LinkedIn
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2025 Sreeshanth Butti. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
