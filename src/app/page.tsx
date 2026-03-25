import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import Achievements from '@/components/sections/Achievements'
import Positions from '@/components/sections/Positions'
import Certifications from '@/components/sections/Certifications'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { ScrollProgress, BackToTop } from '@/components/ui/ScrollProgress'

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Positions />
      <Certifications />
      <Projects />
      <Contact />
      <BackToTop />
    </main>
  )
}
