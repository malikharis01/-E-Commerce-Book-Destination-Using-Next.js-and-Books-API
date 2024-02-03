
import React from "react";
import CardWithForm from "@/components/custom/Card";
import { Montserrat } from "next/font/google";
import Link from 'next/link'


import Image from 'next/image'
import bg from "@/assets/bg.jpg"
import { Video } from 'lucide-react'
import { Public_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

const mont = Public_Sans({ subsets: ['latin'], weight: '900', style: 'normal' })
const dm = DM_Sans({ subsets: ['latin'], weight: '400', style: 'normal' })
type Book = {
    id: number,
    name: string,
    author: string,
    isbn: string,
    type: string,
    price: number,
    'current-stock': number,
    available: boolean,
    map: any
}

export default async function Books() {
    const response = await fetch("https://simple-books-api.glitch.me/books");
    const data: Book = await response.json();
  return (
    <div>
            <section className=" flex  justify-center  min-h-screen ">

                <div className=" w-11/12 m-4 rounded-sm">
                    <h1 className={`${mont.className} pt-10 text-center mt-4  text-6xl tracking-widest text-white`}>
                        Sample Books
                    </h1>
                    <div className="flex items-center flex-wrap mt-12 justify-center gap-8">
                        {data?.map((book: Book) => {
                            return (

                                <CardWithForm
                                    
                                    key={book.id}
                                    title={book.name}
                                    price={book.price}
                                    type={book.type}
                                    id={book.id}
                                    available={book.available ? "Yes" : "No"}
                                />

                            );
                        })}
                    </div>
                </div>
            </section>
    </div>
  )
}
