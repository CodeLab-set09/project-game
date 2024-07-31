import React from "react";
import Blogs from "./blogs";
import img from "../../../../public/herobg.jpeg";

const page = () => {
  const add = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-6 md:p-16">
      {add.map((el: any, id: number) => (
        <div key={id}>
          <Blogs
            image={img}
            title={"WEB3: Introduction the next iteration of the internet"}
            tag={"Carrer Insight"}
          />
        </div>
      ))}
    </div>
  );
};

export default page;
