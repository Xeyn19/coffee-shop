import React from 'react'
import { useState, useEffect } from 'react';
const CoffeesPage = () => {
const [coffees, setCoffees] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {

  const fetchCoffees = async () => {
    setLoading(true);
    try {
      const response = await fetch('/coffee-data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } 
      setCoffees(await response.json());
    } catch (error) {
      console.error('Error fetching coffee data:', error);
    } finally {
      setLoading(false);
    }
  }
  fetchCoffees();
}, [])
if(loading) {
  return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
}

  return (
    <>
        <div className="flex min-h-screen flex-col">
          <h1 className='font-home text-6xl text-white ml-9 max-md:m-auto'>Coffee-List</h1>
          <div className="grid grid-cols-4 px-10 pt-8 pb-20 gap-10 max-md:grid-cols-1 max-md:p-10 max-md:self-center ">
            { coffees.map((coffee) => (
                <div key={coffee.id} className="bg-secondary-bg flex flex-col space-y-3 py-10 justify-center items-center shadow-md w-[300px] rounded-xl">
                <img
                  src={coffee.image}
                  alt={coffee.coffeeName}
                  className="w-40 h-40 object-cover rounded"
                />
                <h3 className='text-white font-home text-2xl'>{coffee.coffeeName}</h3>
                <h3 className='text-white'>₱{coffee.price}</h3>
                <button className="btn text-white bg-orange-950 outline-none border-none
                 rounded-xl px-3 py-2 shadow-none" onClick={()=>document.getElementById('my_modal_5').showModal()}>Buy Now</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            ))
          }
          </div>
        </div>
    </>
  )
}

export default CoffeesPage