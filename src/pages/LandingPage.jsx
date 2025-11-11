import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import CollectionCard from "../components/CollectionCard"
export default function LandingPage() {
    return(
        <div className="bg-linear-to-r from-[#fdf4f2] to-[#faece8]">
            <Navbar/>
            <HeroSection/>
            <CollectionCard/>
            
        </div>
    )
}