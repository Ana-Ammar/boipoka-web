import { useLoaderData, useParams } from "react-router";
import { addItemToLS } from "../../Utilities/Utility";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookId = parseInt(id);

  const clickedBook = data.find((book) => book.bookId == bookId);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = clickedBook;

  // Add to Read List

  const handleReadBtn = (id) => {
    addItemToLS('readlist', id)
  }

  // Add to Wish List

  const handleWishListBtn = (id) => {
    addItemToLS('wishlist', id)
  }
  

  return (
    <div className="max-w-7xl mx-auto px-8 my-20">

      <div className="flex gap-8">

        <figure className="bg-[#F3F3F3] rounded-xl w-6/12 flex justify-center items-center">
          <img
            className='h-9/12 rounded-xl'
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="w-6/12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#131313]">{bookName}</h2>
          <p className="text-xl font-medium mb-6 text-[#13131395]">By: {author}</p>
          <div className="divider"></div>
          <p className="font-medium text-xl text-[#13131395]">{category}</p>
          <div className="divider"></div>
          <p className="my-6 text-[#13131390]"><span className="text-[#131313] font-bold">Review: </span>{review}</p>
          <div>
            <span className="font-bold mr-4">Tag</span>
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="badge bg-[#23BE0A10] text-[#23BE0A] mr-4 rounded-4xl font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="divider my-6"></div>

        <div className="flex gap-14">

          <div>
            <p className="text-[#13131380]">Number of Pages:</p>
            <p className="text-[#13131380] mt-3">Publisher:</p>
            <p className="text-[#13131380] my-3">Year of Publishing:</p>
            <p className="text-[#13131380]">Rating:</p>

          </div>

          <div>
            <p className="font-semibold">{totalPages}</p>
            <p className="font-semibold mt-3">{publisher}</p>
            <p className="font-semibold my-3">{yearOfPublishing}</p>
            <p className="font-semibold">{rating}</p>

          </div>  

        </div>


          <div className="card-actions mt-8">
            <button onClick={() => handleReadBtn(id)} className="btn">Read</button>
            <button onClick={() => handleWishListBtn(id)} className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default BookDetails;
