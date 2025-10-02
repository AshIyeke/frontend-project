import React from "react";
import { Star, Award, Users, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const stats = [
    { icon: Star, value: "15+", label: "Years Experience" },
    { icon: Award, value: "500+", label: "Awards Won" },
    { icon: Users, value: "50K+", label: "Happy Guests" },
    { icon: MapPin, value: "25+", label: "Destinations" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop"
              alt="Luxury hotel lobby"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-blue-600 dark:text-white dark:bg-blue-800 font-semibold text-sm tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Redefining Luxury & Comfort Since 2009
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that every journey deserves a perfect stay. With over a
              decade of excellence, we've crafted unforgettable experiences for
              travelers worldwide, combining world-class hospitality with
              cutting-edge technology.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our carefully curated collection of hotels spans across the
              globe's most sought-after destinations. From boutique hideaways to
              grand luxury resorts, each property is handpicked to ensure you
              experience nothing but the finest accommodations, exceptional
              service, and memories that last a lifetime.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={"/rooms"}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Hotels
              </Link>
              <Link
                href={"/about"}
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 transition-all duration-300 hover:border-gray-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
