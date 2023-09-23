import NoteCard from './NoteCard'

import noteData from '../../data/noteData'

const NoteSelector = () => (
  <section className='mt-2'>
    {noteData.items.map((item) => (
      <div key={item.title} className='flex items-center justify-between'>
        <NoteCard note={item} />
      </div>
    ))}
  </section>
)

export default NoteSelector
