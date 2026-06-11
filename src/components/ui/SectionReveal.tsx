import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE } from './motionConfig'

interface Props {
  children: ReactNode
}

function SectionReveal({ children }: Props) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export default SectionReveal
