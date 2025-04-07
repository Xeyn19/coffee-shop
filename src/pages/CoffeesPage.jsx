import select from 'daisyui/components/select';
import React, { useState, useEffect } from 'react';

const CoffeesPage = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  useEffect(() => {
    const fetchCoffees = async () => {
      setLoading(true);
      try {
        const response = await fetch('/coffee-data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        setCoffees(await response.json());
      } catch (error) {
        console.error('Error fetching coffee data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoffees();
  }, []);

  const openModal = (coffee) => {
    setSelectedCoffee(coffee);
    document.getElementById('coffee_modal').showModal();
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <>
      <div className="flex min-h-screen flex-col font-primary">
        <div className="flex items-center space-x-3 px-10 pt-10">
          <h1 className="font-home text-6xl text-white">Coffee-List</h1>
          <div className="dropdown dropdown-end mt-2">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className=" text-slate-700">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn bg-orange-950 hover:text-orange-900 duration-300 transition-all text-white btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 px-10 pt-8 pb-20 gap-10 max-md:grid-cols-1 max-md:p-10 max-xl:grid-cols-2 max-xl:p-10">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="bg-secondary-bg flex flex-col space-y-3 py-10 justify-center items-center shadow-md w-[300px] rounded-xl">
              <img src={coffee.image} alt={coffee.coffeeName} className="w-40 h-40 object-cover rounded" />
              <h3 className="text-white font-home text-2xl">{coffee.coffeeName}</h3>
              <h3 className="text-white">₱{coffee.price}</h3>
              <button
                className="btn text-white bg-orange-950 hover:text-orange-900 duration-300 transition-all outline-none border-none rounded-xl px-3 py-2 shadow-none"
                onClick={() => openModal(coffee)}
              >
                Add to Basket
              </button>
            </div>
          ))}
        </div>
      </div>

      <dialog id="coffee_modal" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-primary-bg p-10">
          {selectedCoffee ? (
            <>
            <div key={selectedCoffee.id} className="bg-secondary-bg flex flex-col space-y-3 py-10 justify-center items-center shadow-md w-full rounded-xl">
              <img src={selectedCoffee.image} alt={selectedCoffee.coffeeName} className="w-40 h-40 object-cover rounded-md" />
              <h3 className="text-white font-home text-2xl">{selectedCoffee.coffeeName}</h3>
              <h3 className="text-white">₱{selectedCoffee.price}</h3>
            </div>
            <div className="flex items-center justify-evenly mt-5">
              <div className="space-x-2  bg-secondary-bg px-4 rounded-md py-3 shadow-md">
                <label htmlFor="">
                  <span className='text-slate-700 font-bold'>Quantity:</span> 
                </label>
                <input type="number" min="1" defaultValue="1" className='shadow-lg outline-none text-lg
                 bg-white text-slate-700 rounded-md px-2 font-primary w-10'/>
                <button className='ml-2 text-white bg-orange-950 hover:text-orange-900 duration-300 transition-all cursor-pointer outline-none border-none rounded-md px-3 py-2 shadow-none'>Add</button>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-black text-white rounded-md">Close</button>
                </form>
              </div>
            </div>
            </>
          ) : (
            <p>Loading coffee details...</p>
          )}
        </div>
      </dialog>
    </>
  );
};

export default CoffeesPage;
