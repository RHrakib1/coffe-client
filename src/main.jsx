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
import Register from './Component/Register.jsx';
import Login from './Component/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

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
    element: <ViewCoffe></ViewCoffe>,
    loader: () => fetch('http://localhost:5000/postcoffedata')
  },
  {
    path: `/updatecoffe/:id`,
    element: <Updatecoffe></Updatecoffe>,
    loader: ({ params }) => fetch(`http://localhost:5000/postcoffedata/${params.id}`)
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
