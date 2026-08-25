'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { IDENTITY, SOCIAL, EXPERIENCE } from '@/lib/data'

const links = [
  { label: 'GitHub', href: SOCIAL.github },
  { label: 'LinkedIn', href: SOCIAL.linkedin },
  { label: 'LeetCode', href: SOCIAL.leetcode },
  { label: 'Email', href: `mailto:${SOCIAL.email}` },
]

const current = EXPERIENCE[0]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.25])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen lg:h-screen flex flex-col lg:grid lg:grid-cols-12 overflow-hidden bg-inkbg text-white"
    >
      <div className="dot-grid" />

      {/* ── Photo — full-bleed on the right, edge to edge ───────────────── */}
      <motion.div
        style={{ y: photoY }}
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative order-1 lg:order-2 lg:col-span-5 lg:col-start-8 h-[52vh] sm:h-[60vh] lg:h-full w-full"
      >
        <img
  src="/chirag.jpg"
  alt="Chirag Prasad"
  className="absolute inset-0 h-full w-full object-cover object-[center_78%]"
/>
        {/* tint + blend to keep the photo inside the site's palette */}
        {/* corner frame marks — premium/editorial touch */}
        <div className="absolute inset-0 bg-gradient-to-r from-inkbg/20 via-transparent to-transparent" />
        <span className="absolute top-6 right-6 h-8 w-8 border-t-2 border-r-2 border-lime/70" />
        <span className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-lime/70 hidden lg:block" />

        {/* giant outlined role mark bleeding off the edge */}
        <span className="numeral-outline hidden lg:block absolute -bottom-6 -right-4 text-accent-coral text-[9rem] xl:text-[11rem] leading-none select-none pointer-events-none">
          SE
        </span>

        {/* floating status card overlapping the photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-xs rounded-xl border border-white/15 bg-inkbg/80 backdrop-blur px-4 py-3 sm:px-5 sm:py-4"
        >
          <div className="flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-lime">
      Open to SDE Intern Roles
    </p>
  </div>
</motion.div>
      </motion.div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 order-2 lg:order-1 lg:col-span-7 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:pl-28 lg:pr-12 py-12 lg:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
            <p className="eyebrow-light">{IDENTITY.status}</p>
          </span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span className="font-mono text-[0.7rem] text-white/40">{IDENTITY.location}</span>
        </motion.div>

        <h1 className="font-display font-semibold tracking-tight leading-[0.9] text-[clamp(3.5rem,9.5vw,8rem)] overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white"
          >
            CHIRAG
          </motion.span>
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-lime"
          >
            PRASAD
            <motion.span
              animate={reduceMotion ? {} : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: 3, repeatDelay: 0.1 }}
              className="inline-block w-[0.5ch] text-accent-coral"
            >
              _
            </motion.span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-mono text-sm sm:text-base text-accent-coral tracking-wide"
        >
          {IDENTITY.role} — backend systems · security tooling · AI-integrated products
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-lg text-lg sm:text-xl text-white/65 leading-relaxed"
        >
          {IDENTITY.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm"
        >
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileTap={{ scale: 0.94 }}
              className="link-underline group inline-flex items-center gap-1 text-white/70 hover:text-lime transition-colors duration-300"
            >
              {l.label}
              <motion.span
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="inline-block"
              >
                ↗
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:flex absolute bottom-10 left-6 sm:left-10 lg:left-28 items-center gap-2 font-mono text-[0.7rem] text-white/40 z-10"
      >
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-lime"
        />
        scroll to read
      </motion.div>
    </section>
  )
}