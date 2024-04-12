import React from "react";
import Image from "next/image";
import books2 from "../assets/images/books2.jpg";

const LogIn = () => {
  return (
    <div className=" flex p-36 h-40 w-full object-cover text-white font-serif">
      <div class="p-4 justify-center items-center">
        <h2 class="font-bold text-3xl mb-2 pt-10 ">Welcome Back</h2>
        <p class="text-gray-600">
          Don't have an account yet?
          <a
            href="Signup"
            class="font-bold text-white hover:text-blue-600 pl-2"
          >
            Sign up
          </a>{" "}
        </p>
        <div className="mb-6 pt-8">
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
            className="bg-white border pl-3 w-full border-black placeholder-black text-white  text-lg rounded-lg sm:w-[300px] lg:w-[428px] pt-2.5"
            placeholder="Your E-mail"
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
            type="password"
            id="password"
            required
            className="bg-white border pl-3 w-full border-black placeholder-black text-gray  text-lg rounded-lg sm:w-[300px] lg:w-[428px] pt-2.5"
            placeholder="Your Password"
          />
        </div>
        <div className="  pl-2">
          <button class="mt-4  bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-40 lg:w-[428px]  rounded-xl justify-center items-center ">
            LogIn
          </button>
        </div>
      </div>

      {/* image to the right */}
      <div className="pl-56 pt-10  relative  ">
        <Image
          src={books2}
          width={740}
          height={640}
          className=" rounded-full object-cover transition-transform duration-700 transform hover:scale-125"
          alt="books2 image"
        />
      </div>
    </div>
  );
};

export default LogIn;
