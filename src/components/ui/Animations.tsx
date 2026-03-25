'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeUp({ children, className = '', delay = 0 }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className = '', delay = 0 }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <FadeUp className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {subtitle || title.toLowerCase()}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
    </FadeUp>
  )
}
