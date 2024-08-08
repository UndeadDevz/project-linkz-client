import { useEditorContext } from '../context/EditorContext'
import { useStyleContext } from '../context/StyleContext'

export const Preview = () => {
  const { items } = useEditorContext()
  const { appearance } = useStyleContext()
  return (
    <div className='xl:w-9/12 w-11/12 h-5/6 bg-blue-500 rounded-[3rem] shadow-lg shadow-gray-400 px-2 py-10 '>
      <div className='overflow-auto scrollbar-none h-full w-full'>
        {items
          .filter((el) => el.enabled)
          .map((item) => (
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
          ))}
      </div>
    </div>
  )
}
