import gown from "../assets/gown02.jpg"
import cooperate from "../assets/cooperate02.jpg"
import casuals from "../assets/casual02.jpg"
import twopiece from "../assets/two-piece02.jpg"
import TrendingNow from "../components/TrendingNow"

export default function TrendingCard() {
    return(
        <div className="bg-linear-to-r from-[#fdf4f2] to-[#faece8]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-playfair font-bold mt-8 text-center">Trending Now</h1>
                <p className="font-poppins text-xs text-gray-500 mt-4 text-center">Our season’s signature style pieces</p>
            </div>
            <div className="flex gap-5 justify-center">
                <TrendingNow
                
                    styles="Gowns"
                    image= {gown}
                    text="Timeless elegant dress"
                    price="₦30,000"

                />

                <TrendingNow
                
                    styles="Cooperate"
                    image= {cooperate}
                    text="Sophisticated Workwear Set"
                    price="₦50,000"

                />

                <TrendingNow
                
                    styles="Casuals"
                    image= {casuals}
                    text="Easy going Style Dress"
                    price="₦25,000"

                />

                <TrendingNow
                
                    styles="Two-Piece"
                    image= {twopiece}
                    text="Everyday Two-Piece Outfit"
                    price="₦50,000"

                />
            </div>
            <div className="bg-linear-to-r from-[#e9a8ad] via-[#f3c3c2] to-[#f7e7c6] rounded-3xl p-10 w-4/5 h-50 mx-auto m-30 flex flex-col gap-4 justify-center">
                <h2 className="font-popins text-base text-white font-semibold">Want Something Unique?</h2>
                <p className="font-playfair text-xs text-white">Book a consultation with our designers and bring your dream outfit to life.</p>
                <button className="h-8 w-40 rounded-2xl bg-white text-xs flex justify-center items-center gap-4 font-playfair font-semibold ">
                    Book Consultations 
                    <span>&rarr;</span>
                </button>
            </div>
        </div>
    )
}