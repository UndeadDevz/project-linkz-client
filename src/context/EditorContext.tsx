import { UniqueIdentifier } from '@dnd-kit/core'

import { createContext } from 'react'
import { ILinkProps } from './EditorProvider'

export const EditorContext = createContext<IEditorContext>({
  items: [],
  setSetItems: () => {},
  addLink: () => {},
  deleteLink: () => {}
})
export interface IEditorContext {
  items: ILinkProps[]
  setSetItems: (value: ILinkProps[]) => void
  addLink: (url: string) => void
  deleteLink: (value: UniqueIdentifier) => void
}
