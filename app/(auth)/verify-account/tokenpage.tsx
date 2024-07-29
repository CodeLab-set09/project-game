import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import Link from 'next/link'
import React from 'react'

const Tokenpage = () => {
  return (
    <main className='w-full h-full flex justify-center items-center '>
         <div className='h-[230px] w-[400px] flex flex-col rounded-md border items-center gap-5 p-4 '>
            <p className='font-semibold text-[30px]'>Verify Account</p>
            <div className='w-full p-3 flex flex-col  gap-2 justify-center'>
                <p className='font-semibold text-[20px]'>Input token</p>
                <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
            </div>
         </div>
     </main>
  )
}

export default Tokenpage