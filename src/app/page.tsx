import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { Rail } from '@/components/ui/Rail'

export default function Home() {
  return (
    <main className="relative">
      <Rail />
      <div className="lg:pl-0">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
