'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { SOCIAL } from '@/lib/data'
import { FadeUp } from '@/components/ui/Animations'

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <div className="inline-flex items-center gap-2 chip mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Open to opportunities
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-medium text-ink leading-[1.02] tracking-tight">
            Let&apos;s{' '}
            <span className="italic font-light text-brand">connect.</span>
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed max-w-xl mx-auto mt-6 mb-12">
            Whether you have a project in mind, an internship opportunity, or just want to say hello —
            my inbox is always open.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="grid sm:grid-cols-3 gap-4 mb-12 text-left">
            {[
              { icon: <Github size={22} />, label: 'GitHub', sub: 'Chiiraag11', href: SOCIAL.github },
              { icon: <Linkedin size={22} />, label: 'LinkedIn', sub: 'in/chiragprasad11', href: SOCIAL.linkedin },
              { icon: <Mail size={22} />, label: 'Email', sub: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
            ].map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group surface surface-hover p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-paper-2 border border-line text-ink group-hover:text-brand transition-colors">
                    {link.icon}
                  </div>
                  <ExternalLink size={14} className="text-ink-muted group-hover:text-brand transition-colors" />
                </div>
                <div>
                  <p className="font-display text-lg text-ink">{link.label}</p>
                  <p className="text-ink-muted text-xs font-mono mt-1 truncate">{link.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-paper font-medium text-base hover:bg-brand transition-colors"
          >
            <Mail size={18} />
            Send me a message
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </FadeUp>

        <div className="mt-24 pt-8 border-t border-line">
          <p className="text-ink-muted text-sm font-mono">
            Chirag Prasad · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}
