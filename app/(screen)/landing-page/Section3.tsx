import Image from "next/image";
import React from "react";
import { FaLaptopCode, FaThumbsUp } from "react-icons/fa6";
import codeimage from "../../../public/codeimage.jpeg";

const Section3 = () => {
  const data = [
    {
      id: 1,
      icon: <FaThumbsUp className="text-[20px] md:text-[40px]" />,
      title: "IMPROVE YOUR CODING SKILLS",
      desc: "Enhance your coding abilities and knowledge and in the process expand your programming language skill",
      image: codeimage,
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-[20px] md:text-[40px]" />,
      title: "EARN YOR BADGE",
      desc: "Get badge by showcasing your coding skills and have a fun and competitive coding environment all in one place.",
      image: codeimage,
    },
  ];
  return (
    <main className="w-full min-h-[calc(180vh-350px)] md:h-[calc(70vh-70px)] flex justify-center md:justify-between gap-5 items-center px-16 flex-col md:flex-row py-4 md:py-0">
      {data.map((el) => (
        <div
          key={el.id}
          className="w-[430px] md:w-[700px] min-h-[450px] md:h-[580px] flex flex-col border rounded-3xl p-6 gap-2 md:gap-4"
        >
          {el.icon}
          <p className="text-[20px] md:text-[25px] font-semibold ">
            {el.title}
          </p>
          <p className="text-[12px] md:text-[14px]">{el.desc}</p>
          <Image
            src={el.image}
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-[250px] md:h-[300px]"
          />
        </div>
      ))}
    </main>
  );
};

export default Section3;
