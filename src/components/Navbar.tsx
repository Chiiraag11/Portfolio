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
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 140) {
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
            ? 'bg-paper/80 backdrop-blur-xl border-b border-line'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-3"
          >
            <div className="relative w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center font-display text-base font-medium">
              C
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand border-2 border-paper" />
            </div>
            <span className="font-display text-lg text-ink hidden sm:block tracking-tight">
              Chirag Prasad
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, 8).map(link => {
              const isActive = active === link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-[0.82rem] font-medium transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-brand"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* CTA + mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-paper text-[0.8rem] font-medium hover:bg-brand transition-colors"
            >
              Get in touch
              <span aria-hidden>→</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-ink hover:bg-paper-2 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
          >
            <div className="mx-4 mt-2 rounded-2xl bg-paper border border-line shadow-xl overflow-hidden">
              <div className="p-2 flex flex-col">
                {NAV_LINKS.map(link => {
                  const isActive = active === link.href.replace('#', '')
                  return (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-ink bg-paper-2'
                          : 'text-ink-soft hover:text-ink hover:bg-paper-2'
                      }`}
                    >
                      {link.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}