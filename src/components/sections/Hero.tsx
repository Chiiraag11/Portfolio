'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { SOCIAL } from '@/lib/data'

const ROLES = [
  'Aspiring Software Engineer',
  'Full-Stack Developer',
]

function TypingEffect() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index]

    let timeout

    if (!deleting) {
      // typing
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)

      if (displayed === current) {
        timeout = setTimeout(() => setDeleting(true), 1200)
      }
    } else {
      // deleting
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 40)

      if (displayed === '') {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="gradient-text font-display font-bold">
      {displayed}
      <span className="inline-block w-0.5 h-8 ml-1 bg-violet-400 animate-pulse align-middle" />
    </span>
  )
}

// Floating orb
function Orb({ x, y, size, delay, color }: { x: string; y: string; size: number; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -20, 10, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Background orbs */}
      <Orb x="10%" y="20%" size={500} delay={0} color="rgba(59,130,246,0.07)" />
      <Orb x="60%" y="60%" size={600} delay={3} color="rgba(139,92,246,0.08)" />
      <Orb x="80%" y="10%" size={400} delay={6} color="rgba(6,182,212,0.06)" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-slate-300 font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Internships & Full-time Roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight mb-4"
        >
          Chirag{' '}
          <span className="gradient-text">Prasad</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl min-h-[44px] mb-6"
        >
          <TypingEffect />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
         Turning ideas into efficient solutions through strong DSA and system design skills. 3rd-year IIIT Bhopal student driven by curiosity in cybersecurity and modern web development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 active:scale-95 transition-all duration-200"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 text-white font-medium hover:bg-white/8 hover:border-white/20 active:scale-95 transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: <Github size={20} />, href: SOCIAL.github, label: 'GitHub' },
            { icon: <Linkedin size={20} />, href: SOCIAL.linkedin, label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: `mailto:${SOCIAL.email}`, label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-xl glass border border-white/8 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
