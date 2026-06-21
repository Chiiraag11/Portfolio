'use client'

import { Award, ExternalLink, Calendar } from 'lucide-react'
import { CERTIFICATIONS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-paper-2/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Certifications"
          subtitle="Credentials & badges"
          eyebrow="/ 07 — credentials"
        />

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <StaggerItem key={i}>
              <article className="group surface surface-hover p-7 h-full flex flex-col">
                <div className="text-4xl mb-5">{cert.badge}</div>
                <h3 className="font-display text-lg font-medium text-ink leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-brand text-sm font-medium mb-3">{cert.issuer}</p>
                <div className="flex items-center gap-1.5 text-xs text-ink-muted font-mono mb-5">
                  <Calendar size={11} />
                  {cert.date}
                </div>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-1.5 text-sm text-ink hover:text-brand transition-colors group/link"
                  >
                    <Award size={14} />
                    View Certificate
                    <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="mt-auto flex items-center gap-1.5 text-sm text-ink-muted">
                    <Award size={14} />
                    Issued credential
                  </span>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
