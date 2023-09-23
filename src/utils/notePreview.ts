import { NoteFields } from '../types'

const generateNotePreview = (note: NoteFields) => {
  let preview = ''

  // Check if the note has tags
  if (note.tags && note.tags.length > 0) {
    // Combine tags with a comma separator
    preview += note.tags.join(' ')

    // Check if tags overlap
    if (preview.length > 50) {
      // If tags overlap, truncate and add ellipsis
      preview = `${preview.slice(0, 50)} ...`
    }

    // Add a line break
    preview += '\n'
  }

  // Check if the note has content
  if (note.content) {
    // Add content as the second line
    preview += `${note.content.slice(0, 50)} ...`
  } else if (note.checklist && note.checklist.items.length > 0) {
    // If no content, use checklist items separated by "*"
    preview += note.checklist.items.map((item) => item.text).join(' - ')
  }

  return preview
}

export default generateNotePreview
