import React from 'react'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import CoffeesLayout from './layouts/CoffeesLayout'
import CoffeesPage from './pages/CoffeesPage'
import AboutLayout from './layouts/AboutLayout'
import AboutPage from './pages/AboutPage'
import ContactLayout from './layouts/ContactLayout'
import ContactPage from './pages/ContactPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
          <Route index element ={<HomePage />}/>
          <Route path='Coffees' element={<CoffeesLayout />}>
            <Route index element={<CoffeesPage />} />
          </Route>
          <Route path='About' element={<AboutLayout />}>
            <Route index element={<AboutPage />} />
          </Route>
          <Route path='Contact' element={<ContactLayout />}>
            <Route index element={<ContactPage />} />
          </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App