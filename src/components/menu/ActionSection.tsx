import React from 'react'

interface ActionItem {
  name: string
  icon: JSX.Element
  onClick: () => void
}

interface ActionButtonProps {
  actionItems: ActionItem[]
}

const ActionSection = ({ actionItems }: ActionButtonProps) => (
  <ul className='space-y-2'>
    {actionItems.map((item) => (
      <li key={item.name}>
        <button
          type='button'
          key={`${item.name}-button`}
          className='flex items-center space-x-1 px-6 py-2 rounded-md hover:bg-gray-200'
          onClick={item.onClick}
        >
          {item.icon}
          <span className='pl-4'>{item.name}</span>
        </button>
      </li>
    ))}
  </ul>
)

export default ActionSection
