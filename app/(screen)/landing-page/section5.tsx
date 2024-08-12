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
    <div className="w-full mt-20 flex justify-center items-center px-4">
    <div className="w-full mt-[100px]  h-[100vh] flex justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="w-[90vw]">
          <div className="flex items-center  justify-center">
            <h1 className="text-black text-center text-[40px] md:text-[70px] font-semibold ">
              COMMUNITY FORUM
            </h1>
          </div>

          <p className="text-center mb-10 md:text-[20px]">
            Join a community of coders to share knowledge and resources. By
            providing a supportive and engaging
            <br />
            community forum, SKILL SCAPE aims to create a vibrant ecosystem
            where coders
            <br />
            can grow, learn and thrive together.
          </p>
          <div className="mx-5 bg-[#F24E1E] text-black rounded-md p-15 flex items-center flex-col md:flex-row justify-between">
          <div className="mx-30 bg-black text-white rounded-md p-4 flex items-center flex-col md:flex-row justify-between">
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

    </div>
    </div>
  );
};

export default Section5;
