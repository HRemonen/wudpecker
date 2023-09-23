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
          {isActive && (
            <span className='ml-auto'>
              {' '}
              {/* Use ml-auto to push this span to the right */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </span>
          )}
        </span>
      )}
    </NavLink>
  </li>
)

export default WorkspaceItem
