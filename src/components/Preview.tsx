import { useEditorContext } from '../context/EditorContext'

export const Preview = () => {
  const { items } = useEditorContext()
  return (
    <div className='xl:w-9/12 w-11/12 h-5/6 bg-blue-500 rounded-[3rem] shadow-lg shadow-gray-400 px-2 py-10 overflow-auto scrollbar-none'>
      {items.map((item) => (
        <div
          key={item.id}
          className='h-20 w-full bg-white text-center my-2 rounded-md'
        >
          {item.id}
        </div>
      ))}
    </div>
  )
}
