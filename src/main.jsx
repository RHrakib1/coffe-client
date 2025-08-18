import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffe from './Component/Addcoffe.jsx';
import Updatecoffe from './Component/Updatecoffe.jsx';
import ViewCoffe from './Component/ViewCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/addcoffe',
    element: <Addcoffe></Addcoffe>,

  },
  {
    path: '/viewcoffe',
    element:<ViewCoffe></ViewCoffe>,
     loader:()=> fetch('http://localhost:5000/postcoffedata')
  },
  {
    path: '/updatecoffe',
    element: <Updatecoffe></Updatecoffe>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
