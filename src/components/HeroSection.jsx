import staricon from "../assets/star.png"
import dress from "../assets/dress01.jpg"

export default function HeroSection() {
  return(
    <div className="  py-10 px-20 bg-[#f8e3df]">
        <div className="flex flex-col lg:flex-row md:flex-col items-center justify-center md:flex md:justify-center md:items-center lg:justify-between">
            <div className="max-w-xl space-y-6 ">
                <div class="inline-flex items-center justify-center gap-2 bg-white text-gray-800 rounded-full px-4 py-1.5 shadow-sm">
                    <img 
                    src={staricon}
                    alt="star" 
                    className="w-6 h-6  object-contain" />
                    <span class="font-poppins text-xs">New Collection 2026</span>
                </div>

                <div>
                    <h1 className="font-playfair font-bold text-black text-2xl md:text-5xl lg:text-5xl  leading-snug">
                        A Perfect of Style, Comfort and {" "}
                        <span className="text-[#D4AF37]">Confidence</span>
                    </h1>
                    <p className=" font-poppins text-sm text-gray-500 mt-3">Embrace modest fashion that blends elegance, comfort, and timeless confidence.</p>
                </div>
                <div className="flex gap-10 pt-4 md:flex md:items-center md:justify-center mb-10 md:mb-10">
                    <button className=" lg:h-10 h-12 lg:px-10 px-12 bg-[#D4AF37] rounded-3xl  text-xs md:text-sm lg:text-sm font-poppins text-white animate-bounce">Shop Now &rarr;</button>
                    <button className=" lg:h-10 h-12 lg:px-12 px-14 bg-white border border-[#D4AF37] rounded-3xl text-black text-xs md:text-sm lg:text-sm font-poppins">Custom Orders</button>
                </div>
            </div>
            <div className="">
                <img 
                    src={dress}
                    alt="dress image"
                    className="h-auto [200px] lg:w-[400px] md:w-[400px] rounded-2xl object-cover shadow-sm"
                />
            </div>
        </div>
    </div>        
    
  )
}                                                                                                                                                                                                  


