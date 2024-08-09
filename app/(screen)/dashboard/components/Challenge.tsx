import React from "react";
import { MdSearch, MdSettings } from "react-icons/md";

const Challenge = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-1  md:p-2 h-[270px]">
      <div className="col-span-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-t-md md:rounded-tr-none md:rounded-l-md p-4 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[14px] font-semibold text-white">
            Challenge History
          </h1>
          <MdSettings className="text-white" />
        </div>

        <div className="flex flex-col gap-3">
          <select className="text-[#d5d3d3]  font-medium text-[13px] bg-[#49414922] w-full outline-none h-[30px] rounded-sm px-2">
            <option>JavaScript</option>
            <option>JavaScript</option>
            <option>JavaScript</option>
          </select>
          <select className="text-[#cecbcb] font-medium text-[13px] bg-[#49414922] w-full outline-none h-[30px] rounded-sm px-2">
            <option>JavaScript</option>
            <option>JavaScript</option>
            <option>JavaScript</option>
          </select>
        </div>
        <div className="flex gap-3 justify-center">
          <button className="text-[13px] rounded-md bg-[#eea079] flex items-center justify-center px-2 py-1 font-light  ">
            TRAIN
          </button>
          <button className="text-[13px] rounded-md border flex items-center justify-center px-2 py-1 font-light  ">
            SKIP
          </button>
        </div>

        <div className="w-full flex gap-1 items-center justify-center cursor-pointer">
          <MdSearch className="text-[14px]" />
          <h1 className="text-[12px]">Search</h1>
        </div>
      </div>

      <div className="col-span-2 flex  flex-col gap-3 bg-neutral-700 text-white md:rounded-r-md md:rounded-bl-none rounded-b-md p-3">
        <div className="flex gap-2">
          <div className="px-2 py-1 bg-blue-200 rounded-full text-[#5b5b5b] font-semibold flex justify-center items-center text-[10px]">
            Level 1
          </div>
          <div className="px-2 py-1 bg-green-200 rounded-full text-[#5b5b5b] font-semibold flex justify-center items-center text-[10px]">
            Stage 2
          </div>
          <div className="px-2 py-1 bg-purple-200 rounded-full text-[#5b5b5b] font-semibold flex justify-center items-center text-[10px]">
            Question 3
          </div>
        </div>

        <div className="flex flex-col gap-1 ">
          <h1 className="text-[13px] font-medium leading-6 h-[150px] overflow-x-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius
            quaerat nemo pariatur totam sed obcaecati voluptate exercitationem
            ducimus, iusto accusantium eum at temporibus harum fugit vero
            nesciunt. Tempore, eaque. Earum, accusamus? Sunt labore perspiciatis
            assumenda cupiditate non adipisci aspernatur architecto, deserunt
            esse temporibus, beatae, voluptatem officia facere at dicta
            voluptatum expedita obcaecati dolorem! Suscipit corporis provident
            eligendi et delectus! Omnis cupiditate dolore, voluptates porro
            obcaecati dolores. Recusandae nesciunt harum neque, atque dolorem
            repudiandae, sapiente distinctio itaque sunt corporis placeat
            mollitia tenetur in, possimus id ex dolorum? Natus, veniam totam!
            Cum dolore pariatur, suscipit modi veniam, adipisci quas laborum
            corrupti molestias laboriosam itaque natus deserunt velit ipsam quae
            incidunt sit qui dolores quo reiciendis voluptatum, assumenda
            dignissimos vero. Est, iure. Cupiditate, fugiat quia ullam quasi
            quibusdam porro nihil, corporis repudiandae hic aliquam beatae
            alias. Vel minima fugit excepturi odit cupiditate praesentium.
            Impedit tenetur sapiente magnam eos fuga voluptate voluptates
            distinctio! Accusantium, adipisci unde similique nemo ipsa quidem
            eos quod, illum maiores facilis labore magni nihil. Dolore
            consequuntur laboriosam earum veniam repudiandae? Tenetur ullam
            labore repellat minus eum eius quam possimus. Quod blanditiis
            obcaecati delectus optio aperiam dicta perferendis doloribus autem
            eveniet, soluta nostrum est, suscipit ex exercitationem odio velit
            voluptatum officiis quidem iste! Officiis ea deleniti ipsa quaerat
            nostrum itaque! Commodi quas rerum architecto cumque, distinctio
            ipsum voluptatibus obcaecati quaerat laudantium eius magni
            reiciendis laborum animi molestias, iste repellendus sequi error
            ipsam ea et inventore repudiandae, voluptate eos. Veritatis, saepe!
            Ducimus excepturi, tenetur impedit quaerat vel incidunt autem beatae
            eius ab assumenda repudiandae neque ipsam voluptate iusto,
            architecto dolor quod at magni itaque amet adipisci! Eius delectus
            error ratione illo. Aliquam sequi pariatur, id doloremque repellat
            commodi unde impedit eligendi porro odio quia repellendus fugit
            culpa! Magni voluptas ipsum voluptatibus voluptate vel natus unde
            exercitationem dicta enim eligendi! Eos, molestias!
          </h1>
          <div className="flex gap-1 items-end">
            <button className="px-2 py-1 text-[12px] bg-[#0c0c0b22] rounded-md font-light">
              Fundamentals
            </button>
            <button className="px-2 py-1 text-[12px] bg-[#0c0c0b22] rounded-md font-light">
              Algorithms
            </button>
            <button className="px-2 py-1 text-[12px] bg-[#0c0c0b22] rounded-md font-light">
              Arrays
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
