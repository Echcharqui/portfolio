import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MenuButton from './components/ui/MenuButton'
import MenuOverlay from './components/ui/MenuOverlay'
import HomePage from './routes/HomePage'
import ExperiencePage from './routes/ExperiencePage'
import ProjectsPage from './routes/ProjectsPage'
import SkillsPage from './routes/SkillsPage'
import AboutPage from './routes/AboutPage'
import ContactPage from './routes/ContactPage'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', menuOpen)
    return () => { document.body.classList.remove('is-menu-open') }
  }, [menuOpen])

  return (
    <BrowserRouter>
      <MenuButton isOpen={menuOpen} onToggle={() => setMenuOpen(v => !v)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
