import * as React from "react";
import { Montserrat } from "next/font/google";
import Link from 'next/link'
const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import image from "@/assets/bgImg.jpeg";
import { Sparkle } from "lucide-react";

export default function CardWithForm(props: {
  title: string;
  id: number;
  type: string;
  available: string;
  price : number
}) {
  return (
    <Card className="w-min mb-10 bg-gray-200  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-xl ">
      <CardHeader>
        <div className="flex justify-center content-center items-center">
          <Image src="/Russ.png" width={280} height={280} alt="Post Image" />
        </div>
      </CardHeader>
      <CardContent>
        <div className=" flex flex-row space-x-10">
        <CardTitle className={`${mont.className} text-md`}>{props.title}</CardTitle>
        <CardTitle className={`${mont.className} text-lg`}>{props.price}</CardTitle>
        </div>
        <CardDescription className="text-lg text-black">{`Available : ${props.available}`}</CardDescription>
      </CardContent>
      {/* <div className=" pl-5 pb-3  text-yellow-300 flex space-x-3 font-bold">
        <Sparkle />
        <Sparkle/>
        <Sparkle/>
        <Sparkle/>
      </div> */}
      <CardFooter className="flex justify-between">
        <div className="flex flex-row justify-between items-center space-x-14">
          <div>
            <Link href={`/Book_details/${props.id}`} key={props.id}>
              <Button>Book Details</Button>
            </Link>
          </div>
          <div>
            <Button><Link href={`/Buy/${props.id}`}>Buy Book</Link></Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
