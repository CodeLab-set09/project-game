import React from 'react'
import Image from 'next/image'
import Qualified from "../../../public/cbb.png"
const Section4 = () => {
  return (
    <div className=' w-full h-[90vh] flex justify-center items-center flex-wrap '>
      <div className='border w-[90%] h-[70vh] flex flex-col rounded-lg justify-center items-center flex-wrap gap-12 bg-[#ffffff] '>
        <h1 className='font-bold text-3xl text-wrap text-black'>CodeBook IS BUILT ON</h1>
         <Image 
         src={Qualified}
         width={100}
         height={100}
         alt='sponsor image'
         className='w-[300px] h-[100px]'
         />
         <p className='font-medium text-[18px] text-black  text-center'> 
         The world's most advanced coding assessment platform for organizations looking to <br /> scale their hiring, upskilling, and certification programs.</p>
         <button className='w-[230px] h-[50px] cursor-pointer rounded-sm border  text-white bg-black font-normal flex-wrap'>Learn more</button>
      </div>
    </div>
  )
}

export default Section4
