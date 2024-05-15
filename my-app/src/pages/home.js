import Image from 'next/image'
import books2 from "../assets/images/books2.jpg";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  // Sample data for books
  const books = [
    {
      name: "Book One",
      description: "This is the description of Book One.",
      imageUrl: "/path/to/image1.jpg",
      price: "$20"
    },
    {
      name: "Book Two",
      description: "This is the description of Book Two.",
      imageUrl: "/path/to/image2.jpg",
      price: "$25"
    }
  ];

  useEffect(() => {
    const { userName } = router.query;
    if (userName) {
      setUserName(userName);
    }
  }, [router.query]);

  const handleLogout = () => {
    router.push("/SignUp");
  };

  return (
    <div className="bg-#6d28d9-100 p-8">
      <h1 className="text-2xl font-bold text-center">My Homepage</h1>
      <div className="flex justify-center my-4">
        <Image
          src={books2}
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-xl font-semibold text-center">Welcome</h1>
      {userName && 
        <p className="text-center text-gray-700">Welcome to the homepage, {userName}</p>
      }
      <div className="flex flex-col items-center mt-4">
        {books.map((book, index) => (
          <div key={index} className="flex flex-row mb-4 p-4 shadow-lg">
            <Image src={book.imageUrl} alt={book.name} width={100} height={100} className="rounded-lg" />
            <div className="ml-4">
              <h2 className="text-lg font-bold">{book.name}</h2>
              <p>{book.description}</p>
              <p className="font-bold">{book.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;