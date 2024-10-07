import { RxBorderSolid } from 'react-icons/rx'

export const BorderWidth = ({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) => {
  onChange
  return (
    <span className='flex gap-2'>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === '1px' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('1px')
        }}
      >
        <RxBorderSolid className=' stroke-[1px]' />
      </span>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === '2px' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('2px')
        }}
      >
        <RxBorderSolid className=' stroke-[2px]' />
      </span>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === '3px' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('3px')
        }}
      >
        <RxBorderSolid className=' stroke-[3px]' />
      </span>
    </span>
  )
}
