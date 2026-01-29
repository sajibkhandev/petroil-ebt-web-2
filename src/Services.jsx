import React from 'react'
import service1 from './images/Services1 .png'
import service2 from './images/Services2.png'
import service3 from './images/Services3.png'

const Services = () => {
  const services = [
    { id: 1, src: service1, alt: 'Service 1' },
    { id: 2, src: service2, alt: 'Service 2' },
    { id: 3, src: service3, alt: 'Service 3' }
  ]

  return (
    <div className='bg-white py-12 px-6'>
      <div className='max-w-[1120px] mx-auto'>
        <div className='mb-8 sm:mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 text-center'>Our Services</h2>
          <p className='text-gray-700 text-xs sm:text-sm max-w-2xl mx-auto text-center'>
            It is a long established fact that a reader will be distracted by the readable content of <br /> a page when looking at its layout.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
          {services.map((service) => (
            <div key={service.id} className='overflow-hidden rounded-lg'>
              <img 
                src={service.src} 
                alt={service.alt}
                className='w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
