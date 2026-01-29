import React from 'react'
import pamp from './images/pamp.png'
import bottle from './images/bottle.png'
import car from './images/car.png'
import ship from './images/ship.png'

const Gallery = () => {
  const images = [
    { id: 1, src: pamp, alt: 'Gas Station' },
    { id: 2, src: bottle, alt: 'Bottle' },
    { id: 3, src: car, alt: 'Car' },
    { id: 4, src: ship, alt: 'Ship' }
  ]

  return (
    <div className='bg-white py-12 px-6'>
      <div className='max-w-[1120px] mx-auto'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4'>
          {images.map((image) => (
            <div key={image.id} className='overflow-hidden rounded-lg'>
              <img 
                src={image.src} 
                alt={image.alt}
                className='w-full h-40 sm:h-52 md:h-64 object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
