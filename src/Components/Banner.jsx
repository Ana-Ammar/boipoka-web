import bookImg from '../assets/books.jpg'

const Banner = () => {
    return (
         <>
         <div className="mt-12 mb-16 bg-[#F3F3F3] h-[550px] rounded-2xl hidden md:flex justify-evenly items-center ">
            <div>
                <h1 className='font-bold text-5xl/15'>Books to freshen up <br /> your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white mt-10">View The List</button>
            </div>
            <img src={bookImg} className='rounded-2xl'></img>
        </div>
 
        {/* // Responsive */}
        <div className="my-8 md:hidden bg-[#F3F3F3] px-4 py-8 rounded-2xl flex justify-center items-center">
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-3xl text-center'>Books to freshen up your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white mt-5">View The List</button>
            </div>
        </div>
        </>
    );
};

export default Banner;