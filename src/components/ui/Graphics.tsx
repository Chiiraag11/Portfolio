'use client'

import { motion, useReducedMotion } from 'framer-motion'

/** Abstract node-network graphic for the hero split panel. */
export function HeroGraphic() {
  const reduceMotion = useReducedMotion()
  const nodes = [
    [40, 60], [160, 30], [260, 90], [90, 160], [220, 200],
    [320, 150], [60, 260], [200, 300], [330, 270],
  ]
  const edges = [
    [0, 1], [1, 2], [1, 3], [3, 4], [2, 5],
    [3, 6], [4, 7], [5, 8], [6, 7], [7, 8],
  ]

  return (
    <svg viewBox="0 0 380 340" className="w-full h-full max-w-md mx-auto" role="img" aria-label="Abstract network graphic">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="var(--lime)"
          strokeOpacity={0.35}
          strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y}
          r={i % 3 === 0 ? 5 : 3}
          fill={i % 3 === 0 ? 'var(--lime)' : 'var(--electric-blue)'}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          {!reduceMotion && i % 3 === 0 && (
            <animate
              attributeName="r"
              values={`${i % 3 === 0 ? 5 : 3};${i % 3 === 0 ? 7 : 4};${i % 3 === 0 ? 5 : 3}`}
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          )}
        </motion.circle>
      ))}
    </svg>
  )
}

const VARIANTS = {
  lime: { stroke: 'var(--lime)', fill: 'var(--lime)' },
  blue: { stroke: 'var(--electric-blue)', fill: 'var(--electric-blue)' },
  coral: { stroke: 'var(--accent-coral)', fill: 'var(--accent-coral)' },
} as const

/** Themed abstract technical visualization for a project card. */
export function ProjectVisual({ variant, kind }: { variant: keyof typeof VARIANTS; kind: 'gateway' | 'chat' | 'flow' }) {
  const c = VARIANTS[variant]

  if (kind === 'gateway') {
    // RateGuard — concentric rate-limit rings + traffic ticks
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="Rate limiting visualization">
        {[110, 80, 50].map((r, i) => (
          <motion.circle
            key={r}
            cx={150} cy={150} r={r}
            fill="none"
            stroke={c.stroke}
            strokeOpacity={0.3 + i * 0.15}
            strokeWidth={1.5}
            strokeDasharray="4 6"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ pathLength: { duration: 1, delay: i * 0.15 }, rotate: { duration: 30 + i * 10, repeat: Infinity, ease: 'linear' } }}
            style={{ transformOrigin: '150px 150px' }}
          />
        ))}
        <motion.circle cx={150} cy={150} r={6} fill={c.fill} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const x1 = 150 + Math.cos(angle) * 125, y1 = 150 + Math.sin(angle) * 125
          const x2 = 150 + Math.cos(angle) * 135, y2 = 150 + Math.sin(angle) * 135
          return (
            <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.stroke} strokeWidth={2}
              initial={{ opacity: 0.15 }} animate={{ opacity: [0.15, 0.7, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }} />
          )
        })}
      </svg>
    )
  }

  if (kind === 'chat') {
    // CashChat — query bars morphing into a chart
    return (
      <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="Data visualization">
        {[60, 130, 200, 250].map((x, i) => (
          <motion.rect
            key={x}
            x={x} width={28} rx={4}
            fill={c.fill} fillOpacity={0.85 - i * 0.12}
            initial={{ y: 250, height: 0 }}
            animate={{ y: 250 - [90, 150, 110, 170][i], height: [90, 150, 110, 170][i] }}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        <motion.path
          d="M 60 190 L 130 130 L 200 160 L 250 90"
          fill="none" stroke={c.stroke} strokeWidth={2}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.line x1={40} y1={250} x2={280} y2={250} stroke={c.stroke} strokeOpacity={0.3}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
      </svg>
    )
  }

  // LoanFlow — state machine graph
  const states = [[60, 150], [150, 70], [150, 230], [240, 150]]
  const flows = [[0, 1], [0, 2], [1, 3], [2, 3]]
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="State machine visualization">
      {flows.map(([a, b], i) => (
        <motion.line key={i} x1={states[a][0]} y1={states[a][1]} x2={states[b][0]} y2={states[b][1]}
          stroke={c.stroke} strokeOpacity={0.4} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }} />
      ))}
      {states.map(([x, y], i) => (
        <motion.rect key={i} x={x - 22} y={y - 16} width={44} height={32} rx={6}
          fill="none" stroke={c.stroke} strokeWidth={1.5}
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }} />
      ))}
      <motion.circle r={4} fill={c.fill}
        animate={{ cx: [60, 150, 240, 150, 60], cy: [150, 70, 150, 230, 150] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
    </svg>
  )
}
