import React from "react";

export default function page() {
  return (
    <div className=" w-screen  h-screen flex items-center justify-center bg-white">
      <div className="mx-auto mt-96 mb-10 w-full max-w-[550px] bg-white border shadow-md p-6 border-l-8 border-r-8">
        <form>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className=" rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md   transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    className="  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    className="  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="post-code"
                    id="post-code"
                    placeholder="Post Code"
                    className="  transition duration-500 ease-in-out    transform hover:-translate-y-1 hover:scale-110   shadow-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  h-[40px]  p-2 mt-3  w-full  hover:border-purple-600 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
