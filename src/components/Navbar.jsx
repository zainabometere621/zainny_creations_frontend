import { Search, ChevronDown, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import nairaicon from "../assets/naira-icon.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex justify-center items-center gap-26 w-full h-16  bg-white shadow-xl ">
      {/* logo */}
      <p className=" text-[#D4AF37] font-playfair text-md font-semibold italic">
        Zainny Creations
      </p>
      {/* middle text */}
      <div className="hidden lg:flex space-x-8 items-center">
        <p className="flex items-center">
          <NavLink to="/collections" className="text-sm hover:text-[#D4AF37]">
            Collections
          </NavLink>
          <ChevronDown className="h-4 w-4 text-gray-600"/>
        </p>
        <NavLink to="/custom-orders" className="text-sm hover:text-[#D4AF37]">
          Custom Orders
        </NavLink>

        {/* search bar section */}
        <div className=" flex items-center w-[300px] bg-gray-200 font-poppins rounded-2xl text-xs py-2 px-3 border border-gray-400 space-x-2 ">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search for outfits..."
            className="focus:outline-none flex-1 placeholder:text-xs"
          />
        </div>
      </div>
      {/* end of middle section */}
      <div className=" hidden lg:flex gap-4 items-center">
        <div className="flex items-center">
          <img
            src={nairaicon}
            alt="Naira icon"
            className="h-5 w-5 hover:opacity-6-0 "
          />
        </div>

        <ShoppingCart className="h-6 w-6 " />

        <User className="h-6 w-6 " />
      </div>

      {/* end of midlle section */}
      <button
        className="lg:hidden text-xl font-bold "
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-[#D4AF37] text-white p-6
          transform ${menuOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 lg:hidden
          z-50
        `}
      >
        <button className="text-2xl mb-6" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <ul className="flex flex-col gap-6 text-sm font-poppins">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Custom Orders</a>
          </li>
          <div className="relative w-full">
            {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={searchicon} className="h-5 w-5" />
            </span> */}

            <input
              type="text"
              placeholder="Search..."
              className="pl-10 h-8 w-full text-sm text-black  bg-gray-200 font-poppins border border-transparent rounded-2xl  focus:border-[#e79f93] focus:outline-none  transition-all duration-200"
            />
          </div>
          <div className="">
            <span className="text-white">₦&#9662;</span>
          </div>
          <div className="text-sm font-poppins">
            <p>Cart</p>
            <p>My Account</p>
          </div>
        </ul>
      </div>
    </nav>
  );
}
