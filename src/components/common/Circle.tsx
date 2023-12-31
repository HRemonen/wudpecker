const Circle = ({ checked }: { checked: boolean }) => (
  <div
    className={`w-4 h-4 mr-4 ${
      checked ? 'bg-orange-300' : 'bg-white'
    } border border-gray-200 rounded-full relative aspect-[1/1]`}
  >
    {checked && (
      <div className='w-2 h-2 bg-white rounded-full absolute top-[3px] left-[3px]' />
    )}
  </div>
)

export default Circle
