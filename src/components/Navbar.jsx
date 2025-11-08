import searchicon from "../assets/search-icon.png"
import nairaicon from "../assets/naira-icon.png"
import carticon from "../assets/cart-icon.png"
import profileicon from "../assets/profile-icon.png"

export default function Navbar() {
  return(
    <nav className="flex justify-center items-center gap-26 w-full h-16  bg-white shadow-xl ">
      <div>
        <h1 className=" text-[#D4AF37] font-playfair text-3xl font-black">Zainny Creations</h1>
      </div>  
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
          className="pl-10 h-8 w-96 text-xs bg-[#f2f2f2] font-poppins border border-transparent rounded-2xl  focus:border-[#e79f93] focus:outline-none  transition-all duration-200"
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

    
    </nav>
  )
}



