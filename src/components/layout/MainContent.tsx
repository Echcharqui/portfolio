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
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default MainContent
