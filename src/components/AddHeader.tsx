import { useState } from 'react'
import { useEditorContext } from '../hooks/useEditorContext'

export const AddHeader = () => {
  const { addHeader } = useEditorContext()
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const header = new FormData(e.target as HTMLFormElement)

    addHeader(header.get('header') as string)
    setShowModal(false)
  }

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className='w-fit h-fit p-1 text-md bg-blue-700  rounded-full text-center text-white justify-center flex items-center cursor-pointer'
      >
        + Header
      </div>
      {showModal && (
        <div className='absolute w-96 h-40 rounded-sm top-20 left-1/2 -translate-x-1/2 bg-gray-100 p-8 z-10 shadow-sm shadow-black'>
          <div
            className='w-full text-right text-red-500 cursor-pointer'
            onClick={() => setShowModal(false)}
          >
            x
          </div>
          <h2>Enter Header</h2>
          <form onSubmit={handleSubmit} className='flex gap-2'>
            <input
              id='header'
              name='header'
              className='grow'
              autoComplete='off'
            />
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
