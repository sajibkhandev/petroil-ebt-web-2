import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gray-100 py-8 sm:py-12 px-4 sm:px-6'>
      <div className='max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8'>
        <div className='flex-1'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight'>
            The biggest<br />supplier on<br />the country
          </h1>
        </div>
        <div className='flex-1'>
          <p className='text-gray-700 text-xs sm:text-sm '>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
