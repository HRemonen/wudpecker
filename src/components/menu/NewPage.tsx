import React from 'react'

const NewPage = () => (
  <div className='fixed bottom-12'>
    <button
      type='button'
      className='flex items-center space-x-1 px-6 py-2 rounded-md hover:bg-gray-200'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path
          fillRule='evenodd'
          d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z'
          clipRule='evenodd'
        />
      </svg>
      <span className='pl-4'>New Page</span>
    </button>
  </div>
)

export default NewPage
