import type { ReactNode } from 'react'

export interface Shell {
    label: string
    title: string
    intro?: string
    children?: ReactNode
}