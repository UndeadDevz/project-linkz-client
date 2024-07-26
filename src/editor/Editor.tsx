import { SideBar } from './sideBar/SideBar'

import { MiddleSection } from '../components/MiddleSection'
import { EditorProvider } from '../context/EditorContext'
import { Preview } from '../components/Preview'

export const Editor = () => {
  return (
    <EditorProvider>
      <div className='w-full h-screen flex flex-row bg-gray-200'>
        <div className='w-1/6 p-2 max-w-[400px] flex items-center justify-center py-4'>
          <SideBar />
        </div>
        <div className='grow flex justify-center pt-8'>
          <MiddleSection />
        </div>
        <div className='w-2/6 xl:max-w-[570px] max-w-[400px]  items-center justify-center flex  border-l border-gray-300'>
          <Preview />
        </div>
      </div>
    </EditorProvider>
  )
}
