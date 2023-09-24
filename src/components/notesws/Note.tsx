import { useParams } from 'react-router-dom'
import slugify from 'slugify'

import noteData from '../../data/noteData'

import NoteNavbar from './NoteNavbar'
import NoteTags from './NoteTags'
import NoteChecklist from './NoteChecklist'
import NoteControllers from './NoteControllers'

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
    <div className='w-[30%] xl:w-[60%] flex-grow'>
      <NoteNavbar note={selectedNote} />
      <div
        className={`mx-4 max-h-[80vh] mt-4 overflow-y-scroll scrollbar-hide ${
          selectedNote.illustration ? 'mt-2 md:mt-24 xl:mt-12' : 'mt-24'
        } mx-12 xl:mx-36`}
      >
        {selectedNote.illustration && (
          <img
            src={selectedNote.illustration}
            alt='related illustration'
            className='object-scale-down h-[320px] w-[480px] mx-auto'
          />
        )}
        <h1 className='text-4xl font-bold'>
          {selectedNote.title} {selectedNote.emoji}
        </h1>

        <NoteTags tags={selectedNote.tags} />

        <p className='font-normal text-gray-300 mt-8'>{selectedNote.content}</p>

        <NoteChecklist note={selectedNote} />

        <NoteControllers />
      </div>
    </div>
  )
}

export default Note
