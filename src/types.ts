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

export interface Collaborator {
  name: string
  avatar: string
}

export interface NoteFields {
  title: string
  emoji?: string
  content?: string
  subtitle?: string
  tags?: string[]
  checklist?: {
    title: string
    items: ChecklistItem[]
  }
  collaborators?: Collaborator[]
  location?: {
    name: string
  }
  createdAt: string
  updatedAt: string
}

export interface Note {
  items: NoteFields[]
}
