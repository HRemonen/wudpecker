import { Collaborator } from '../../types'

const CollaboratorStack = ({
  collaborators,
}: {
  collaborators: Collaborator[]
}) => (
  <div className='flex -space-x-2 ml-auto'>
    {collaborators.map((collaborator) => (
      <img
        key={collaborator.name}
        className='w-6 h-6 border border-white rounded-full'
        src={collaborator.avatar}
        alt={`${collaborator.name}-avatar`}
      />
    ))}
  </div>
)

export default CollaboratorStack
