import SearchBar from '../common/SearchBar'
import NoteSelector from './NoteSelector'

const NoteWorkspace = () => (
  <section className='mt-2'>
    <SearchBar placeholder='Search notes' />
    <h1 className='mt-8 text-3xl font-semibold'>Notes</h1>
    <NoteSelector />
  </section>
)

export default NoteWorkspace
