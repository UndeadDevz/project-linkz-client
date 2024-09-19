import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { validateUrl } from '../utils/validateUrl'
import ImageUploader from './ImageUploader'
import { LuTrash } from 'react-icons/lu'
import { GoPencil } from 'react-icons/go'
import { ILinkProps } from '../context/EditorProvider'
import { useEditorContext } from '../hooks/useEditorContext'

export function SortableItem(props: ILinkProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  const { deleteLink, setSetItems, items } = useEditorContext()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id
    const value = e.target.value

    const editIndex = items.findIndex((el: ILinkProps) => el.id === props.id)

    const modifiedItems = [...items]
    modifiedItems[editIndex] = { ...modifiedItems[editIndex], [key]: value }
    setSetItems(modifiedItems)
  }
  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id
    const value = e.target.checked

    const editIndex = items.findIndex((el: ILinkProps) => el.id === props.id)

    const modifiedItems = [...items]
    modifiedItems[editIndex] = { ...modifiedItems[editIndex], [key]: value }
    setSetItems(modifiedItems)
  }
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const editIndex = items.findIndex((el: ILinkProps) => el.id === props.id)

    const modifiedItems = [...items]
    modifiedItems[editIndex] = {
      ...modifiedItems[editIndex],
      url: validateUrl(e.target.value)
    }
    setSetItems(modifiedItems)
  }
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
      <div className='grow flex flex-col overflow-auto'>
        <label className='flex'>
          <input
            value={props.name}
            id='name'
            className='peer '
            onChange={handleChange}
          />
          <span className=' peer-focus:hidden'>
            <GoPencil />
          </span>
        </label>

        <label className='flex'>
          <input
            value={props.url}
            id='url'
            onChange={handleChange}
            type='url'
            onBlur={handleBlur}
            className='peer '
          />
          <span className=' peer-focus:hidden'>
            <GoPencil />
          </span>
        </label>
        <ImageUploader />
      </div>
      <div className=' w-20 flex flex-col justify-center items-center gap-4'>
        <label className='inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            id='enabled'
            checked={props.enabled}
            onChange={handleCheckChange}
            className='sr-only peer'
          />
          <div className="relative w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <LuTrash onClick={() => deleteLink(props.id)} />
      </div>
    </div>
  )
}
