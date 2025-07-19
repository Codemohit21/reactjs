import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/routes/home.jsx'
import About from './component/routes/aboutus.jsx'
import Contact from './component/routes/contactus.jsx'
import Github from './component/routes/github.jsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element:<Layout />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"Github",
        element:<Github />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
