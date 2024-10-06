import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Editor } from './editor/Editor'
import { Authentication } from './auth/Authentication'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='bg-black h-full w-full'>Hello world!</div>
    },
    {
      path: '/editor',
      element: <Editor />
    },
    {
      path: '/auth',
      element: <Authentication />
    },
    {
      path: '/home',
      element: <Home />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
