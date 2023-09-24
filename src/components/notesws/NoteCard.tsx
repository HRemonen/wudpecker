import { useLocation, useNavigate } from 'react-router-dom'
import slugify from 'slugify'

import CollaboratorStack from '../common/CollaboratorStack'

import generateNotePreview from '../../utils/notePreview'
import timeSinceCreation from '../../utils/timedeltas'

import { NoteFields } from '../../types'
import Circle from '../common/Circle'

const NoteCard = ({ note }: { note: NoteFields }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const sinceCreation = timeSinceCreation(note.createdAt)

  const previewtext = generateNotePreview(note)

  const currentNote = location.pathname.split('/notes/')[1]

  const cleanedTitle = slugify(note.title, {
    lower: true, // Convert to lowercase
    remove: /[/*+~.()'"!:@]/g, // Remove specific characters
  })

  const handleNoteClick = () => {
    navigate(`/notes/${cleanedTitle}`)
  }

  return (
    <div
      role='button'
      tabIndex={0}
      className={`relative w-full p-6 mb-4 rounded-3xl hover:cursor-pointer ${
        currentNote === cleanedTitle
          ? 'bg-[#ffb759]'
          : 'bg-gray-50 hover:bg-orange-100'
      }`}
      onClick={handleNoteClick}
      onKeyDown={handleNoteClick}
    >
      <div>
        <h5
          className={`mb-2 text-lg font-semibold tracking-tight ${
            currentNote === cleanedTitle ? 'text-white' : 'text-gray-700'
          }`}
        >
          {note.title} {note.emoji}
        </h5>
        <p
          className={`text-sm font-medium ${
            currentNote === cleanedTitle ? 'text-white' : 'text-gray-400'
          }`}
          dangerouslySetInnerHTML={{
            __html: previewtext.replace(/\n/g, '<br />'),
          }}
        />
      </div>
      <div className='flex mt-4'>
        <p
          className={`text-sm font-medium ${
            currentNote === cleanedTitle ? 'text-white' : 'text-gray-300'
          }`}
        >
          {sinceCreation}
        </p>
        {note.collaborators && (
          <CollaboratorStack collaborators={note.collaborators} />
        )}
        {note.location && (
          <p
            className={`text-sm font-normal ml-auto ${
              currentNote === cleanedTitle ? 'text-gray-100' : 'text-orange-300'
            }`}
          >
            {note.location.name}
          </p>
        )}
        {note.pinned && (
          <div className='absolute top-4 right-0'>
            <Circle checked={note.pinned} />
          </div>
        )}
      </div>
    </div>
  )
}

export default NoteCard
