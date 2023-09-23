import { useParams } from 'react-router-dom'
import slugify from 'slugify'

import noteData from '../../data/noteData'

import NoteNavbar from './NoteNavbar'
import NoteTags from './NoteTags'
import NoteChecklist from './NoteChecklist'

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
    <div className='w-full mt-2 h-[80vh] overflow-y-scroll'>
      <NoteNavbar note={selectedNote} />
      <div
        className={`mx-4 ${
          selectedNote.illustration ? 'mt-8' : 'mt-20'
        } md:mx-36`}
      >
        {selectedNote.illustration && (
          <img
            src={selectedNote.illustration}
            alt='related illustration'
            className='scale-75'
          />
        )}
        <h1 className='text-4xl font-bold'>
          {selectedNote.title} {selectedNote.emoji}
        </h1>

        <NoteTags tags={selectedNote.tags} />

        <p className='font-normal text-gray-300 mt-8'>{selectedNote.content}</p>

        <NoteChecklist note={selectedNote} />
      </div>
    </div>
  )
}

export default Note
