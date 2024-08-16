"use client"
import { LIVE_URL } from '@/utils/constant'
import React, { CSSProperties, useRef, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const page = () => {

  const ref: any = useRef(null);
  const [loading, setLoading] = useState(false);
  const base = process.env.BASE as string;
  // const[value,setValue]=useState(" ")

   const createblog = async(formdata:FormData) => {
     
    const title = formdata.get("title")
    const image = formdata.get("image")
    const video = formdata.get("video")
    const content = formdata.get("content")
    const desc = formdata.get("desc")



    await fetch(`/api/Blog` ,{
       method: 'POST',
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({title, image, video, content,desc})
 
    }).then(async (res) => {
      return await res.json();
      // window.location.reload();
    })
    .then((res) => {
      ref.current.reset();
      console.log(res);
      setLoading(false);
    });
   }

  return (
     <main className='w-full h-screen flex justify-center items-center py-4 '>
         <div className='min-h-[200px] w-[400px] border rounded-md p-4' >

            <p className='text-[18px] font-semibold ' >Create a Blog</p>

            <div className='w-full mt-6 '><hr /></div>

            <form ref={ref} action={createblog} className='mt-5 flex flex-col gap-5'>

                <div  >
                    <label className='font-semibold text-[16px]'>Title</label>
                    <input type="text" name="title" placeholder='title' className='w-full h-[40px] p-2 border outline-none ' />
                </div>
                <div  >
                    <label className='font-semibold text-[16px]'>Description</label>
                    <input type="text" name="desc" placeholder='description' className='w-full h-[40px] p-2 border outline-none ' />
                </div>

                <div>
                    <label className='font-semibold text-[16px]'>Image</label>
                    <input type="text" name="image" placeholder='image' className='w-full h-[40px] p-2 border outline-none ' />
                </div>

                <div>
                    <label className='font-semibold text-[16px]'>Video</label>
                    <input type="text" name="video" placeholder='video' className='w-full h-[40px] p-2 border outline-none ' />
                </div>
                <div>
                    <label className='font-semibold text-[16px]'>Content</label>
                    <textarea name="content" placeholder='content' className='h-[150px] w-full border outline-none resize-none p-2 '></textarea>
                </div>

                {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}

                <button
            type="submit"
            onClick={() => setLoading(true)}
            className="p-1 bg-blue-950 py-3 text-white rounded-md font-bold mt-4 "
          >
            {loading ? (
              <BeatLoader
                color="#fff"
                loading={loading}
                cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Submit"
            )}{" "}
          </button>
            </form>

         </div>
     </main>
  )
}

export default page