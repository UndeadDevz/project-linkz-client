import { BsAlignCenter, BsAlignEnd, BsAlignStart } from 'react-icons/bs'

export const TextAlign = ({
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
          value === 'start' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('start')
        }}
      >
        <BsAlignStart />
      </span>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === 'center' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('center')
        }}
      >
        <BsAlignCenter />
      </span>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === 'end' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('end')
        }}
      >
        <BsAlignEnd />
      </span>
    </span>
  )
}
