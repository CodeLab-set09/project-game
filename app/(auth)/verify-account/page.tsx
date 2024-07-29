import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
     <main className='w-full h-full flex justify-center items-center '>
         <div className='h-[200px] w-[300px] flex flex-col rounded-md border items-center gap-5 p-4 '>
            <p className='font-semibold text-[30px]'>Verify Account</p>
            <p className='text-[16px] text-center '>An email has been sent to your email account<br/> <Link href={"/"} className='text-blue-500 hover:underline'>click to verify</Link></p>
         </div>
     </main>
  )
}

export default page