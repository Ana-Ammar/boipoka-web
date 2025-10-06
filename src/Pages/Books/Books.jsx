import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div className="mb-32">
      <h1 className="text-4xl font-bold mb-9 text-center">Books</h1>

      <div className="grid grid-cols-3 gap-6">
          
    {
        allBooks.map(book => <Book
        key={book.bookId}
        book={book}
        ></Book>)
    }

      </div>
    </div>
  );
};

export default Books;
