import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [search, setSeach] = useState('')

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  
    const convertSearch = search.trim().toLocaleLowerCase()
    const searchedBooks = convertSearch ? allBooks.filter(book => book.bookName.toLocaleLowerCase().includes(convertSearch)) : allBooks

   
  return (
    <div className="mb-32">

      <div className=" md:flex justify-between text-center">
        <h1 className="md:text-4xl text-3xl font-bold md:mb-9 my-6 md:my-0 text-center">Books</h1>

        <label className="input max-w-4/6 mb-7 md:my-0">
          <svg
            className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" 
          value={search}
          onChange={(e) => setSeach(e.target.value)}
          required placeholder="Search Book" />
        </label>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {searchedBooks.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
