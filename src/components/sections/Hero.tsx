'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { SOCIAL } from '@/lib/data'

const ROLES = ['CyberSecurity Practisioner', 'Full-Stack Developer']

function TypingEffect() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      if (displayed === current) timeout = setTimeout(() => setDeleting(true), 1400)
    } else {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
      if (displayed === '') {
        setDeleting(false)
        setIndex(p => (p + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="font-display italic text-brand">
      {displayed}
      <span className="inline-block w-px h-[0.9em] ml-1 bg-brand animate-pulse align-middle" />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Decorative editorial frame */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-6 right-6 md:left-10 md:right-10 h-px bg-line" />
        <div className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 h-px bg-line" />
        <div className="absolute top-24 bottom-10 left-6 md:left-10 w-px bg-line" />
        <div className="absolute top-24 bottom-10 right-6 md:right-10 w-px bg-line" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-10 md:px-16">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-10 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted"
        >
          <span>Portfolio · MMXXVI</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Available for internships.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3rem,11vw,9rem)] font-medium text-ink leading-[0.95] tracking-tight"
        >
          Chirag
          <br />
          <span className="italic font-light text-ink-soft">Prasad.</span>
        </motion.h1>

        {/* Main content row */}
        <motion.div
  initial={false}
  animate={{ opacity: 1 }}
          className="mt-2 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted mb-3">
              / currently
            </p>
            <p className="text-2xl md:text-3xl text-ink leading-snug">
              <TypingEffect />
            </p>
            <p className="mt-6 text-ink-soft text-base md:text-lg leading-relaxed max-w-xl">
              A developer at the intersection of{' '}
              <span className="text-ink font-medium">full-stack engineering</span> and{' '}
              <span className="text-ink font-medium">cybersecurity</span> — building secure, scalable
              applications that solve real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:bg-brand transition-colors"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/Chirag_Prasad_Resume.pdf"
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-ink text-ink font-medium text-sm hover:bg-ink hover:text-paper transition-colors"
              >
                <Download size={15} />
                Résumé
              </a>
            </div>
          </div>

          {/* Editorial portrait frame — swap the placeholder below for an <img src="/profile.jpg" .../> once a photo asset is added to /public */}
          <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.45 }}
  className="absolute top-28 right-10 md:right-16 lg:right-20 w-44 md:w-52 lg:w-60 hidden md:block"
>
  <div className="absolute inset-0 -m-3 border border-line rounded-2xl" />

  <div className="relative overflow-hidden rounded-2xl bg-paper-2 aspect-[3/4]">
    <img
      src="/profile.jpg"
      alt="Chirag Prasad"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute -bottom-3 -right-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted bg-paper px-2 py-1">
    / 2026
  </div>
</motion.div>
        </motion.div>

        {/* Bottom meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-1">
            {[
              { icon: <Github size={16} />, href: SOCIAL.github, label: 'GitHub' },
              { icon: <Linkedin size={16} />, href: SOCIAL.linkedin, label: 'LinkedIn' },
              { icon: <Mail size={16} />, href: `mailto:${SOCIAL.email}`, label: 'Email' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-full text-ink-soft hover:text-brand hover:bg-paper-2 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted flex items-center gap-3">
            <span>IIIT Bhopal</span>
            <span className="w-1 h-1 rounded-full bg-ink-muted" />
            <span>India</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
