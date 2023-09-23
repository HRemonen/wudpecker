import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'

import CollaboratorStack from '../common/CollaboratorStack'

import generateNotePreview from '../../utils/notePreview'
import timeSinceCreation from '../../utils/timedeltas'

import { NoteFields } from '../../types'

const NoteCard = ({ note }: { note: NoteFields }) => {
  const navigate = useNavigate()
  const sinceCreation = timeSinceCreation(note.createdAt)

  const previewtext = generateNotePreview(note)

  const handleNoteClick = () => {
    const cleanedTitle = slugify(note.title, {
      lower: true, // Convert to lowercase
      remove: /[/*+~.()'"!:@]/g, // Remove specific characters
    })

    navigate(`/notes/${cleanedTitle}`)
  }

  return (
    <div
      role='button'
      tabIndex={0}
      className='block max-w-sm w-full p-6 mb-4 bg-gray-50 rounded-3xl hover:bg-orange-100 hover:cursor-pointer'
      onClick={handleNoteClick}
      onKeyDown={handleNoteClick}
    >
      <div>
        <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-700'>
          {note.title} {note.emoji}
        </h5>
        <p
          className='text-sm font-medium text-gray-400'
          dangerouslySetInnerHTML={{
            __html: previewtext.replace(/\n/g, '<br />'),
          }}
        />
      </div>
      <div className='flex mt-4'>
        <p className='text-gray-300 text-sm font-semibold'>{sinceCreation}</p>
        {note.collaborators && (
          <CollaboratorStack collaborators={note.collaborators} />
        )}
        {note.location && (
          <p className='text-orange-300 text-sm font-normal ml-auto'>
            {note.location.name}
          </p>
        )}
      </div>
    </div>
  )
}

export default NoteCard
