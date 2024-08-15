import React from 'react'
import { LIVE_URL } from "@/utils/constant";
import { Navbar } from '@/app/(screen)/(display)/components/Navbar';
import { Footer } from '@/app/(screen)/(display)/components/Footer';
import Image from 'next/image';

const page = async({params}:any) => {    
    const {blogID} = params;

    const res = await fetch( `${LIVE_URL}/api/Blog/${blogID}`,{
        method:"GET",
     cache:"no-cache", 
     mode: "no-cors",
     next:{
      tags:["blog"]
    }
    })

    const data:any = await res.json();
    console.log(data);
    

  return (
    <main>
      <Navbar/>
        <div className='w-full h-[500px]'>
       <h1>{data.data.title}</h1>
       <Image src={data.data.image} alt='img' width={1000} height={1000} className=''  />
       <p>{data.data.content}</p>
    </div>
    <Footer/>
    </main>
  )
}

export default page