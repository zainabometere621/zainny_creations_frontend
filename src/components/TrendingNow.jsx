
export default function TrendingNow(props) {
    return(
        <div className="">
        
            <div className="bg-white mt-8 relative h-[350px] w-[250px] rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute pt-2 pl-2 z-10">
                    <button className="h-6 w-20 rounded-xl bg-white text-xs font-poppins">{props.styles}</button>
                </div>
                <div className="rounded-t-2xl overflow-hidden h-[280px]">
                    <img 
                        src={props.image}
                        alt="gown dress" 
                        className="rounded-t-2xl h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <div className="pt-3  font-poppins  pl-3">
                    <p className="text-xs">{props.text}</p>
                    <p className="text-[#D4AF37] mt-1 text-sm ">{props.price}</p>
                </div>

            </div>
        </div>
    )
}