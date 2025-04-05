import React from 'react'
import CoffeesPage from '../pages/CoffeesPage'
import { Outlet } from 'react-router-dom'

const CoffeesLayout = () => {
  return (
    <>
        <Outlet />
    </>
  )
}

export default CoffeesLayout