import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import Hero from '../../sections/Hero'
import About from '../../sections/About'
import Experience from '../../sections/Experience'
import Projects from '../../sections/Projects'
import Skills from '../../sections/Skills'
import Contact from '../../sections/Contact'

// Wraps each section in a div that gains .is-visible when it enters
// the viewport. CSS handles the animation inside a prefers-reduced-motion
// guard, so the default state (no JS, reduced motion) is always visible.
function RevealSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal-section${isVisible ? ' is-visible' : ''}`}>
      {children}
    </div>
  )
}

function MainContent() {
  return (
    <main className="main-content">
      <RevealSection><Hero /></RevealSection>
      <RevealSection><About /></RevealSection>
      <RevealSection><Experience /></RevealSection>
      <RevealSection><Projects /></RevealSection>
      <RevealSection><Skills /></RevealSection>
      <RevealSection><Contact /></RevealSection>
    </main>
  )
}

export default MainContent
