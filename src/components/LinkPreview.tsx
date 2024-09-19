import { ILinkProps } from '../context/EditorContext'
import { useStyleContext } from '../context/StyleContext'

export const LinkPreview = ({ item }: { item: ILinkProps }) => {
  const { appearance } = useStyleContext()
  return (
    <a
      href={item.url}
      key={item.id}
      style={appearance.linkStyle}
      className='block h-20 w-full  text-center my-2 rounded-md'
    >
      {item.name}
      <br></br>
      {item.url}
    </a>
  )
}
