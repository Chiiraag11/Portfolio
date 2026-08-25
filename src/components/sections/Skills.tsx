'use client'

import { FadeUp, StaggerChildren, StaggerItem } from '@/components/ui/Animations'
import { SKILLS } from '@/lib/data'

const ROW_COLORS = ['text-white', 'text-lime', 'text-electric', 'text-white']

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 sm:px-10 lg:px-16 xl:px-24 py-28 sm:py-40 bg-deepblue overflow-hidden">
      <div className="dot-grid opacity-60" />

      <div className="relative z-10 max-w-[1800px] mx-auto">
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-electric pulse-dot" />
            <p className="eyebrow-light">stack</p>
          </div>
          <h2 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.5rem)] text-white mb-20 tracking-tight">
            What I build with
          </h2>
        </FadeUp>

        <StaggerChildren>
          {SKILLS.map((group, gi) => (
            <StaggerItem key={group.category} className="py-8 sm:py-12 border-t border-white/10 first:border-t-0">
              <h3 className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-white/35 mb-5 sm:mb-7">
                {group.category}
              </h3>
              <p className="font-display font-semibold leading-[1.05] text-[clamp(2.2rem,6vw,4.75rem)] flex flex-wrap justify-between gap-x-8 sm:gap-x-10 gap-y-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`${ROW_COLORS[gi % ROW_COLORS.length]} hover:text-lime transition-colors duration-300 cursor-default`}
                  >
                    {item}
                  </span>
                ))}
              </p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
