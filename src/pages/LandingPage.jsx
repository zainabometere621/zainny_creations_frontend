import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import CollectionCard from "../components/CollectionCard"
import TrendingCard from "../components/TrendingCard"
import Footer from "../components/Footer"
export default function LandingPage() {
    return(
        <div className="">
            <Navbar/>
            <HeroSection/>
            <CollectionCard/>
            <TrendingCard/>
            <Footer/>
        </div>
    )
}