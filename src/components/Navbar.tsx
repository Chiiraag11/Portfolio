'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080B14]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <button onClick={() => scrollTo('#home')} className="group flex items-center gap-2.5">
            {/* Logo mark: indigo → cyan gradient square */}
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold font-display z-10">
                C
              </div>
              {/* inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-60" />
            </div>
            <span className="text-[#F4F4F5] font-display font-semibold text-[1.05rem] hidden sm:block tracking-tight">
              Chirag
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">.</span>
            </span>
          </button>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-0.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            {NAV_LINKS.map(link => {
              const isActive = active === link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 text-[0.8rem] font-medium font-body transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/[0.08] rounded-lg border border-white/[0.1]"
                      style={{
                        boxShadow: '0 0 12px rgba(99,102,241,0.12)',
                      }}
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* ── Right side ── */}
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.07] border border-transparent hover:border-white/[0.08] transition-all duration-200"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
          >
            {/* frosted panel */}
            <div className="mx-4 mt-2 rounded-2xl bg-[#0D1120]/95 backdrop-blur-2xl border border-white/[0.08] shadow-[0_24px_48px_rgba(0,0,0,0.7)] overflow-hidden">
              {/* top accent line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
              <div className="p-3 flex flex-col gap-1">
                {NAV_LINKS.map(link => {
                  const isActive = active === link.href.replace('#', '')
                  return (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/[0.07] border border-white/[0.08]'
                          : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04]'
                      }`}
                    >
                      {link.label}
                    </button>
                  )
                })}
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
