import { UniqueIdentifier } from '@dnd-kit/core'
import { nanoid } from 'nanoid/non-secure'
import { createContext, useContext, useState } from 'react'

const EditorContext = createContext<IEditorContext>({
  items: [],
  setSetItems: () => {},
  addLink: () => {},
  deleteLink: () => {}
})
interface IEditorContext {
  items: ILinkProps[]
  setSetItems: (value: ILinkProps[]) => void
  addLink: () => void
  deleteLink: (value: UniqueIdentifier) => void
}

export interface ILinkProps {
  id: UniqueIdentifier
}

export const EditorProvider = ({ children }: { children: JSX.Element }) => {
  const [items, setItems] = useState<ILinkProps[]>([])
  const setSetItems = (value: ILinkProps[]) => {
    setItems(value)
  }
  const addLink = () => {
    setItems((old) => [...old, { id: nanoid() }])
  }
  const deleteLink = (id: UniqueIdentifier) => {
    setItems((old) => {
      return old.filter((el) => el.id !== id)
    })
  }
  return (
    <EditorContext.Provider value={{ items, setSetItems, addLink, deleteLink }}>
      {children}
    </EditorContext.Provider>
  )
}

export const useEditorContext = () => {
  return useContext(EditorContext)
}
