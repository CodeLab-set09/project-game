import Image from "next/image";
import React from "react";

const Blogs = ({ image, title, tag }: any) => {
  return (
    <div>
      <div className="bg-neutral-500 h-[400px] rounded-md ">
        <div>
          <div>
            <Image
              src={image}
              alt="#"
              width={1000}
              height={1000}
              className="h-[200px] rounded-t-md"
            />
          </div>
          <div className="p-10 flex flex-col gap-5 items-start">
            <div className="  text-black font-semibold text-[12px]">
              <h1 className="bg-pink-800 px-2 py-1 rounded-full">{tag}</h1>
            </div>
            <h1 className="text-white text-[20px] font-semibold w-[80%] leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
