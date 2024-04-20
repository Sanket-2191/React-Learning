import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }
//       //       {
//       //         path: "about",
//       //         element: <About />
//       //       },
//       //       {
//       //         path: "contact",
//       //         element: <Contact />
//       //       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='abc' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
