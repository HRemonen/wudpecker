import React from 'react'
import { NavLink } from 'react-router-dom'
import { WorkspaceItemProps } from '../../types'

const WorkspaceItem = ({ to, name, icon }: WorkspaceItemProps) => (
  <li>
    <NavLink
      to={to}
      className='group relative inline-flex w-full items-center justify-start overflow-hidden rounded bg-white px-6 py-2 font-normal transition-all hover:bg-white'
    >
      {({ isActive }) => (
        <span
          className={`relative flex w-full text-left transition-colors duration-300 ease-in-out ${
            isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-500'
          }`}
        >
          {icon} <span className='pl-4 '>{name}</span>
        </span>
      )}
    </NavLink>
  </li>
)

export default WorkspaceItem
