import React from 'react'
import coffee from '/coffee-home-bg.png'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className="flex min-h-screen max-xl:flex-col max-xl:py-10  ">
            <div className="w-[50%] flex pt-20 px-30 flex-col space-y-10 max-md:w-full max-md:px-15 max-md:justify-center max-md:items-center
            max-xl:w-full max-xl:p-0 max-xl:items-center">
                <h1 className='font-home -ml-3 text-8xl max-md:text-6xl text-white max-xl:text-center  '>Quality Coffee <span className=''><br className='max-md:hidden' /></span>delivered to your <br className='max-md:hidden' />Door</h1>
                <p className='text-slate-700 block max-xl:text-center max-xl:px-40 max-md:px-5 max-md:text-sm'>Everything we do is a matter of heart, body and soul. Our mission is to provide sustainably sourced, hand-picked, quality coffee.</p>
                <button onClick={() => navigate('/Coffees')}
                className='bg-secondary-bg px-7 hover:text-slate-700 transition-all duration-500 ease-in-out
                 cursor-pointer text-white py-2 self-start rounded-full max-md:text-sm max-md:px-5 max-xl:self-center'>
                    Shop Coffees
                </button>
            </div>
            <div className="w-[50%] max-md:w-full xl:px-4  max-xl:w-full max-xl:flex max-xl:justify-center">
                <img src={coffee} alt="coffee" className='w-160'/>
            </div>
        </div>
    </>
  )
}

export default HomePage