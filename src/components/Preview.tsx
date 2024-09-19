import { useEditorContext } from '../hooks/useEditorContext'
import { LinkPreview } from './LinkPreview'

export const Preview = () => {
  const { items } = useEditorContext()

  return (
    <div className='xl:w-9/12 w-11/12 h-5/6 bg-blue-500 rounded-[3rem] shadow-lg shadow-gray-400 px-2 py-10 '>
      <div className='overflow-auto scrollbar-none h-full w-full'>
        {items
          .filter((el) => el.enabled)
          .map((item) => (
            <LinkPreview item={item} key={item.id} />
          ))}
      </div>
    </div>
  )
}
