import React from "react";
import Image from "next/image";
import corridor from "../assets/images/corridor.jpg";

const Signup = () => {
  return (
    <div className="flex  min-h-screen ">
      <div className="min-h-screen flex-col  overflow-hidden">
        {/* image to the right */}
        <Image
          src={corridor}
          width={540}
          height={240}
          className="pl-20 pt-10 rounded-full"
          alt="corridor image"
        />
      </div>
      {/* text to the right */}
      <div className="pl-64 justify-center pt-36 font-serif">
        <h1 className="font-bold text-6xl">Sign In</h1>
        <p className="font-normal text-lg pt-2">We love our clients</p>
        <form className="flex flex-col mt-12 ">
        <div className="mb-6">
            <label
              htmlFor="Full Name"
              className="text-white mb-2 block text-sm font-medium"
            >
              Full Name
            </label>
            <input
              type="Full Name"
              id="Full Name"
              required
              className="bg-[#18191E] border pl-3 w-full border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg sm:w-[300px] lg:w-[670px] pt-2.5"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white mb-2 block text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border pl-3 w-full border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg sm:w-[300px] lg:w-[670px] pt-2.5"
              placeholder="Your E-mail"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2  text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="bg-[#18191E] border pl-3 w-full sm:w-[300px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg lg:w-[670px] pt-2.5"
              placeholder="Your Password"
            />
          </div>
          <div className="flex pb-3">
            <input
              type="checkbox"
              id="myCheckbox"
              class="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="myCheckbox" class="text-white pl-2">
              I agree to the terms of sercice
            </label>
          </div>

          <button
            type="submit"
            className="  bg-blue-500 hover:bg-white text-black font-medium py-2.5 rounded-lg sm:w-[300px] lg:w-[670px] "
          >
            Create Account
          </button>
        </form>
        <p class="text-gray-600 pt-8">
          Already have an account?
          <a href="LogIn" class="font-bold text-white hover:text-blue-600 pl-2">
            LogIn
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
