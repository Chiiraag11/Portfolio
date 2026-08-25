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
      initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
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
        show: { transition: { staggerChildren: 0.09 } },
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
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ACCENT_MAP = {
  teal: { text: 'text-accent', bg: 'bg-accent' },
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue' },
  coral: { text: 'text-accent-coral', bg: 'bg-accent-coral' },
} as const

export function Eyebrow({
  label,
  accent = 'teal',
  light = false,
}: {
  label: string
  accent?: keyof typeof ACCENT_MAP
  light?: boolean
}) {
  const c = ACCENT_MAP[accent]
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className={`w-1.5 h-1.5 rounded-full pulse-dot ${c.bg}`} />
      <p className={light ? 'eyebrow-light' : 'eyebrow'}>{label}</p>
    </div>
  )
}

export function AccentBar({ accent = 'teal' }: { accent?: keyof typeof ACCENT_MAP }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = ACCENT_MAP[accent]

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={inView ? { width: 40 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`h-[3px] rounded-full mb-16 ${c.bg}`}
    />
  )
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <FadeUp className="mb-16">
      <div className="flex flex-col items-start gap-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[0.7rem] text-slate-500 font-mono uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {subtitle || title.toLowerCase()}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
      </div>
    </FadeUp>
  )
}
