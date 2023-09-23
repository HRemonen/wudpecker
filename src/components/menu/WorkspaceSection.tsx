import React from 'react'
import { WorkspaceItemProps } from '../../types'
import WorkspaceItem from './WorkspaceItem'

interface WorkspaceSectionProps {
  workspaceItems: WorkspaceItemProps[]
}

const WorkspaceSection = ({ workspaceItems }: WorkspaceSectionProps) => (
  <ul className='space-y-2'>
    <h5 className='px-8 mt-8 mb-4 text-xs font-semilight text-gray-400 uppercase'>
      Workspace
    </h5>
    <ul className='space-y-2'>
      {workspaceItems.map((item) => (
        <WorkspaceItem
          key={item.name}
          to={item.to}
          name={item.name}
          icon={item.icon}
        />
      ))}
    </ul>
  </ul>
)

export default WorkspaceSection
