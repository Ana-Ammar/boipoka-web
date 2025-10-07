import { NavLink } from "react-router";
import photo from "../../assets/Frame.png"
import page from "../../assets/page.png"
import year from "../../assets/year.png"


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
    <div className="md:flex gap-8 border-1 border-black/15 rounded-[30px] md:h-72 p-6 mb-6">
      <figure className="bg-[#F3F3F3] md:w-56 rounded-xl flex justify-center items-center py-4 md:py-0">
        <img className="h-44 rounded-xl" src={image} alt={bookName} />
      </figure>

      <div className="flex flex-col justify-center flex-1 md:mt-0 mt-4">
        <h2 className="text-2xl font-bold text-[#131313]">{bookName}</h2>
        <p className="font-medium my-3 text-black/70">By: {author}</p>

        <div className="md:flex items-center gap-3">
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

          <p className="md:text-black/70 mt-3 md:mt-0 flex items-center gap-1.5">
            <img src={year}></img> 
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="md:flex gap-6 md:my-4 my-3">
          <p className="md:text-black/60 mb-2.5 md:mb-0 flex items-center gap-1.5">
          <img src={photo}></img>  
          Publisher:&nbsp; {publisher}</p>
          <p className="md:text-black/60 flex items-center gap-1.5">
          <img src={page}></img>  
          Pages:&nbsp; {totalPages}</p>
        </div>

        <div className="border opacity-20"></div>

        <div className="md:flex grid grid-cols-2 gap-3 items-center mt-4">
          <p className="py-2.5 px-5 text-[16px] text-center rounded-4xl bg-[#328EFF15] text-[#328EFF]">
            Category: {category}
          </p>
          <p className="py-2.5 px-5 text-[16px] text-center rounded-4xl bg-[#FFAC3325] text-[#FFAC33]">
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
