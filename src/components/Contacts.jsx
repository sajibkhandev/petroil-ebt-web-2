import React from 'react'
import Map from './Map.jsx'

const Contacts = () => {
  return (
    <div className='w-full   ' >
        <Map />
        <div className=' px-3 py-4
         lg:p-12 w-full bg-red-500 text-white justify-center  '>
           <div className='max-w-284.75 mx-auto flex justify-between items-center gap-2'  > <h2 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl ' >
                Want to join as member branch in your area?
            </h2>
            <button className='font-semibold uppercase border border-white py-2 sm:py-3 px-4 sm:px-8 hover:bg-white hover:text-red-500 hover:border-red-500 duration-300 hover:cursor-pointer text-sm md:text-base ' >
                contact
            </button></div>
        </div>
    </div>
  )
}

export default Contacts