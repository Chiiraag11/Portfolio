'use client'

import { motion } from 'framer-motion'
import { FadeUp } from '@/components/ui/Animations'
import { SOCIAL } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 sm:px-10 lg:px-16 xl:px-24 py-32 sm:py-48 bg-lime overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      <div className="dot-grid opacity-[0.35]" style={{ filter: 'invert(1)' }} />

      <FadeUp className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-inkbg pulse-dot" />
          <p className="font-mono text-xs sm:text-sm text-ink/55">// contact</p>
        </div>

        <h2 className="font-display font-semibold tracking-tight text-ink leading-[0.94] text-[clamp(3.25rem,11vw,8rem)]">
          Let&apos;s build something.
        </h2>
        <p className="mt-8 text-xl sm:text-2xl text-ink/70 max-w-2xl">
          Open to Intern Roles · Remote / Onsite
        </p>

        <motion.a
          href={`mailto:${SOCIAL.email}`}
          whileTap={{ scale: 0.97 }}
          className="link-underline inline-block mt-12 font-display font-semibold text-[clamp(1.75rem,4vw,3rem)] text-ink hover:text-white transition-colors duration-300"
        >
          {SOCIAL.email} ↗
        </motion.a>

        <div className="mt-16 flex items-center gap-10 font-mono text-base sm:text-lg">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="link-underline text-ink/70 hover:text-ink transition-colors duration-300">GitHub</a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-ink/70 hover:text-ink transition-colors duration-300">LinkedIn</a>
          <a href={SOCIAL.leetcode} target="_blank" rel="noopener noreferrer" className="link-underline text-ink/70 hover:text-ink transition-colors duration-300">LeetCode</a>
        </div>
      </FadeUp>

      <p className="relative z-10 mt-32 font-mono text-xs text-ink/45">
        © {new Date().getFullYear()} Chirag Prasad 
      </p>
    </section>
  )
}
