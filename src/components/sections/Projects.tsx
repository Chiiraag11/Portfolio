'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { SectionHeader, StaggerChildren, StaggerItem } from '@/components/ui/Animations'

export default function Projects() {
  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Projects" subtitle="things i've built" />

        {/* Featured Projects */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <StaggerItem key={i}>
              <div className="group relative glass rounded-2xl p-8 border border-white/8 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-400 h-full flex flex-col overflow-hidden">
                {/* Featured badge */}
                <div className="absolute top-5 right-5 flex items-center gap-1 text-xs font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-1 rounded-full">
                  <Star size={10} fill="currentColor" />
                  Featured
                </div>

                {/* Gradient blob on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex-1 relative z-10">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 relative z-10">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/10 text-slate-200 text-sm hover:text-white hover:border-white/25 transition-all"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Rest of Projects */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {rest.map((project, i) => (
            <StaggerItem key={i}>
              <div className="group glass rounded-2xl p-6 border border-white/8 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 h-full flex flex-col">
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 border border-white/8 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={12} /> Demo
                  </a>
                  <span className="text-slate-700">·</span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
