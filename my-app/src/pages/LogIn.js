import React from "react";
import Image from "next/image";
import books2 from "../assets/images/books2.jpg";
import axios from "axios";
const LogIn = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
        setLoading(true);
        const response = await axios.post("http://localhost:5000/api/login", user);
        router.push("/");
        
    } catch (error:any) {
        console.log("Login failed", error.message);
        
    }finally {
        setLoading(false);
    }
}

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
            onChange={(e) => setUser({...user, email: e.target.value})}
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
            onChange={(e) => setUser({...user, password: e.target.value})}

            required
            className="bg-white border pl-3 w-full border-black placeholder-black text-gray  text-lg rounded-lg sm:w-[300px] lg:w-[428px] pt-2.5"
            placeholder="Your Password"
          />
        </div>
        <div className="  pl-2">
          <button class="mt-4  bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-40 lg:w-[428px]  rounded-xl justify-center items-center ">
            onClick={onLogin}
            <Link href="/signup">Visit signup page</Link>
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
