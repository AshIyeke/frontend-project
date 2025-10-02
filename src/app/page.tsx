"use client";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection"
import Search  from "@/components/Search"

import AboutSection from "@/components/Aboutsection";
import Features from "@/components/Features";


export default function Home() {
  const AnimatedTestimonialsDemo = dynamic(
    () => import("../components/Testimonials").then((mod) => mod.default),
    { ssr: false }
  );
  return (
    <div className="container mx-auto">
      <HeroSection/>
      <Search/>
      <AboutSection/>
      <Features/>
      
      <AnimatedTestimonialsDemo/>
    </div>
  )
}
