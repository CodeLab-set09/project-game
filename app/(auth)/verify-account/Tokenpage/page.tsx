import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import Link from 'next/link'
import React from 'react'

const Tokenpage = async() => {

    await fetch("http://localhost:3000/api/verifyaccount/")
   
  return (
    <main className='w-full h-[500px] flex justify-center items-center '>
         <div className='min-h-[230px] w-[300px] md:w-[400px] flex flex-col rounded-md border items-center gap-5 p-4 '>
            <p className='font-semibold text-[30px]'>Verify Token</p>
            <div className='w-full p-3 flex flex-col  gap-2 justify-center'>
                <p className='font-semibold text-[16px]'>Input token</p>
                <InputOTP maxLength={6}>
      <InputOTPGroup className='w-[50px] md:w-[100px]'>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className='w-[50px] md:w-[100px]'>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className='w-[50px] md:w-[100px]'>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>

     <button className='w-[100px] h-[40px] rounded-md bg-neutral-700 hover:bg-neutral-600 text-white mt-4 '>
        Verify
     </button>
            </div>
         </div>
     </main>
  )
}

export default Tokenpage