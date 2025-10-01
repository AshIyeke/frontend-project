"use client";
import dynamic from "next/dynamic";
import Features from "@/components/Features"
import HeroSection from "@/components/HeroSection"
import Search from "@/components/Search"
// import AnimatedTestimonialsDemo from "@/components/Testimonials"
import { Animation } from "react-day-picker"


export default function Home() {
  const AnimatedTestimonialsDemo = dynamic(
    () => import("../components/Testimonials").then((mod) => mod.default),
    { ssr: false }
  );
  return (
    <div className="container mx-auto">
      <HeroSection/>
      <Search/>
      <Features/>
      <AnimatedTestimonialsDemo/>
    </div>
  )
}
