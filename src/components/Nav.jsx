import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <nav className='w-full flex justify-center items-center p-10 '>
            <div className="space-x-15 flex bg-secondary-bg px-10 py-4 rounded-full shadow-md font-medium 
            text-slate-200 max-md:px-6 max-md:py-3 max-md:text-sm max-md:space-x-10">
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive 
                    ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out ' 
                    : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
                }
                > 
                Home
            </NavLink>
            <NavLink 
                to="About" 
                className={({ isActive }) => 
                    isActive 
                    ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out ' 
                    : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
                }
                > 
                About
            </NavLink>
            <NavLink 
                to="Coffees" 
                className={({ isActive }) => 
                    isActive 
                    ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out ' 
                    : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
                }
                > 
                Coffees
            </NavLink>
            <NavLink 
                to="Contact" 
                className={({ isActive }) => 
                    isActive 
                    ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out ' 
                    : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
                }
                > 
                Contact
            </NavLink>
            </div>
        </nav>
    </>
  )
}

export default Nav