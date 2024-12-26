import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Errorpage from './Components/Errorpage/Errorpage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashbpard from './Components/Dashboard/Dashboard.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Bookdetails from './Components/Bookdetails/Bookdetails.jsx';
import Listedbooks from './Components/Listedbooks/Listedbooks.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'listedbooks',
        element:<Listedbooks></Listedbooks>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'books/:bookId',
        element:<Bookdetails></Bookdetails>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer />
  </StrictMode>,
)
