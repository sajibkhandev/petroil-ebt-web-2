import React from 'react'
import Container from '../container'
import Button from '../Button'


const Bannaer = () => {
  return (
    <div>
        <div class="bg-[url(/src/assets/bannerBg.png)] py-64.5 bg-cover bg-center bg-no-repeat">
        <Container>
            <h1 className='lg:w-210.5 font-pop font-bold lg:text-[64px] sm:text-[50px] sm:text-center lg:text-left text-white'>We exist since 1975 on the oil and gas industry.</h1>
          <div className="sm:flex sm:justify-center lg:justify-start">
            <Button className={"sm:text-center inline-block mt-7.75 font-pop font-semibold text-base text-white uppercase border border-[#F40404] hover:bg-transparent hover:border-white hover:text-white duration-500  "} btnText={"LEARN MORE"}/>

            </div>
            </Container>  
        </div>
    </div>
  )
}

export default Bannaer