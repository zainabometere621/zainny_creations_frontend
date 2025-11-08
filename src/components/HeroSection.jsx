import staricon from "../assets/star.png"
import dress from "../assets/dress01.jpg"

export default function HeroSection() {
  return(
    <div className=" bg-linear-to-r from-[#fdf4f2] to-[#faece8] py-10 px-20 rounded-4xl">
        <div className="flex items-center justify-between">
            <div className="max-w-xl space-y-6 ">
                <div class="inline-flex items-center justify-center gap-2 bg-white text-gray-800 rounded-full px-4 py-1.5 shadow-sm">
                <img 
                src={staricon}
                alt="star" 
                className="w-8 h-8 object-contain" />
                <span class="font-poppins text-xs">New Collection 2026</span>
                </div>

                <div>
                    <h1 className="font-playfair font-bold text-black text-5xl leading-snug">
                        A Perfect of Style, Comfort and {" "}
                        <span className="text-[#D4AF37]">Confidence</span>
                    </h1>
                    <p className=" font-poppins text-sm text-gray-500 mt-3">Embrace modest fashion that blends elegance, comfort, and timeless confidence.</p>
                </div>
                <div className="flex gap-10 pt-4">
                    <button className=" h-10 px-6 bg-[#D4AF37] rounded-3xl text-sm font-poppins text-white animate-bounce">Shop Now &rarr;</button>
                    <button className=" h-10 px-12 bg-white border border-[#D4AF37] rounded-3xl text-black text-sm font-poppins">Custom Orders</button>
                </div>
            </div>
            <div className="">
                <img 
                    src={dress}
                    alt="dress image"
                    className="h-auto w-[400px] rounded-2xl object-cover shadow-sm"
                />
            </div>
        </div>
    </div>        
    
  )
}                                                                                                                                                                                                  