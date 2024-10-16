import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";

import { AddLink } from "./addComponent/AddLink";
import { AddHeader } from "./addComponent/AddHeader";
import { useEditorContext } from "../hooks/useEditorContext";
import { ILinkProps } from "../context/EditorProvider";
import { useState } from "react";
import { AddTitle } from "./addComponent/AddTitle";
import ImageUploader from "./ImageUploader";

export const LinkSection = () => {
  const { items, setSetItems, title } = useEditorContext();
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((el: ILinkProps) => el.id === active.id);
      const newIndex = items.findIndex((el: ILinkProps) => el.id === over?.id);
      const newArray = arrayMove(items, oldIndex, newIndex);
      setSetItems(newArray);
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const [showHeader, setShowHeader] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div className=' p-2 flex flex-col gap-4 max-w-[700px] w-full relative'>
      <AddLink
        showModal={showLink}
        setShowModal={setShowLink}
        setShowHeader={setShowHeader}
      />
      <div className='flex flex-row gap-4'>
        <AddHeader
          showModal={showHeader}
          setShowModal={setShowHeader}
          setShowLink={setShowLink}
        />
        <AddTitle
          showModal={showTitle}
          setShowModal={setShowTitle}
          setShowLink={setShowLink}
          items={items}
        />
        <ImageUploader id='photo' />
      </div>
      <div className='grow overflow-auto w-full'>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <div>
                <SortableItem key={item.id} {...item} />
              </div>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
