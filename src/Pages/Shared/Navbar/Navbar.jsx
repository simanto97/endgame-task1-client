import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [nav, setNav] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const links = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "colleges",
      path: "/colleges",
    },
    {
      id: 3,
      link: "admission",
      path: "/admission",
    },
    user && {
      id: 4,
      link: "my college",
      path: "/my-college",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-black px-4">
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link?.id}
            className="capitalize cursor-pointer px-4 py-2 font-medium text-gray-500 hover:scale-105"
          >
            <Link to={link?.path}>{link?.link}</Link>
          </li>
        ))}
      </ul>
      <div>
        {user ? (
          <div className="flex items-center">
            <Link to="/update-profile">
              {" "}
              <button>{user?.displayName}</button>
            </Link>

            <button onClick={handleLogOut} className="btn btn-ghost capitalize">
              Log out
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-ghost capitalize">Login</button>
            </Link>
            <Link to="sign-up">
              <button className="btn btn-ghost capitalize">Sign Up</button>
            </Link>
          </>
        )}
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-1/2 bg-gray-500 duration-1000 z-10">
          {links.map((link) => (
            <li
              key={link?.id}
              className="px-4 cursor-pointer capitalize py-6 text-xl"
            >
              <Link onClick={() => setNav(!nav)} to={link.path}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
