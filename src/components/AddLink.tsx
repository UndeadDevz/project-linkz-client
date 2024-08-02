import { useState } from 'react'
import { useEditorContext } from '../context/EditorContext'

export const AddLink = () => {
  const { addLink } = useEditorContext()
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addLink(e.target[0].value)
    setShowModal(false)
  }

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className='w-full h-16 text-xl bg-red-700  rounded-full text-center text-white justify-center flex items-center'
      >
        + add link
      </div>
      {showModal && (
        <div className='absolute w-full h-full bg-gray-100 p-8'>
          <div className='w-full text-right text-white'>x</div>
          <h2>Enter Url</h2>
          <form onSubmit={handleSubmit} className='flex gap-2'>
            <input id='url' className='grow' />
            <button
              type='submit'
              className=' py-2 px-3 bg-blue-600 rounded-xl disabled:bg-gray-200 '
            >
              add
            </button>
          </form>
        </div>
      )}
    </>
  )
}
