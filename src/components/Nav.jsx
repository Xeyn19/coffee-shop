import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="w-full p-10 bg-transparent flex justify-center max-md:justify-start items-center">
      {/* Regular Nav Links */}
      <div className="hidden md:flex space-x-15 bg-secondary-bg px-10 py-4 rounded-full shadow-md font-medium text-slate-200">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="About" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
        >
          About
        </NavLink>
        <NavLink 
          to="Coffees" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
        >
          Coffees
        </NavLink>
        <NavLink 
          to="Contact" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

    
      <div className={`md:hidden ${isOpen ? 'flex flex-col text-center z-50 ' : 'hidden'} bg-secondary-bg absolute top-20 left-0 w-full py-4 space-y-6 px-6`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
          onClick={closeMenu} 
        >
          Home
        </NavLink>
        <NavLink 
          to="About" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
          onClick={closeMenu} 
        >
          About
        </NavLink>
        <NavLink 
          to="Coffees" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
          onClick={closeMenu} 
        >
          Coffees
        </NavLink>
        <NavLink 
          to="Contact" 
          className={({ isActive }) => 
            isActive 
            ? 'text-slate-700 transition-all underline underline-solid decoration-2 underline-offset-4 duration-700 ease-in-out' 
            : 'hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 transition-all duration-700 ease-in-out'
          }
          onClick={closeMenu} 
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
