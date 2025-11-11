

export default function FeaturedCollection(props) {
   return(
    <div>
        
        <div className="mt-8 relative h-[260px] w-[250px] rounded-2xl overflow-hidden ">
            <div className="">
                <img 
                    src={props.image} 
                    alt="gown dress" 
                    className=" h-full w-full aspect-3/5 object-cover object-top"
                />
           </div>   
            <div className="absolute bottom-3 left-3 text-[#D4AF37]">
                <p className="font-playfair font-medium drop-shadow">{props.outfit}</p>
                <p className="font-poppins text-xs drop-shadow">{props.styles}</p>
            </div>    
        </div>
        <div>
           
        </div>
    </div>
   ) 
}