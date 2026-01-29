import React from 'react'
import Images from '../Images'
import ServiceOne from '/src/assets/service1.png'
import ServiceTwo from '/src/assets/service2.png'
import ServiceThree from '/src/assets/service3.png'
const OurService = () => {
  return (
    <>
    <div className=" flex   ">
      <div className="w-1/2  ">
      <div className="pt-32 pl-26">
          <h4 className='text-6xl font-bold mt-32.5] mr-77.25'>Our Services</h4>
        <p className='text-base font-medium text-[#6C6C6C] w-100'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
      </div>
      <div className="w-1/2 relative">
        <Images imgSrc={ServiceOne} className={''}/>
        <div className="bg-black opacity-60 absolute top-0 left-0 z-30 h-full w-full"></div>
       <div className="absolute top-1/2 left-1/2 -translate-1/2 z-50 w-172.75"> 
         <p className='text-white text-4xl font-bold pb-12'>Modern natural oil and gas refineries.</p>
         <button className='font-semibold text-base w-40 h-12.5 bg-red-500 '>Learn More</button>
       </div>
      </div>
    </div>
    <div className="flex">
      <div className="w-1/2 relative">
        <Images imgSrc={ServiceOne} className={''}/>
        <div className="bg-black opacity-60 absolute top-0 left-0 z-30 h-full w-full"></div>
       <div className="absolute top-1/2 left-1/2 -translate-1/2 z-50 w-172.75"> 
         <p className='text-white text-4xl font-bold pb-12'>Supply of national industries.</p>
         <button className='font-semibold text-base w-40 h-12.5 bg-red-500 '>Learn More</button>
       </div>
      </div>
      <div className="w-1/2 relative">
        <Images imgSrc={ServiceOne} className={''}/>
        <div className="bg-black opacity-60 absolute top-0 left-0 z-30 h-full w-full"></div>
       <div className="absolute top-1/2 left-1/2 -translate-1/2 z-50 w-172.75"> 
         <p className='text-white text-4xl font-bold pb-12'>National fuel distribution and supply.</p>
         <button className='font-semibold text-base w-40 h-12.5 bg-red-500 '>Learn More</button>
       </div>
      </div>
    </div>
    </>
  )
}

export default OurService