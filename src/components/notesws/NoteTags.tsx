const NoteTags = ({ tags }: { tags: string[] | undefined }) => {
  if (!tags) return null

  return (
    <div>
      {tags.map((tag) => (
        <p
          key={tag}
          className='inline-block mt-4 pr-4 py-2 text-md font-normal text-orange-300'
        >
          {tag}
        </p>
      ))}
    </div>
  )
}

export default NoteTags
