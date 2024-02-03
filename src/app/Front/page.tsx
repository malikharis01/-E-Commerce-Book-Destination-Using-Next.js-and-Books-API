import React from "react";
import CardWithForm from "@/components/custom/Card";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import Image from "next/image";
import bg from "@/assets/bg.jpg";
import { Video } from "lucide-react";
import { Public_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";

const mont = Public_Sans({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });
type Book = {
  id: number;
  name: string;
  author: string;
  isbn: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
  map: any;
};

export default async function Blogs() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data: Book = await response.json();
  console.log(data);

  return (
    <div>
      <div className=" flex flex-col ">
        {/* <Image src={bg} alt='bg' className=' w-screen absolute z-[-1] opacity-90 '/> */}
        {/* <video src="/mp2.mp4" autoPlay loop muted className="w-screen absolute z-[-1] opacity-60"></video> */}

        <div className="  space-x-5 animate-fade-down animate-once flex w-screen h-screen  items-center justify-center  ">
          <div className=" mt-16">
            <h1
              className={` text-3xl text-white font-semibold  tracking-widest ${mont.className}`}
            >
              Get Latest Update About Your{" "}
            </h1>
            <h1
              className={` animate-fade-down animate-once  text-7xl tracking-wider ${mont.className} font-extrabold text-white `}
            >
              Favourite Books
            </h1>

            <h1
              className={` w-[600px] ${dm.className} text-justify pt-6 text-gray-300 font-medium text-lg leading-8`}
            >
              I'm a full-stack developer specialised in frontend and backend
              development for complex scalable web apps. I write about web
              development on my blog and regularly speak at various web
              conferences and meetups. Want to know how I may help your project?
              Check out my project case studies and resume.{" "}
            </h1>
          </div>
          <div>
            <Image
              src={"/book.svg"}
              alt="logo"
              width={500}
              height={500}
              className={"animate-fade-down animate-once rounded-full p-10"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
