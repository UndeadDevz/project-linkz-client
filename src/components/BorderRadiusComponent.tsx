import {
  TbBorderCornerIos,
  TbBorderCornerPill,
  TbBorderCornerRounded,
  TbBorderCornerSquare
} from 'react-icons/tb'

export const BorderRadiusComponent = ({
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
          value === '0rem' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('0rem')
        }}
      >
        <TbBorderCornerSquare />
      </span>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === '1rem' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('1rem')
        }}
      >
        <TbBorderCornerRounded />
      </span>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === '1.5rem' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('1.5rem')
        }}
      >
        <TbBorderCornerIos />
      </span>
      <span
        className={` flex justify-center cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === '2rem' && 'bg-purple-700'
        }`}
        onClick={() => {
          onChange('2rem')
        }}
      >
        <TbBorderCornerPill />
      </span>
    </span>
  )
}
