import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import MenuButton from './components/ui/MenuButton'
import MenuOverlay from './components/ui/MenuOverlay'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', menuOpen)
    return () => { document.body.classList.remove('is-menu-open') }
  }, [menuOpen])

  return (
    <>
      <MenuButton isOpen={menuOpen} onToggle={() => setMenuOpen(v => !v)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <MainLayout />
    </>
  )
}

export default App
