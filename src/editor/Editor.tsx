import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { SideBar } from './sideBar/SideBar'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { useState } from 'react'
import { SortableItem } from '../components/SortableItem'

export const Editor = () => {
  function handleDragEnd(event: any) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
  const [items, setItems] = useState([1, 2, 3])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  return (
    <div className='w-full h-screen flex flex-row bg-gray-200'>
      <div className='w-1/6 p-2 max-w-[400px] flex items-center justify-center py-4'>
        <SideBar />
      </div>
      <div className='grow flex justify-center pt-8'>
        <div className=' p-2 flex flex-col gap-4 max-w-[700px] w-full '>
          <div className='w-full h-16 text-xl bg-red-700  rounded-full text-center text-white justify-center flex items-center'>
            + add link
          </div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
      <div className='w-2/6 xl:max-w-[570px] max-w-[400px]  items-center justify-center flex  border-l border-gray-300'>
        <div className='xl:w-9/12 w-11/12 h-5/6 bg-blue-500 rounded-[3rem] shadow-lg shadow-gray-400 '></div>
      </div>
    </div>
  )
}
