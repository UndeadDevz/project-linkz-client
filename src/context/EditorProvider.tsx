import { UniqueIdentifier } from '@dnd-kit/core'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { validateUrl } from '../utils/validateUrl'
import { EditorContext } from './EditorContext'

export interface ILinkProps {
  id: UniqueIdentifier
}

export const EditorProvider = ({ children }: { children: JSX.Element }) => {
  const [items, setItems] = useState<ILinkProps[]>([])
  const setSetItems = (value: ILinkProps[]) => {
    setItems(value)
  }
  const addLink = (url: string) => {
    setItems((old) => [
      ...old,
      { id: nanoid(), url: validateUrl(url), name: url, enabled: true }
    ])
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
