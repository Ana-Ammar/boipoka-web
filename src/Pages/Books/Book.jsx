import { GoStar } from "react-icons/go";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div
        className=" card border-1 border-black/10
          active:scale-95 transition-transform
          hover:scale-105 
          h-full flex justify-between"
      >
        <figure className="bg-[#F3F3F3] rounded-xl py-8 m-6">
          <img className="w-32 h-48" src={image} alt={bookName} />
        </figure>

        <div className="px-6 pb-6">
          <div>
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="badge bg-[#23BE0A10] text-[#23BE0A] mr-4 rounded-4xl"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="mt-4 font-bold text-2xl">{bookName}</h2>
          <p className="border-b pb-4 border-dashed border-black/25 my-5">
            By: {author}
          </p>
          <div className="flex justify-between">
            <p>{category}</p>
            <p className="flex items-center gap-1">
              {rating} <GoStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
