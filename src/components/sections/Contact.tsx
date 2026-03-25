'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react'
import { SOCIAL } from '@/lib/data'
import { FadeUp } from '@/components/ui/Animations'

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-violet-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            open to opportunities
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
            Let&apos;s{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Whether you have a project in mind, an internship opportunity, or just want to say hello —
            my inbox is always open.
          </p>
        </FadeUp>

        {/* Contact Cards */}
        <FadeUp delay={0.15}>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: <Github size={24} />,
                label: 'GitHub',
                sub: 'chiragprasad',
                href: SOCIAL.github,
                glow: 'hover:shadow-white/10 hover:border-white/25',
              },
              {
                icon: <Linkedin size={24} />,
                label: 'LinkedIn',
                sub: 'in/chiragprasad',
                href: SOCIAL.linkedin,
                glow: 'hover:shadow-blue-500/20 hover:border-blue-500/40',
              },
              {
                icon: <Mail size={24} />,
                label: 'Email',
                sub: SOCIAL.email,
                href: `mailto:${SOCIAL.email}`,
                glow: 'hover:shadow-violet-500/20 hover:border-violet-500/40',
              },
            ].map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className={`group glass rounded-2xl p-6 border border-white/8 hover:shadow-lg transition-all duration-300 ${link.glow}`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors text-slate-200 group-hover:text-white">
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">{link.label}</p>
                    <p className="text-slate-300 text-xs font-mono mt-0.5">{link.sub}</p>
                  </div>
                  <ExternalLink size={12} className="text-slate-200 group-hover:text-slate-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </FadeUp>

        {/* CTA Button */}
        <FadeUp delay={0.25}>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-display font-bold text-lg hover:shadow-2xl hover:shadow-violet-500/30 active:scale-95 transition-all duration-200"
          >
            <Mail size={20} />
            Send me a message
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </FadeUp>

        {/* Divider */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <p className="text-slate-200 text-sm font-mono flex items-center justify-center gap-2">
            Built 
            by Chirag Prasad · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}
