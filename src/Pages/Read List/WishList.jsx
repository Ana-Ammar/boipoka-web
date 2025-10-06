import { NavLink } from "react-router";

const WishList = ({ whishBook, removeHandleBtnFromWishList }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = whishBook;

  return (
    <div className="flex gap-8 border-1 border-black/15 rounded-[30px] h-72 p-6 mb-6">
      <figure className="bg-[#F3F3F3] w-56 rounded-xl flex justify-center items-center">
        <img className="h-44 rounded-xl" src={image} alt={bookName} />
      </figure>

      <div className="flex flex-col justify-center flex-1">
        <h2 className="text-2xl font-bold text-[#131313]">{bookName}</h2>
        <p className="font-medium my-3 text-black/70">By: {author}</p>

        <div className="flex items-center gap-3">
          <span className="font-bold">
            Tag &nbsp; &nbsp;
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="badge bg-[#23BE0A10] text-[#23BE0A] mr-2 rounded-4xl font-medium"
              >
                #{tag}
              </span>
            ))}
          </span>

          <p className="text-black/80">
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="flex gap-4 my-4">
          <p className="text-black/60">Publisher:&nbsp; {publisher}</p>
          <p className="text-black/60">Number of Pages:&nbsp; {totalPages}</p>
        </div>

        <div className="border opacity-20"></div>

        <div className="flex gap-3 items-center mt-4">
          <p className="py-2.5 px-5 rounded-4xl bg-[#328EFF15] text-[#328EFF]">
            Category: {category}
          </p>
          <p className="py-2.5 px-5 rounded-4xl bg-[#FFAC3325] text-[#FFAC33]">
            Rating: {rating}
          </p>
          <NavLink
            to={`/bookDetails/${bookId}`}
            className="btn py-2.5 px-5 rounded-4xl bg-[#23BE0A] text-white"
          >
            View Details
          </NavLink>
          <button
            onClick={() => removeHandleBtnFromWishList(bookId)}
            className="btn py-2.5 px-5 rounded-4xl bg-[#328EFF] text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
