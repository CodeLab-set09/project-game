import React from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
    { id: 0, name: "Javascript", url: "#" },
    { id: 1, name: "HTML", url: "#" },
    { id: 2, name: "Python", url: "#" },
    { id: 3, name: "PHP", url: "#" },
  ];
  return (
    <main className="border-t pt-20 px-6 md:px-16">
      <section className="flex flex-col gap-3">
        <Image src={"/cbb.png"} alt="#" width={160} height={160} />
        <div className="flex flex-col gap-2">
          <h2 className="text-[15px] font-semibold ">Top Languages</h2>
          <div className="flex gap-1 flex-wrap">
            {languages.map((el: any) => (
              <div key={el.id}>
                <Link
                  className="rounded-full bg-gray-400 py-1 px-2 text-[10px] font-semibold text-white"
                  href={el.url}
                >
                  {el.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between border-t border-neutral-400 py-10 mt-14">
        <section className="flex flex-col gap-10 items-center text-neutral-500">
          <div>@2024 CodelabSet09. All right reserved</div>
          <div>Powered by CodeLab</div>
        </section>

        <section className="flex items-center gap-3">
          {social?.map((el) => (
            <div key={el.id} className="text-[25px]">
              {el.icon}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default BaseFooter;
