import gown from "../assets/gown01.jpg"
import cooperate from "../assets/cooperate01.jpg"
import casual from "../assets/casual01.jpg"
import twopiece from "../assets/two-piece01.jpg"
import FeaturedCollection from "../components/FeaturedCollection"
export default function CollectionCard(){
    return(
        <div className="">
            <div className=" flex flex-col justify-center items-center">
                <h2 className="font-playfair font-bold mt-8 text-center">Featured Collections</h2>
                <p className="font-poppins text-xs text-gray-500 mt-4 text-center">Discover styles curated to celebrate your grace and confidence</p>
            </div>
            <div className="flex gap-5 justify-center">
                <FeaturedCollection

                    image={gown}
                    outfit="Gowns"
                    styles="15+ Styles"

                />
                <FeaturedCollection

                    image={cooperate}
                    outfit="cooperate outfit"
                    styles="10+ Styles"

                />
                <FeaturedCollection

                    image={casual}
                    outfit="casual outfit"
                    styles="15+ Styles"

                />
                <FeaturedCollection

                    image={twopiece}
                    outfit="two piece"
                    styles="15+ Styles"

                />
            </div>
        </div>

    )
}
