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
