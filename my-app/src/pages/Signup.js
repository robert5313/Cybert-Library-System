import React from "react";
import Image from "next/image";
import corridor from "../assets/images/corridor.jpg";

const Signup = () => {
  return (
    <div className="flex  min-h-screen ">
      <div className="min-h-screen flex-col  overflow-hidden">
        {/* image to the right */}
        <Image src={corridor} width={540} height={240} className="pl-20 pt-10 rounded-full" alt="corridor image" />
      </div>
      {/* text to the right */}
     <div className="pl-64 justify-center pt-56 font-serif">
        <h1 className="font-bold text-6xl">Sign In</h1>
        <p className="font-normal text-lg pt-2">We love our clients</p>
        <form className="flex flex-col mt-12 ">
          <div className="mb-6">
            <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border pl-[10px] w-full border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg sm:w-[300px] lg:w-[670px] pt-2.5"
              placeholder="Your E-mail"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2  text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="bg-[#18191E] border pl-[10px] w-full sm:w-[300px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg lg:w-[670px] pt-2.5"
              placeholder="Your Password"
            />
          </div>
         
          <button
            type="submit"
            className=" bg-gray-200 hover:bg-white text-black font-medium py-2.5 rounded-lg sm:w-[300px] lg:w-[670px] "
          >
            Sign In
          </button>
        </form>
        </div>
    </div>
  );
};

export default Signup;
