import React from 'react'

const Navbar  = () => {
    const scrollTo = (scroll) => {
        const section = document?.querySelector(`#${scroll}`);
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      };
  return (
    
        <nav className="fixed w-full flex h-4   section  sm:bg-transparent backdrop-blur-sm py-4 lg:justify-center sm:justify-end lg:pl-56 sm:pl-[50px]  md:pl-[350px] lg:w-[92%] mx-auto z-[1000]    ">
      

      <div className="text-black  pl-72 text-lg font-semibold ">
        <ul className="  flex   justify-end  items-center gap-4 md:gap-8 md:ml-auto w-full md:justify-end">
          
        <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("home")}>Home</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("aboutus")}>About Us</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("book")}>Books</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("category")}>Category</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("contact")}>Contact Us</button>
          </li>
 
          
        </ul>
       
      </div>
    </nav>
   
  )
}

export default Navbar