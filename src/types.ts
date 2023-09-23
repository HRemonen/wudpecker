import { ReactNode } from 'react'

export interface ActionItemProps {
  name: string
  icon: JSX.Element
  onClick: () => void
}

export interface WorkspaceItemProps {
  name: string
  icon?: ReactNode
  to: string
}

export interface SearchBarProps {
  placeholder: string
  onChange?: (value: string) => void
}

export interface ChecklistItem {
  text: string
  completed: boolean
}

export interface NoteFields {
  title: string
  content?: string
  subtitle?: string
  tags?: string[]
  checklist?: {
    title: string
    items: ChecklistItem[]
  }
  collaborators?: {
    name: string
    img: ReactNode
  }[]
  location?: {
    name: string
  }
  createdAt: string
  updatedAt: string
}

export interface Note {
  items: NoteFields[]
}
