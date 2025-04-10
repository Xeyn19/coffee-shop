import React from 'react'

const ContactPage = () => {
  return (
    <>
    <div className="flex min-h-screen p-10 flex-col items-center space-y-10 max-md:p-0 max-md:justify-center">
      <h1 className='font-home text-6xl text-white'>Contact Us</h1>
      <div className="bg-secondary-bg rounded-lg p-5 w-[800px] shadow-md max-md:w-[400px] max-md:h[200px] max-md:p-1">
        <form action="" className='font-primary p-10 max-md:text-sm'>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 max-md:gap-x-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className='text-white'>First Name</label>
              <input type="text" required className='bg-white rounded-lg outline-none px-3 py-2 w-full '/>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor=""className='text-white'>Last Name</label>
              <input type="text"  required className='bg-white rounded-lg  outline-none px-3 py-2 w-full  ' />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor=""className='text-white'>Email</label>
              <input type="email" required className='bg-white rounded-lg  outline-none px-3 py-2 w-full ' />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor=""className='text-white'>Phone</label>
              <input type="phone" required className='bg-white rounded-lg  outline-none px-3 py-2 w-full ' />
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-center mt-10">
              <label htmlFor=""  className='text-white'>Message</label>
              <textarea 
                required
                rows="6"
                className="w-full h-[200px] rounded-lg  bg-white outline-none px-3 py-2 resize-none"
              />

          </div>
          <button className='px-7 py-2 m-auto block text-center outline-none mt-10 rounded-lg cursor-pointer text-white bg-orange-950 hover:text-orange-900 duration-300 transition-all'>Submit</button>
        </form>
      </div>
    </div>
</>
  )
}

export default ContactPage