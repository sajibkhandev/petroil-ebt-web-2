import React from 'react'
import image from '../../assets/image.png'

const LearnMore = () => {
  return (
    <>
    <section className='bg-[#F0F0F0]  py-34 px-[390px]'>
        <div className="container">
            <div className="  div-main m-auto flex">
                <div className="div-learn w-[413px] h-[361px] bg-red-800">
                    <h1></h1>
                </div>
                <div className="div-learn w-[726px] h-[361px] bg-red-800">
                   <img src={image} alt="" />
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default LearnMore
