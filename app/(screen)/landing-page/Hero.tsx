
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <main className="w-full h-[calc(100vh-70px)] flex justify-center items-center bg-[url('/herobg2.png')] bg-cover bg-center">
        <div className='w-full h-full flex justify-center items-center flex-col gap-4' >
          <p className='text-white text-center text-[40px] md:text-[70px] font-semibold '> Achieve mastery<br/> through challenge.</p>
          <p className='text-center text-[12px] md:text-[16px] w-[500px]  gap-3 md:w-[600px] text-white'>Improve your development skills by training with your peers on code kata that continuously 
          challenge and push your coding practice.</p>

          <Link href={"/signup"}>
          <Button className='h-[50px]  md:h-[60px] w-[130px] text-[14px] border bg-inherit hover:bg-slate-300 '>
            Get Started

          </Button>
          </Link>
        </div>
    </main>
  )
}

export default Hero       