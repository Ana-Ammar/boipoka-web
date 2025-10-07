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
        <figure className="bg-[#F3F3F3] rounded-xl md:py-8 py-4 md:m-6 m-4">
          <img className="w-32 h-48" src={image} alt={bookName} />
        </figure>

        <div className="md:px-6 md:pb-6 px-4 pb-4">
          <div>
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="text-[16px] badge bg-[#23BE0A10] text-[#23BE0A] mr-4 rounded-4xl"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="mt-3 font-bold text-xl md:text-2xl">{bookName}</h2>
          <p className="border-b pb-3 border-dashed border-black/25  my-2.5 text-[16px] font-medium">
            By: {author}
          </p>
          <div className="flex justify-between">
            <p className="text-[16px] font-medium">{category}</p>
            <p className="flex items-center gap-1 text-[16px] font-medium">
              {rating} <GoStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
