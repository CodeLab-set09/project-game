import { LIVE_URL } from '@/utils/constant'
import React from 'react'

const page = () => {

   const createblog = async(formdata:FormData) => {
     
    const title = formdata.get("title")
    const image = formdata.get("title")
    const video = formdata.get("title")
    const content = formdata.get("title")



    await fetch(`${LIVE_URL}/api/Blog` ,{

       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({title, image, video, content})
 
    })
   }

  return (
     <main className='w-full h-screen flex justify-center items-center '>
         <div className='min-h-[200px] w-[400px] border rounded-md p-4' >

            <p className='text-[18px] font-semibold ' >Create a Blog</p>

            <div className='w-full mt-6 '><hr /></div>

            <form action="" className='mt-5 flex flex-col gap-5'>
                <div  >
                    <label className='font-semibold text-[16px]'>Title</label>
                    <input type="text" placeholder='title' className='w-full h-[40px] p-2 border outline-none ' />
                </div>

                <div>
                    <label className='font-semibold text-[16px]'>Image</label>
                    <input type="text" placeholder='image' className='w-full h-[40px] p-2 border outline-none ' />
                </div>

                <div>
                    <label className='font-semibold text-[16px]'>Video</label>
                    <input type="text" placeholder='video' className='w-full h-[40px] p-2 border outline-none ' />
                </div>
                <div>
                    <label className='font-semibold text-[16px]'>Content</label>
                    <textarea name="" placeholder='content' className='h-[150px] w-full border outline-none resize-none p-2 '></textarea>
                </div>

                <button type='submit' className='w-full h-[40px] bg-blue-700 font-semibold text-white ' >
                    Submit
                </button>
            </form>

         </div>
     </main>
  )
}

export default page