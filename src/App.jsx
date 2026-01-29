import React from 'react'
import Logo1 from '../public/Logo1.png'
import Logo2 from '../public/Logo2.png'
import Logo3 from '../public/Logo3.png'
import Logo4 from '../public/Logo4.png'


const App = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-center gap-4 py-10'>
      <img src={Logo1} alt="logo" />
      <img src={Logo2} alt="logo" />
      <img src={Logo3} alt="logo" />
      <img src={Logo4} alt="logo" />
    </div>
  )
}

export default App