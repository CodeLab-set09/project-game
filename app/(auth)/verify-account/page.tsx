import Link from 'next/link'
import React from 'react'


const Page = () => {
  return (
   <main className='w-full h-[500px] flex justify-center items-center '>
   <div className='h-[220px] w-[400px] flex flex-col rounded-md border justify-center items-center gap-5 p-4 '>
      <p className='font-semibold text-[30px]'>Verify Account</p>
      <p className='text-[16px] text-center '>An email has been sent to your email account<br/>check email to verify</p>
   </div>
</main>
  )
}

export default Page