import Image from "next/image";
import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";
import Link from "next/link";
import blog from "../../landing-page/blog/page";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              {/* <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md "></div> */}

              {/* <div className="h-10 w-10 relative mt-1"></div> */}
              <Image
                src={
                  "https://res.cloudinary.com/duewdl1ua/image/upload/v1722432802/codebook_white_l0et44.png"
                }
                alt="/"
                width={1000}
                height={1000}
                className="h-12 w-full object-contain"
              />
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              {/* <MenuIcon className="text-white" /> */}
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </a>
              <a
                href="/landing-page/blog"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Directives
              </a>

              <Link href={"/signup"}>
                <button className="bg-white py-2 px-4 rounded-lg text-black">
                  Get for free
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
