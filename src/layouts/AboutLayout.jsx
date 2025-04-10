import React from 'react'
import { Outlet } from 'react-router-dom'
import coffees from '/about-coffees.jpg' // correct if needed

const AboutLayout = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${coffees})` }}
    >
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-md:py-10">
        <Outlet />
      </div>
    </div>
  )
}

export default AboutLayout
