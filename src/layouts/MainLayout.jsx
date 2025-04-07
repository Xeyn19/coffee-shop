import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
   <>
    <div className="bg-primary-bg font-primary">
        <Nav /> 
        <Outlet />
        <Footer />
    </div>
   </>
  )
}

export default MainLayout