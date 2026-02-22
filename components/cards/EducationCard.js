'use client'

import { GraduationCap } from 'lucide-react'

export default function EducationCard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="p-8 md:p-12">
          <h2 className="section-title">Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - UG */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-sanguine-700/20 p-3 rounded-lg mt-1">
                  <GraduationCap size={24} className="text-sanguine-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Indian Institute of Information Technology Dharwad (UG)</h3>
                </div>
              </div>
              <div className="space-y-6 ml-12">
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    BTech in Data Science and Artificial Intelligence (2022 - 2026)
                  </p>
                  <p className="text-lg font-semibold text-white">CGPA: 7.25</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sanguine-400 mb-3">Degree Focus (DSAI)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Deep Learning, NLP, LLMs, Speech processing, Data science foundations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Earlier Education */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-sanguine-700/20 p-3 rounded-lg mt-1">
                  <GraduationCap size={24} className="text-sanguine-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Earlier Education</h3>
                </div>
              </div>
              <div className="space-y-6 ml-12">
                <div className="space-y-3">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-white">Narayana Junior College</span> — Kondapur
                    <br />
                    11th and 12th (MPC) — (2020 - 2022)
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-white">Montessori High School Gurukul</span>
                    <br />
                    10th class
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
