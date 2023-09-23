import { Outlet } from 'react-router-dom'
import SearchBar from '../common/SearchBar'
import NoteSelector from './NoteSelector'

const NoteWorkspace = () => (
  <section className='mt-2 flex'>
    <div>
      <SearchBar placeholder='Search notes' />
      <h1 className='mt-8 ml-6 text-3xl font-semibold'>Notes</h1>
      <NoteSelector />
    </div>

    <Outlet />
  </section>
)

export default NoteWorkspace
