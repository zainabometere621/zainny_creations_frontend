import dress from "../assets/dress01.jpg";
import { Star, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="  py-10 px-20 bg-[#f8e3df]">
      <div className="flex flex-col lg:flex-row md:flex-col items-center justify-center md:flex md:justify-center md:items-center lg:justify-between">
        <div className="max-w-xl space-y-6 ">
          <div class="inline-flex items-center justify-center gap-2 bg-white text-gray-800 rounded-full px-4 py-1.5 shadow-sm">
            <Star className="fill-[#D4AF37] text-[#D4AF37] h-4 w-4" />

            <span class="font-poppins text-xs">New Collection 2026</span>
          </div>

          <div className="max-w-md mx-auto">
            <h1 className="font-playfair font-bold text-black text-2xl md:text-5xl lg:text-5xl  leading-snug">
              A Perfect blend of Style, Comfort and
              <span className="text-[#D4AF37]"> Confidence</span>
            </h1>
            <p className="font-poppins text-sm text-gray-700 mt-3 max-w-sm">
              Embrace modest fashion that blends elegance, comfort, and timeless
              confidence.
            </p>
          </div>
          <div className="flex gap-2 pt-4 items-center mb-10">
            <button className="flex items-center gap-1 px-6 md:px-8 lg:px-10 py-2 bg-[#D4AF37] rounded-3xl text-xs md:text-sm lg:text-sm font-poppins text-white whitespace-nowrap">
              Shop Now
              <ArrowRight className="h-3 w-3" />
            </button>

            <button className="px-6 md:px-8 lg:px-10 py-2 hover:border  hover:border-gray-700 rounded-3xl text-black text-xs md:text-sm lg:text-sm font-poppins whitespace-nowrap">
              Custom Orders
            </button>
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
  );
}
