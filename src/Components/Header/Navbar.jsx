import { Link, NavLink } from "react-router";

const Navbar = () => {

    const links = <>
        <Link to="/" className="border-1 border-green-700 text-green-700 py-1.5 px-2.5 rounded-[8px]">Home</Link>
        <Link to="/listed-books" >Listed Books</Link>
        <Link>Pages to Read</Link>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          {links}
          </ul>
        </div>
        <NavLink to='/' className="font-bold text-2xl">Book Vibe</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6 items-center">
            {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn bg-[#23BE0A] text-white">Sign in</a>
        <a className="btn bg-[#59C6D2] text-white">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
