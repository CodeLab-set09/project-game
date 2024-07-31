import React from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";

const BaseFooter = () => {
  const social = [
    {
      id: 1,
      icon: <FaSquareXTwitter />,
      url: "",
    },
    {
      id: 2,
      icon: <FaFacebookSquare />,
      url: "",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      url: "",
    },
  ];
  const languages = [
    { id: 0, name: "Javascript" },
    { id: 1, name: "HTML" },
    { id: 2, name: "Python" },
    { id: 3, name: "PHP" },
  ];
  return (
    <main className="border-t pt-20 px-16">
      <section className="flex flex-col gap-3">
        <Image src={"/cbb.png"} alt="#" width={160} height={160} />
        <h2 className="text-[15px] font-semibold ">Top Languages</h2>
      </section>

      <section>
        <div>2024</div>
        <div>2024</div>
      </section>

      <section>
        {social?.map((el) => (
          <div key={el.id} className="">
            {el.icon}
          </div>
        ))}
      </section>
    </main>
  );
};

export default BaseFooter;
