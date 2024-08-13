import React from 'react'
import { Navbar } from '../../(display)/components/Navbar'
import { Footer } from '../../(display)/components/Footer'
import { IoBulbOutline, IoRocketOutline } from 'react-icons/io5'
import Link from 'next/link'
import img from "../../../../public/herobg.jpeg"
import Image from 'next/image'

const page = () => {
  const data =[
    {id:1,
      icons:<IoRocketOutline />,
      caption:"lorem tristique",
      text:"lorem tristique with optional caption and optional caption text with optional caption text  ",
    },
    {id:2,
      icons:<IoBulbOutline />,
      caption:"lorem tristique",
      text:"lorem tristique with optional caption and optional caption text with optional caption text  ",
    },
  ]
  return (
    <main className='h-full w-full '>
        <Navbar/>
        <div className='h-[calc(120vh-80px)] w-full flex justify-center items-center gap-32 bg-black border-[#B48CDE] bg-[radial-gradient(#000_82%,#9560EB)] py-10   '>
        <div className='w-[50%] h-full flex flex-col justify-center gap-5 text-white '>
          <p className='font-semibold '>~     WHO WE ARE</p>
          <p className='font-bold text-[25px] '>We Help To Get Solutions</p>
          <p className='w-[600px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s,</p>
   
          <div className='flex ' >
             {
              data.map((el:any) => (
                <div key={el.id} className='flex items-center gap-2'>
                  <div className='text-[50px] text-yellow-200 '>{el.icons}</div>
                  <div>
                  <p className='text-[16px] font-semibold  '>{el.caption}</p>
                  <p className='text-[12px] w-[220px]  '>{el.text}</p>
                  </div>
                </div>
              ))
             }
          </div>

          <Link href={"#"}>
            <button className='w-[150px] h-[45px] flex justify-center items-center rounded-none border bg-black text-white hover:bg-[#B48CDE] hover:text-white '>
                Donate
            </button>
          </Link>

        </div>


        <div className='w-[30%] h-full flex flex-col items-center relative'>
          <Image src={img} alt= "img" width={1000} height={1000} className='w-full h-[400px] object-cover absolute rounded-md' />

          <div className='w-[280px] h-[180px] bg-white rounded-md flex flex-col gap-3 text-center items-center p-4 absolute bottom-5'>
             <p className='text-[12px]'>Lorem, ipsum dolor sit amet </p>
             <p className='text-[16px] font-semibold '>Lorem ipsum dolor sit amet consectetu</p>
             <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati. Accusantium, inventore fugiat ad debitis</p>
          </div>
          
        </div>
        </div>
        <Footer/>
    </main>
  )
}

export default page