import { NoteFields } from '../../types'

const NoteChecklist = ({ note }: { note: NoteFields }) => {
  if (!note.checklist?.items.length || note.checklist.items.length === 0)
    return null

  return (
    <div className='mt-8'>
      <h3 className='text-2xl font-bold'>{note.checklist.title}</h3>
      <div className='mt-8 grid grid-cols-2 gap-4'>
        {note.checklist.items.map((item) => (
          <div
            key={item.text}
            className='flex items-center hover:cursor-pointer'
          >
            <div className='w-6 h-6 mr-4 bg-white border border-gray-200 rounded-full relative'>
              {item.completed && (
                <div className='w-3.5 h-3.5 bg-orange-300 rounded-full absolute top-1 left-1' />
              )}
            </div>
            <p className='text-md font-normal text-gray-500'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoteChecklist
