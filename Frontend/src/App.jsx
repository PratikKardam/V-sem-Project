import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Ride from './components/Ride/Ride'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Search from './components/search/Search'
import Home from './components/Home/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/search",
      element: <><Navbar/><Search/></>
    },
    {
      path: "/ride",
      element: <><Navbar/><Ride/></>
    }
  ])
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
