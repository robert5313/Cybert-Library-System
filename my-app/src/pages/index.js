import Image from "next/image";
import { Inter } from "next/font/google";
import books from "../assets/images/books.png";
import Navbar from "../components/Navbar.jsx";
import Shape1 from "../assets/images/Shape1.png";
import Shape2 from "../assets/images/Shape2.png";
import Shape3 from "../assets/images/Shape3.png";
import Book3 from "../assets/images/Book3.jpg";
import Book4 from "../assets/images/Book4.jpg";




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    
      className="flex min-h-screen flex-col  font-serif justify-between p-10  bg-black" >
        <div className="flex text-white">
         <div >
            <Navbar/>
          </div >
          <div className=" absolue top-2 z-10 left-6 pt-24">
            <Image src={Shape3}
            width={640}
            height={840}
            alt="shape 3"
            />
          </div>
      <div className=" pt-56 pl-12 top-5 z-30 absolute left-6 ">
        <h1 className="font-bold text-5xl">Explore Our Library<br/>
        Your Gateway to Knowledge</h1>
        
      </div>
      
      {/* image to the right */}
<div className="pl-56 pt-14 pb-24">
  <Image src={Book4}
  width={500}
  height={480}
  className=" rounded-full object-cover"
  alt="books image"
  />
</div>
      </div>
      

    </main>
  );
}
