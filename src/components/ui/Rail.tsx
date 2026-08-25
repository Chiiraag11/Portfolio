'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = [
  { id: 'home', label: 'intro' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'stack' },
  { id: 'projects', label: 'work' },
  { id: 'contact', label: 'contact' },
]

const CHROME: Record<string, { bg: string; border: string; idle: string; active: string; hover: string }> = {
  home: { bg: 'bg-inkbg/85 backdrop-blur', border: 'border-white/10', idle: 'text-white/35', active: 'text-lime', hover: 'group-hover:text-white' },
  experience: { bg: 'bg-rust/85 backdrop-blur', border: 'border-white/10', idle: 'text-white/35', active: 'text-lime', hover: 'group-hover:text-white' },
  skills: { bg: 'bg-deepblue/85 backdrop-blur', border: 'border-white/10', idle: 'text-white/35', active: 'text-electric', hover: 'group-hover:text-white' },
  projects: { bg: 'bg-inkbg/85 backdrop-blur', border: 'border-white/10', idle: 'text-white/35', active: 'text-lime', hover: 'group-hover:text-white' },
  contact: { bg: 'bg-lime', border: 'border-ink/10', idle: 'text-ink/40', active: 'text-ink', hover: 'group-hover:text-ink' },
}

export function Rail() {
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      setProgress(height > 0 ? scrolled / height : 0)

      let current = SECTIONS[0].id
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = s.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const chrome = CHROME[active] ?? CHROME.home

  return (
    <div
      className={`fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col justify-between w-14 py-10 items-center border-r transition-colors duration-500 ${chrome.bg} ${chrome.border}`}
      aria-hidden="true"
    >
      <div className="w-px bg-white/10 relative" style={{ height: '100%', position: 'absolute', top: 0, left: '50%' }}>
        <motion.div
          className={`absolute left-0 top-0 w-px ${active === 'contact' ? 'bg-ink' : 'bg-lime'}`}
          animate={{ height: `${progress * 100}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 24 }}
        />
      </div>
      <nav className="relative z-10 flex flex-col gap-8">
        {SECTIONS.map((s, i) => (
          <a key={s.id} href={`#${s.id}`} className="group relative flex items-center justify-center" aria-label={s.label}>
            <span
              className={`absolute right-full mr-3 whitespace-nowrap font-mono text-[0.65rem] opacity-0 -translate-x-1 transition-all duration-300 ease-spring group-hover:opacity-100 group-hover:translate-x-0 ${chrome.active}`}
            >
              {s.label}
            </span>
            <motion.span
              whileHover={{ scale: 1.25 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className={`font-mono text-[0.65rem] transition-colors duration-300 ${active === s.id ? chrome.active : `${chrome.idle} ${chrome.hover}`}`}
            >
              {String(i + 1).padStart(2, '0')}
            </motion.span>
          </a>
        ))}
      </nav>
    </div>
  )
}
