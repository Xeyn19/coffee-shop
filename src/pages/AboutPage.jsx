import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen px-6">
      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-10  space-y-10 text-center text-white max-w-3xl">
        <h3 className="text-lg tracking-widest max-md:text-sm">BE OUR GUEST</h3>
        <h1 className="text-7xl md:text-6xl font-bold font-home max-md:text-3xl">Taste the Coffee of Premium Quality</h1>
        <p className="text-md px-20 max-md:px-0">
          We appreciate your trust greatly. Our clients choose us and our products because they know we are the best.
        </p>
        <div className="space-y-2 text-md">
          <h3>MON-FRI: 8AM - 5PM</h3>
          <h3>SATURDAY: 9AM - 4PM</h3>
        </div>
        <button onClick={() => navigate('/Coffees')}
        className="mt-4 text-white bg-orange-950 cursor-pointer hover:text-orange-900 duration-300 font-semibold px-6 py-2 rounded-lg shadow-md ">
          Our Coffees
        </button>
      </div>
    </div>
  )
}

export default AboutPage
