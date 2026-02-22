'use client'

import { Mail, Linkedin } from 'lucide-react'

export default function HeroCard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                Sreeshanth Butti
              </h1>
              <h2 className="text-2xl md:text-3xl text-sanguine-500 font-semibold mb-4">
                AI & ML Enthusiast
              </h2>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Intern @ NTT DATA Innovation Centre. Working on Digital Human in Bangalore. 
                Deep Learning, NLP, LLMs, and Domain of speech processing. 
                Based in Hubballi Urban, Karnataka, India.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="mailto:sreeshanthbutti3@gmail.com"
                className="btn-solid flex items-center gap-2 hover:shadow-lg hover:shadow-sanguine-700/50 transition-all"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/sreeshanth-b-26a8a9295"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 hover:shadow-lg hover:shadow-sanguine-700/50 transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-sanguine-700 to-black rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-sanguine-700 rounded-full blur-3xl opacity-20"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-gray-400 text-sm">Portrait • Central Learning Building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
