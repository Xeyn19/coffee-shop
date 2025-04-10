import React from 'react'
import { Outlet } from 'react-router-dom'
import coffees from '/about-coffees.jpg' // use correct path if needed

const CoffeesLayout = () => {
  return (
    <>
        <Outlet />
    </>
  )
}

export default CoffeesLayout