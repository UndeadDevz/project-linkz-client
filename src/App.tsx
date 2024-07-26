import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Editor } from "./editor/Editor";
import { Authentication } from "./components/Authentication";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className='bg-gray-600 h-screen w-full text-white'>
          Hello world!
        </div>
      )
    },
    {
      path: "/editor",
      element: <Editor />
    },
    {
      path: "/auth",
      element: <Authentication />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
