import Image from "next/image";
import { Inter } from "next/font/google";
import books from "../assets/images/books.png";
import Navbar from "../components/Navbar.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    
      className="flex min-h-screen flex-col  font-serif justify-between p-10  bg-white" >
        <div className="flex text-black">
         <div >
            <Navbar/>
          </div >
      <div className=" pt-56 pl-12">
        <h1 className="font-bold text-5xl">Explore Our Library<br/>
        Your Gateway to Knowledge</h1>
      </div>
      {/* image to the right */}
<div className="pl-24 pt-44">
  <Image src={books}
  width={580}
  height={480}
  alt="books image"
  />
</div>
      </div>
      

    </main>
  );
}
