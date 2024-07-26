import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ILinkProps, useEditorContext } from '../context/EditorContext'

export function SortableItem(props: ILinkProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  const { deleteLink } = useEditorContext()
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className='w-full xl:h-20 h-40 my-4 bg-white rounded-xl shadow-sm shadow-gray-400 flex overflow-hidden'
    >
      <div className='w-20 flex justify-center items-center ' {...listeners}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-grip-vertical cursor-grab'
          width='44'
          height='44'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#2c3e50'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
          <path d='M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
        </svg>
      </div>
      <div className='grow'>{props.id}</div>
      <div className=' w-32 flex justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-trash'
          width='44'
          height='44'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#2c3e50'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          onClick={() => deleteLink(props.id)}
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 7l16 0' />
          <path d='M10 11l0 6' />
          <path d='M14 11l0 6' />
          <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
          <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
        </svg>
      </div>
    </div>
  )
}
