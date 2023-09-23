import React from 'react'

import Applogo from './Applogo'
import SidebarItem from './SidebarItem'
import ActionSection from './ActionSection'

const actionItems = [
  {
    name: 'Template',
    icon: (
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
          d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
        />
      </svg>
    ),
    onClick: () => {},
  },
  {
    name: 'Import',
    icon: (
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
          d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
        />
      </svg>
    ),
    onClick: () => {},
  },
  {
    name: 'Trash',
    icon: (
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
          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
        />
      </svg>
    ),
    onClick: () => {},
  },
]

const Sidebar = () => (
  <section className='fixed inset-y-0 left-0 max-h-screen w-60'>
    <div className='flex h-full flex-col justify-between'>
      <div className='flex-grow'>
        <Applogo />
        <div className='pr-4'>
          <ActionSection actionItems={actionItems} />
          <ul className='space-y-2'>
            <h5 className='px-8 mt-8 mb-4 text-xs font-semilight text-gray-300 uppercase'>
              Workspace
            </h5>
            <SidebarItem to='/' name='Notes' />
            <SidebarItem to='/tasks' name='Tasks' />
            <SidebarItem to='/announcements' name='Announcements' />
            <SidebarItem to='/music' name='Music' />
            <SidebarItem to='/questions' name='Questions' />
            <SidebarItem to='/dashboard' name='Dashboard' />
            <SidebarItem to='/development' name='Development' />
            <SidebarItem to='/swift' name='Swift' />
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Sidebar
