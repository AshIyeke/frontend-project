import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import Search from "@/components/search"


export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <HeroSection/>
      <Search/>
    </div>
  )
}
