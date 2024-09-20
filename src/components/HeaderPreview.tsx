import { ILinkProps } from '../context/EditorProvider'
import { useStyleContext } from '../context/StyleContext'

export const HeaderPreview = ({ item }: { item: ILinkProps }) => {
  const { appearance } = useStyleContext()
  return (
    <h2
      key={item.id}
      style={appearance.headerStyle}
      className='block h-fit w-full my-0.5 '
    >
      {item.name}
    </h2>
  )
}
