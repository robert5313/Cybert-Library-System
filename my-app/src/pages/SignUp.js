import React, { useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import books2 from "../assets/images/books2.jpg";
import corridor from "../assets/images/corridor.jpg";
import axios from "axios";

const SignUP = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState(""); 

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5001/api/register", user);
      console.log("Signup response", response.data);
      setUserName(response.data.name);
      router.push({
        pathname: "/home",
        query: {
          userName: response.data.name
        }
      });
    } catch (error) {
      console.log("Sign Up Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex p-36 h-40 w-full object-cover text-white font-serif">
      <div className="p-4 justify-center items-center">
        {/* Image to the left */}
        <Image
          src={corridor}
          width={540}
          height={240}
          className="pl-20 pt-10 rounded-full"
          alt="corridor image"
        />
        <h2 className="font-bold text-3xl mb-2 pt-10 ">Welcome Back</h2>
        <p className="text-gray-600">
          Don't have an account yet?
          <a
            href="Signup"
            className="font-bold text-white hover:text-blue-600 pl-2"
          >
            Sign up
          </a>{" "}
        </p>
        <div className="mb-6 pt-8">
          <label
            htmlFor="email"
            className="text-dark mb-2 block text-sm font-medium"
          >
           Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
            required
            className="bg-[#18191E] border pl-3 w-full sm:w-[300px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg lg:w-[670px] pt-2.5"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-6 pt-8">
          <label
            htmlFor="email"
            className="text-dark mb-2 block text-sm font-medium"
          >
           Enter Your Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            required
            className="bg-[#18191E] border pl-3 w-full sm:w-[300px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg lg:w-[670px] pt-2.5"
            placeholder="Your E-mail"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white mb-2 block text-sm font-medium"
          >
            Enter Your Password
          </label>
          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              required
              className="bg-[#18191E] border pl-3 w-full sm:w-[300px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg lg:w-[670px] pt-2.5"
              placeholder="Your Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="  pl-2">
          <button
            className="mt-4  bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-40 lg:w-[428px]  rounded-xl justify-center items-center"
            onClick={onSignUp}
          >
            SignUp
          </button>
          <p className="text-gray-600 pt-8">
          Already have an account?
          <a href="/Signin" className="font-bold text-white hover:text-blue-600 pl-2">
            Signin
          </a>{" "}
        </p>
        </div>
        {/* Displaying the user's name if available */}
      </div>
      <div className="pl-56 pt-10 relative ">
        <Image
          src={books2}
          width={740}
          height={640}
          className="rounded-full object-cover transition-transform duration-700 transform hover:scale-125"
          alt="books2 image"
        />

      </div>
    </div>
  );
};

export default SignUP;