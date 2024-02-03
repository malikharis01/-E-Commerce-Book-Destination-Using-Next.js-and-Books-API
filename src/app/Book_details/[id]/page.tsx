import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import { Public_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
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
  current_stock: number;
  available: boolean;
  map: any;
};
const url = "https://simple-books-api.glitch.me/books";
const getBookId = async (id: number) => {
  const response = await fetch(`${url}/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};
export default async function page({ params }: { params: { id: number } }) {
  const book_details: Book = await getBookId(params.id);

  return (
    <div className=" w-screen h-screen flex justify-center items-center flex-col space-y-12 ">
      <h1
        className={`mt-10 animate-fade-down animate-once  text-5xl ${mont.className} font-extrabold text-gray-900 `}
      >
        Book Details
      </h1>
      <div className="border rounded-xl bg-white p-3 shadow-xl flex  flex-row">
        <div>
          <Image
            src="/Russ.png"
            alt="logo"
            width={400}
            height={400}
            className=" rounded-md p-2"
          />
        </div>
        <div className=" flex flex-row space-x-2 content-between p-5">
          <div className=" text-lg font-black first-line: text-gray-950">
            <h1>Name :</h1>
            <h1>ID :</h1>
            <h1>Author :</h1>
            <h1>Type :</h1>
            <h1>Price :</h1>
            <h1>Available :</h1>
            <button
              className={`${dm.className} pt-2 mt-9 text-white transition duration-500 ease-in-out bg-blue-900 border-blue-600 hover:text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-4 rounded-md font-semibold `}
            >
              <Link href={`/Buy/${book_details.id}`}>
                Buy For {book_details.price}$
              </Link>
            </button>
          </div>
          <div className="  text-lg">
            <h1> {book_details?.name}</h1>
            <h1> {book_details?.id}</h1>
            <h1> {book_details?.author}</h1>
            <h1>{book_details?.type}</h1>
            <h1> {book_details?.price}</h1>
            <h1> {book_details?.available ? "True" : "False"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
