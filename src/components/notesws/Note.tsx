import { useParams } from 'react-router-dom'
import slugify from 'slugify'

import noteData from '../../data/noteData'

import NoteNavbar from './NoteNavbar'

const Note = () => {
  const { noteTitle } = useParams()

  const selectedNote = noteData.items.find((note) => {
    const cleanedTitle = slugify(note.title, {
      lower: true, // Convert to lowercase
      remove: /[/*+~.()'"!:@]/g, // Remove specific characters
    })

    return cleanedTitle === noteTitle
  })

  if (!selectedNote) return null

  return (
    <div className='w-full mt-2'>
      <NoteNavbar note={selectedNote} />
      <div className='mx-4 mt-8 md:mx-36 md:mt-20'>
        <h1 className='text-4xl font-bold'>
          {selectedNote.title} {selectedNote.emoji}
        </h1>
        {selectedNote.tags?.length && (
          <div>
            {selectedNote.tags.map((tag) => (
              <p
                key={tag}
                className='inline-block mt-4 pr-4 py-2 text-md font-normal text-orange-300'
              >
                {tag}
              </p>
            ))}
          </div>
        )}
        <p className='font-normal text-gray-300 mt-8'>{selectedNote.content}</p>
        <div>
          {selectedNote.checklist?.items.length && (
            <div className='mt-8'>
              <h3 className='text-2xl font-bold'>
                {selectedNote.checklist.title}
              </h3>
              <div className='mt-8 grid grid-cols-2 gap-4'>
                {selectedNote.checklist.items.map((item) => (
                  <div
                    key={item.text}
                    className='flex items-center hover:cursor-pointer'
                  >
                    <div className='w-6 h-6 mr-4 bg-white border border-gray-200 rounded-full relative'>
                      {item.completed && (
                        <div className='w-3.5 h-3.5 bg-orange-300 rounded-full absolute top-1 left-1' />
                      )}
                    </div>
                    <p className='text-md font-normal text-gray-500'>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Note
