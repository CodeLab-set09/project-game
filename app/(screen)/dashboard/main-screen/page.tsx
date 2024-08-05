import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col items-center h-full w-full rounded-md'>
    <section className='grid grid-cols-1 rounded-md overflow-hidden border-2 h-[300px] md:grid-cols-3 gap-2 w-full '>
        <div className='col-span-1 bg-slate-300 p-2'>
            <div className='flex justify-between items-center '>
                <p className='text-[20px]'>Chalange History</p>
                <p>icon</p>
            </div>
            <div className='mt-10 flex flex-col gap-4'>
               <select className=' bg-slate-300 border rounded-md w-full h-[40px] px-2'>
                      <option value="Javascript">Javascript</option>
                      <option value="Html">Html</option>
                      <option value="Css">Css</option>
                      <option value="UI/UX">UI/UX</option>
               </select>
               <select className=' bg-slate-300 border rounded-md w-full h-[40px] px-2'>
                      <option value="level-1">level-1</option>
               </select>
               <div className='flex gap-5 justify-center items-center '>
                  <button className='w-[100px] h-[40px] border rounded-md flex justify-center items-center'>Resume</button>
                  <button className='w-[100px] h-[40px] border rounded-md flex justify-center items-center '>Resart</button>
               </div>
            </div>
        </div>
        <div className='col-span-1 md:col-span-2 border p-4 flex flex-col bg-slate-500 gap-5 '>
          <div className='flex gap-5 '>
            <div className='h-[30px] w-[100px] rounded-full text-white text-[12px] bg-inharit border flex justify-center items-center'>level-1</div>
            <div className='h-[30px] w-[100px] rounded-full text-white text-[12px] flex bg-inherit border justify-center items-center'>stage-1</div>
            <div className='h-[30px] w-[100px] rounded-full text-white text-[12px] flex bg-inherit border justify-center items-center'>question-1</div>
          </div>
          
          <div className='h-[150px] w-full overflow-y-scroll text-white text-[14px] '>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ipsum corrupti tempore temporibus libero nam ullam est voluptatem soluta tempora corporis fugiat officia. Suscipit perspiciatis iure, voluptatibus unde dolore esse?
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi amet quidem aut ducimus molestias aperiam soluta id, ab animi aliquam! Quas ex rem architecto consequuntur assumenda excepturi laudantium ut.
          </div>

          <div className='flex gap-5 '>
          <div className='h-[30px] w-[60px] rounded-md text-white text-[10px] bg-inherit border flex justify-center items-center'>STRINGS</div>
            <div className='h-[30px] min-w-[60px] p-2 rounded-md text-white text-[10px] flex bg-inherit border justify-center items-center'>ALGORITHM</div>
            
        </div>

        </div>
    </section>
    <section>2</section>
    <section>3</section>
</main>
  )
}

export default page