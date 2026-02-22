'use client'

import { Mail, Linkedin, Phone } from 'lucide-react'

export default function ContactCard() {
  const contactItems = [
    {
      icon: Phone,
      href: 'tel:9110735760',
      label: 'Mobile',
      value: '+91 9110735760',
    },
    {
      icon: Mail,
      href: 'mailto:22bds016@iittdwd.ac.in',
      label: 'Email',
      value: '22bds016@iittdwd.ac.in',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sreeshanth-b-26a8a9295',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="p-8 md:p-12">
          <h2 className="section-title">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group"
                >
                  <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-6 flex flex-col items-center text-center gap-4">
                    <div className="bg-gray-400/20 p-4 rounded-lg group-hover:bg-sanguine-700/30 transition-colors">
                      <Icon size={32} className="text-sanguine-500 group-hover:text-sanguine-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.value}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
