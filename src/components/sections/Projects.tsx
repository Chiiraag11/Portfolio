'use client'

import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Projects() {
  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="section-pad bg-paper-2/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Selected Work" subtitle="Things I've built" eyebrow="/ 03 — projects" />

        {/* Featured */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <StaggerItem key={i}>
              <article className="group relative surface surface-hover p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="chip !bg-paper !border-brand/30 !text-brand">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </span>
                  <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
                </div>

                <h3 className="font-display text-3xl font-medium text-ink mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-ink-soft text-[0.95rem] leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-7">
                  {project.stack.map(t => (
                    <span key={t} className="chip !text-[0.65rem]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-5 border-t border-line">
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-brand transition-colors"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
                  >
                    <Github size={13} />
                    Code
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Rest */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <StaggerItem key={i}>
              <article className="group surface surface-hover p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-medium text-ink leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-muted shrink-0 group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <p className="text-ink-soft text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0, 4).map(t => (
                    <span key={t} className="chip !text-[0.65rem]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-xs text-ink-muted font-mono pt-4 border-t border-line">
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-brand transition-colors"
                    >
                      <ExternalLink size={12} /> demo
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-brand transition-colors"
                  >
                    <Github size={12} /> source
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
