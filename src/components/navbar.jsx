import { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Helper } from "../store/context";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

function Navbar() {
  const { nav, setnav, setdata, News, color, darktheme, lighttheme } =
    useContext(Helper);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-4 shadow-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 uppercase text-lg  top-0 z-50">
      
      <h1 className="text-green-600 text-3xl font-bold cursor-pointer mb-3 md:mb-0">
        NEWS<span className="text-gray-800 dark:text-white">-APP</span>
      </h1>

      
      <ul className=" hidden md:flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-300 lg:flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-300 xl:flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-300">
        <a href="#n">
        <li
          onClick={() => setnav("topnews")}
          className={`cursor-pointer hover:text-green-600 pb-1 ${
            nav === "topnews" ? "border-b-2 border-green-600 text-green-600" : ""
          }`}
        >
          Top News
        </li>
        </a>
        <a href="#n">
        <li
          onClick={() => setnav("topheadline")}
          className={`cursor-pointer hover:text-green-600 pb-1 ${
            nav === "topheadline"
              ? "border-b-2 border-green-600 text-green-600"
              : ""
          }`}
        >
          Top Headlines
        </li>
        </a>
        <a href="#a">
        <li
          onClick={() => setnav("newspaper")}
          className={`cursor-pointer hover:text-green-600 pb-1 ${
            nav === "newspaper"
              ? "border-b-2 border-green-600 text-green-600"
              : ""
          }`}
        >
          Our Application
        </li>
        </a>
        <a href="#f">
        <li
          onClick={() => setnav("contact")}
          className={`cursor-pointer hover:text-green-600 pb-1 ${
            nav === "contact" ? "border-b-2 border-green-600 text-green-600" : ""
          }`}
        >
          Contact
        </li>
        </a>
      </ul>

      
      <div className="flex items-center gap-4 mt-3 md:mt-0">
        <form
          onSubmit={News}
          className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1"
        >
          <input
            type="text"
            placeholder="Topic"
            className="bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 px-2 text-base w-28 sm:w-40"
            onChange={(e) => setdata(e.target.value)}
            required
          />
          <button type="submit" className="text-green-600 text-xl">
            <IoSearchOutline />
          </button>
        </form>

        
        <div className="text-2xl cursor-pointer text-yellow-500 hover:scale-110 transition-transform">
          {color ? (
            <FaMoon  onClick={lighttheme} />
          ) : (
            <GoSun onClick={darktheme} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
