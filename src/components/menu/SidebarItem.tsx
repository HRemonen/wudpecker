import React from "react"
import { NavLink } from 'react-router-dom'
import { SidebarItemProps } from "../../types"

const SidebarItem = ({ to, name, icon }: SidebarItemProps) => (
  <li>
    <NavLink
      to={to}
      className='group relative inline-flex w-full items-center justify-start overflow-hidden rounded bg-white px-4 py-2 font-normal transition-all hover:bg-white'
    >
      {({ isActive }) => (
        <>
          <span
            className={`relative flex w-full text-left transition-colors duration-300 ease-in-out ${
              isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-500'
            }`}
          >
            <i className='mx-2'>{icon}</i> {name}
          </span>
        </>
      )}
    </NavLink>
  </li>
)

export default SidebarItem
