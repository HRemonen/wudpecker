import { SearchBarProps } from '../../types'

const SearchBar = ({ placeholder }: SearchBarProps) => (
  <div className='max-w-xs ml-6'>
    <div className='relative flex items-center w-full h-12 rounded-3xl border border-gray-200 bg-white overflow-hidden'>
      <div className='grid place-items-center h-full w-12 ml-12 text-gray-800'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>

      <input
        className='peer h-full w-full outline-none text-sm text-gray-300 pr-2'
        type='text'
        id='search'
        placeholder={placeholder}
      />
    </div>
  </div>
)

export default SearchBar
