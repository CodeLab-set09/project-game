import React from "react";

const Section5 = () => {
  const items = [
    {
      id: "1",
      name: "0+",
      writeup: "sdfghj",
    },
    {
      id: "2",
      name: "0+",
      writeup: "sdfghj",
    },
    {
      id: "3",
      name: "0+",
      writeup: "sdfghj",
    },
  ];
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-4">
      <div className="flex items-center justify-center">
        <div className="">
          <div className="flex items-center  justify-center">
            <h1 className="text-[40px] md:text-[55px] text-center font-bold md:font-extrabold leading-[60px] md:mb-10">
              COMMUNITY FORUM
            </h1>
          </div>

          <p className="text-center mb-10 px-4">
            By providing a supportive and engaging community forum, SKILL SCAPE
            aims to create a vibrant
            <br />
            ecosystem where coders can grow, learn and thrive together.
          </p>
          <div className="mx-5 bg-black text-white rounded-md p-15 flex items-center flex-col md:flex-row justify-between">
            {items?.map((el: any) => (
              <div key={el.id} className="flex flex-col items-center md:p-4">
                <h1 className="font-normal md:font-bold text-[70px] md:text-[70px]">
                  {el.name}
                </h1>
                <p className="">{el.writeup}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
