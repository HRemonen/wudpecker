import NoteCard from './NoteCard'

import noteData from '../../data/noteData'

const NoteSelector = () => (
  <div className='mt-2 h-[80vh] overflow-y-scroll'>
    {noteData.items.map((item) => (
      <div key={item.title} className='flex items-center justify-between'>
        <NoteCard note={item} />
      </div>
    ))}
  </div>
)

export default NoteSelector
