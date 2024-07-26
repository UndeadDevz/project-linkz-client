import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

import { SortableItem } from '../components/SortableItem'
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { ILinkProps, useEditorContext } from '../context/EditorContext'

export const MiddleSection = () => {
  const { items, setSetItems, addLink } = useEditorContext()
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((el: ILinkProps) => el.id === active.id)
      const newIndex = items.findIndex((el: ILinkProps) => el.id === over?.id)
      const newArray = arrayMove(items, oldIndex, newIndex)
      setSetItems(newArray)
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )
  return (
    <div className=' p-2 flex flex-col gap-4 max-w-[700px] w-full'>
      <div
        onClick={addLink}
        className='w-full h-16 text-xl bg-red-700  rounded-full text-center text-white justify-center flex items-center'
      >
        + add link
      </div>
      <div className='grow overflow-auto w-full'>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
