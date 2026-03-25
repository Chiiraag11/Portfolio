'use client'

import { Award, ExternalLink, Calendar } from 'lucide-react'
import { CERTIFICATIONS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Certifications" subtitle="credentials & badges" />

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {CERTIFICATIONS.map((cert, i) => (
            <StaggerItem key={i} className="w-full max-w-md">
              <div className={`group glass rounded-2xl p-6 border bg-gradient-to-br ${cert.color} ${cert.border} hover:scale-[1.02] transition-all duration-300 h-full flex flex-col`}>
                {/* Badge */}
                <div className="text-4xl mb-4">{cert.badge}</div>

                <div className="flex-1">
                  <h3 className="font-display font-bold text-white text-sm leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-slate-200 text-xs font-mono mb-3">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-600 font-mono">
                    <Calendar size={10} />
                    {cert.date}
                  </div>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Award size={12} />
                  View Certificate
                  <ExternalLink size={10} />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
