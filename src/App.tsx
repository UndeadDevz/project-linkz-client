import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Editor } from "./editor/Editor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='bg-black h-full w-full'>Hello world!</div>
    },
    {
      path: "/editor",
      element: <Editor />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
