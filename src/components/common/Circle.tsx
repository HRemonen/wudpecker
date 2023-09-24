const Circle = ({ checked }: { checked: boolean }) => (
  <div className='w-4 h-4 xl:w-6 xl:h-6 mr-4 bg-orange-300 border border-gray-200 rounded-full relative aspect-[1/1]'>
    {checked && (
      <div className='w-2 h-2 xl:w-3.5 xl:h-3.5 bg-white rounded-full absolute top-[3px] left-[3px] xl:top-1 xl:left-1' />
    )}
  </div>
)

export default Circle
