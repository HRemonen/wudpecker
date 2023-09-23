import { NoteFields } from '../../types'
import timeSinceCreation from '../../utils/timedeltas'

const NoteCard = ({ note }: { note: NoteFields }) => {
  const sinceCreation = timeSinceCreation(note.createdAt)

  return (
    <div className='block max-w-sm w-full p-6 bg-gray-50 rounded-lg hover:bg-orange-100'>
      <div>
        <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-700'>
          {note.title}
        </h5>
        <p className='font-normal text-gray-400'>{note.content}</p>
      </div>
      <div className='mt-4'>
        <p className='text-gray-400'>{sinceCreation}</p>
      </div>
    </div>
  )
}

export default NoteCard
