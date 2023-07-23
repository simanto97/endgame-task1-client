import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "colleges",
    },
    {
      id: 3,
      link: "admission",
    },
    {
      id: 4,
      link: "my college",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-black px-4">
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize cursor-pointer px-4 py-2 font-medium text-gray-500 hover:scale-105"
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
      <div>
        <h2 className="text-5xl ml-2">
          <button className="btn btn-secondary">Button</button>
        </h2>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-1/2 bg-gray-500 duration-1000 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-xl"
            >
              <Link onClick={() => setNav(!nav)} to={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
