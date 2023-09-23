import React from "react"

import Applogo from "./Applogo"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return(  
    <section className='fixed inset-y-0 left-0 max-h-screen w-60'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex-grow'>
          <Applogo />
          <div className='pr-4'>
            <ul className='space-y-4'>
              <SidebarItem 
                to='/' 
                name='Template'
              />
              <SidebarItem 
                to='/' 
                name='Import'
              />
              <SidebarItem 
                to='/' 
                name='Trash'
              />
              <SidebarItem 
                to='/notes' 
                name='Notes'
              />
              <SidebarItem 
                to='/tasks' 
                name='Tasks'
              />
              <SidebarItem 
                to='/announcements' 
                name='Announcements'
              />
              <SidebarItem 
                to='/music' 
                name='Music'
              />
              <SidebarItem 
                to='/questions' 
                name='Questions'
              />
              <SidebarItem 
                to='/dashboard' 
                name='Dashboard'
              />
              <SidebarItem 
                to='/development' 
                name='Development'
                />
              <SidebarItem 
                to='/swift' 
                name='Swift'
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar