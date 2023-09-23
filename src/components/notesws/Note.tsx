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
      <h1>{selectedNote.title}</h1>
    </div>
  )
}

export default Note
