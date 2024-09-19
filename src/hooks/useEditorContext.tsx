import { useContext } from 'react'
import { EditorContext } from '../context/EditorContext'

export const useEditorContext = () => {
  return useContext(EditorContext)
}
