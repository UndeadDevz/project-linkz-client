import { useEditorContext } from '../context/EditorContext'

export const Preview = () => {
  const { items } = useEditorContext()
  return (
    <div className='xl:w-9/12 w-11/12 h-5/6 bg-blue-500 rounded-[3rem] shadow-lg shadow-gray-400 px-2 py-10 '>
      <div className='overflow-auto scrollbar-none h-full w-full'>
        {items.map((item) => (
          <a
            href={item.url}
            key={item.id}
            className='block h-20 w-full bg-white text-center my-2 rounded-md'
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
