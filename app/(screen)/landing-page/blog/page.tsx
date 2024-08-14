import React from "react";
import { LIVE_URL } from "@/utils/constant";

const page = async() => {
   const res = await fetch(`${LIVE_URL}/api/Blog`,{
     method:"GET",
     cache:"no-cache",
     next:{
      tags:["blog"]
    }
   })
   const data = await res.json()

  return (
      <div className="w-full sm:grid-cols-2 md:grid-cols-2 grid lg:grid-cols-3 p-10 gap-5 ">
        {
          data?.data?.map((el:any) => (
            <div key={el._id} className=" bg-slate-500 rounded-[15px]">

              <div className="text-[30px] h-[200px] w-full bg-black rounded-t-[15px] rounded-tr-[15px]"><img src={el.image}/></div>
              <div className="w-full px-5 py-8">
              <p className="text-[25px] pb-2 font-medium">{el.title}</p>
              <p className="text-balance text-[15px] font-normal"> hello{el.desc}</p>
              </div>

            </div>
        
          ))
        }
        
      </div>
  );
};

export default page;
