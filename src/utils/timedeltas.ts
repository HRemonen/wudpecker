const timeSinceCreation = (dateString: string) => {
  const now = new Date()
  const createdAt = new Date(dateString)

  const diff = now.getTime() - createdAt.getTime()
  const diffInDays = Math.floor(diff / (1000 * 3600 * 24))
  const diffInHours = Math.floor(diff / (1000 * 3600))
  const diffInMinutes = Math.floor(diff / (1000 * 60))
  const diffInSeconds = Math.floor(diff / 1000)

  if (diffInDays > 1) {
    return `${diffInDays} days`
  }
  if (diffInDays === 1) {
    return `${diffInDays} day`
  }
  if (diffInHours > 0) {
    return `${diffInHours} hour`
  }
  if (diffInMinutes > 0) {
    return `${diffInMinutes} min`
  }

  return `${diffInSeconds} sec`
}

export default timeSinceCreation
