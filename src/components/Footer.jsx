import instagramicon from "/src/assets/black-instagram-logo-3497.png"
import facebookicon from "/src/assets/facebook-logo-90.png"
import xicon from "/src/assets/icons8-x-100.png"
import phoneicon from "/src/assets/phone-1.png"
import locationicon from "/src/assets/location-2952.png"
export default function Footer () {
    return(
      <footer>
        <div className="w-full mt-10 flex flex-col md:flex-col lg:flex-row gap-6 justify-center items-center lg:justify-between lg:items-start lg:px-10">

          {/* Brand Section */}
          <div className="w-78 flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
            <h1 className="text-[#D4AF37] font-playfair text-xl font-black">Zainny Creations</h1>
            <p className="text-xs text-gray-400 font-poppins">
              Elegant Nigerian fashion crafted with contemporary style and effortless sophistication.
            </p>
            <div className="flex gap-2">
              <div className="h-6 w-6 rounded-full flex justify-center items-center bg-[#fdf4f2] hover:bg-[#f8e3df]">
                <img src={instagramicon} alt="Instagram icon" className="h-3 w-3"/>
              </div>
              <div className="h-6 w-6 rounded-full flex justify-center items-center bg-[#fdf4f2] hover:bg-[#f8e3df]">
                <img src={facebookicon} alt="facebook icon" className="h-3 w-3"/>
              </div>
              <div className="h-6 w-6 rounded-full flex justify-center items-center bg-[#fdf4f2] hover:bg-[#f8e3df]">
                <img src={xicon} alt="Twitter icon" className="h-3 w-3"/>
              </div>
            </div>
          </div>

          {/* Shop Section */}
          <div className="w-60 flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
            <h2 className="font-playfair text-sm">Shop</h2>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">Casuals</p>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">Gowns</p>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">Cooperate</p>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">Two Piece</p>
          </div>

          {/* Customer Service */}
          <div className="w-60 flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
            <h2 className="font-playfair text-sm">Customer service</h2>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">Track Order</p>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">Returns & Exchange</p>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">Shipping Info</p>
            <p className="font-poppins font-bold text-xs hover:text-black text-gray-400">FAQs</p>
          </div>

            {/* Stay Connected */}
          <div className="w-60 flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
            <h2 className="font-playfair text-sm">Stay Connected</h2>
            <p className="font-poppins text-xs text-gray-400">
              Stay connected for exclusive style inspirations and updates.
            </p>
            <div className="flex gap-2 items-center">
              <img src={phoneicon} alt="Phone icon" className="h-3 w-3" />
              <p className="font-poppins text-xs text-gray-400">+234 916 157 4996</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={locationicon} alt="Location icon" className="h-3 w-3 text-gray-400"/>
              <p className="font-poppins text-xs text-gray-400">Abuja, Nigeria</p>
            </div>
          </div>

        </div>

      <div className="w-[82%] mx-auto h-px bg-[#f8e3df] my-4"></div>
      <p className="text-poppins text-gray-400 text-xs mt-4 mb-8 flex justify-center"> &copy; 2025 Zainny Creations. All rights reserved.</p>
    </footer>


      
  )
}