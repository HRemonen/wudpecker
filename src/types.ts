import { ReactNode } from "react"

export interface SidebarItemProps {
  to: string
  name: string
  icon?: ReactNode
}