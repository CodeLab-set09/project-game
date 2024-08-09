export const metadata = {
  title: "Particle Animation",
  description: "Page description",
};

import Image from "next/image";
import Particles from "./lib/Particles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import Shape from "@/assets/images/svg/shape.svg";

export const MainHero = () => {
  return (
    <>
      <main className="relative flex flex-col justify-center bg-black overflow-hidden w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="w-full max-w-6xl mx-auto  md:px-6 py-24">
          <div className="text-center">
            {/* Illustration #1 */}
            <div
              className="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none"
              aria-hidden="true"
            >
              {/* <Image
                src={Shape}
                className="max-w-none"
                width={852}
                height={582}
                alt="Illustration"
              /> */}
            </div>

            {/* Illustration #2 */}
            <div
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none"
              aria-hidden="true"
            >
              {/* <Image
                src={Shape}
                className="max-w-none"
                width={852}
                height={582}
                alt="Illustration"
              /> */}
            </div>

            {/* Particles animation */}
            <Particles
              sizeValue={5}
              className="absolute inset-0 pointer-events-none"
            />

            <div className="relative flex flex-col justify-center items-center ">
              <h1 className="text-white text-center text-[40px] md:text-[70px] font-semibold ">
              Your ultimate coding companion.
              </h1>
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-center text-[12px] md:text-[16px] w-[500px]  gap-3 md:w-[600px] text-white">
                Test your skill in coding,learn new language and achieve mastery by
                answering different questions on different programming language.
                </p>
              </div>
              <Link href={"/signup"}>
          <Button className="h-[50px]  md:h-[60px] w-[130px] text-[14px] border bg-inherit hover:bg-slate-600 duration-300 transition-all">
            Get Started
          </Button>
        </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
