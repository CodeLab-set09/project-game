import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <main className='w-full h-[calc(100vh-50px)] flex justify-center items-center bg-red-500 '>
        <div className='w-full h-[100vh] flex justify-center items-center flex-col gap-4' >
          <p className=' text-center text-[30px] font-semibold '> Achieve mastery<br/> through challenge.</p>
          <p className='text-center '>Improve your development skills by training with your peers on code kata that continuously<br/> 
          challenge and push your coding practice.</p>
          <Button >
            Get Started
          </Button>
        </div>
    </main>
  )
}

export default Hero