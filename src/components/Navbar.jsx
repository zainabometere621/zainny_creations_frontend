import { useState } from "react"
import searchicon from "../assets/search-icon.png"
import nairaicon from "../assets/naira-icon.png"
import carticon from "../assets/cart-icon.png"
import profileicon from "../assets/profile-icon.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    <nav className="flex justify-center items-center gap-26 w-full h-16  bg-white shadow-xl ">
      <div>
        <h1 className=" text-[#D4AF37] font-playfair text-3xl font-black">Zainny Creations</h1>
      </div>  
      <div className="hidden lg:flex justify-center items-center gap-26" >
        <ul className="flex gap-10 font-poppins text-xs">
          <li className="hover:text-gray-400"><a href="#">Collections <span>&#9662;</span></a></li>
          <li className="hover:text-gray-400"><a href="#">Custom Orders</a></li>
        </ul>
        <div className="relative w-max">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img 
              src={searchicon} 
              alt="search icon"
              className="h-5 w-5 text-gray-400"
            />
          </span>
          <input
          type="text"
            placeholder="Search for outfits..."
            className="pl-10 h-8 w-96 text-xs bg-gray-200 font-poppins border border-transparent rounded-2xl  focus:border-[#e79f93] focus:outline-none  transition-all duration-200"
          />
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <img 
            src={nairaicon} 
            alt="Naira icon" 
            className="h-5 w-5 hover:opacity-60 "
            />
            <span className="hover:opacity-60 ">&#9662;</span>
          </div>
          <div>
            <img 
            src={carticon} 
            alt="Cart icon" 
            className="h-10 w-10 hover:opacity-60 "
            />
          </div>
          <div>
            <img 
            src={profileicon} 
            alt="Profile icon" 
            className="h-8 w-8 hover:opacity-60 transition duration-200"
            />
          </div>
        </div>
      </div>  
      <button
        className="lg:hidden text-xl font-bold "
        onClick={() => setMenuOpen(true)} >
       
          ☰
      </button>
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-black text-white p-6
          transform ${menuOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 lg:hidden
          z-50
        `}
      >
        <button
          className="text-2xl mb-6"
          onClick={() => setMenuOpen(false)}    
        >
          ×
        </button>
        <ul className="flex flex-col gap-6 text-sm font-poppins">
          <li><a href="#">Collections</a></li>
          <li><a href="#">Custom Orders</a></li>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={searchicon} className="h-5 w-5" />
            </span>

            <input
              type="text"
              placeholder="Search..."
              className="pl-10 h-8 w-full text-sm bg-gray-800 rounded-3xl outline-none"
            />
          </div>
          <div className="">
            <img src={nairaicon} className="h-5 w-5" />
            <span>NGN &#9662;</span>
          </div>
          <div className="text-sm font-poppins">
            <p>Cart</p>
            <p>My Account</p>
          </div>
        </ul>
      </div>
    </nav>
  
  )
}



