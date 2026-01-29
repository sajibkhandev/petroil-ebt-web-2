import Image from './Image'
import firstImg from '../assets/firstImg.png'
import thirdImg from '../assets/thirdImg.png'
import secoundImg from '../assets/secoundImg.png'
import forthImg from '../assets/forthImg.png'

const BelowAbout = () => {
  return (
    <>
      <div className='py-50'>
        <div className='w-full mx-auto'>
          <div className='grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-4'>
            <div className=''>
              <Image src={secoundImg} />
            </div>
            <div className=''>
              <Image src={forthImg} />
            </div>
            <div className=''>
              <Image src={thirdImg} />
            </div>
            <div className=''>
              <Image src={firstImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BelowAbout
