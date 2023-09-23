import React from 'react'

import Applogo from './Applogo'
import ActionSection from './ActionSection'
import WorkspaceSection from './WorkspaceSection'

import actionItems from '../../data/actionItems'
import workspaceItems from '../../data/workspaceItems'

const Sidebar = () => (
  <section className='fixed inset-y-0 left-0 max-h-screen w-60'>
    <div className='flex h-full flex-col justify-between'>
      <div className='flex-grow'>
        <Applogo />
        <div className='pr-4'>
          <ActionSection actionItems={actionItems} />
          <WorkspaceSection workspaceItems={workspaceItems} />
        </div>
      </div>
    </div>
  </section>
)

export default Sidebar
