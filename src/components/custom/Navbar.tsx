import { Public_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { UserRound } from "lucide-react";
// import { Montserrat } from "next/font/google";
import { Montserrat } from "next/font/google";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { AlertDialogDemo } from "./Alert";
import { DropdownMenuDemo } from "./Dropdown";

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });
export default function Navbar() {
  return (
    <div className=" w-full h-min  fixed z-[1] bg-gray-800 ">
      <div>
        <nav className=" pl-12 flex flex-wrap   justify-between items-center p-5 text-md  ">
          <div className=" flex space-x-2">
            {/* <button className='transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110  '><AvatarDemo /></button> */}
            <button
              className={`${mont.className} text-2xl text-white  py-2 px-4 font-bold `}
            >
              <Link href="./Home">Sample Books</Link>
            </button>

            {/* <button  className={`${dm.className} text-white transition duration-500 ease-in-out hover:bg-blue-900 hover:border-blue-600 hover:text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-4 rounded-md font-semibold `}>Order</button> */}
          </div>
          <div className=" flex space-x-4">
            <div className=" gap-x-6">
              <div className=" flex max-w-md gap-x-2">
                <label className="sr-only">Search</label>
                <input
                  id="search"
                  name="search"
                  type="search"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Search Book"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Search
                </button>
              </div>
            </div>

            {/* <UserRound size={28} className=' text-white text-2xl mt-2' /> */}
            <DropdownMenuDemo />
            <AlertDialogDemo />
            <button
              className={`${dm.className} text-white transition duration-500 ease-in-out hover:bg-blue-900 hover:border-blue-600 hover:text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-3 rounded-md font-semibold `}
            >
              <Link href="./Signin">Login</Link>
            </button>
            {/* <button  className={`${dm.className} text-white transition duration-500 ease-in-out hover:bg-blue-900 hover:border-blue-600 hover:text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-3 rounded-md font-semibold `}>Signup</button> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
