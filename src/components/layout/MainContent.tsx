import SectionReveal from '../ui/SectionReveal'
import Hero from '../../sections/Hero'
import About from '../../sections/About'
import Experience from '../../sections/Experience'
import Projects from '../../sections/Projects'
import Skills from '../../sections/Skills'
import Contact from '../../sections/Contact'

function MainContent() {
  return (
    <main className="main-content">
      <Hero />
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Experience /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
      <SectionReveal><Skills /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
    </main>
  )
}

export default MainContent
