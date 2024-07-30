import React from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

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
  return (
    <main>
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
