// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800">
      

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="about.jpg"
            alt="Hotel interior"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4  dark:text-white ">Our Story</h2>
            <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
              Nestled in the heart of the city, our hotel combines timeless luxury with
              modern comfort. Since our founding, we have been dedicated to creating
              unforgettable experiences for travelers from around the world.
            </p>
            <p className="text-gray-600  dark:text-white  leading-relaxed">
              Whether you're here for business or leisure, we promise warmth, elegance,
              and personalized service that makes you feel at home.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl dark:text-white font-bold mb-12">Why Stay With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/100/000000/bed.png"
                alt="Comfort"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Luxury & Comfort</h3>
              <p className="text-gray-600">
                Spacious rooms, premium bedding, and world-class amenities designed for relaxation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/100/000000/restaurant.png"
                alt="Dining"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
              <p className="text-gray-600">
                Gourmet cuisine prepared by award-winning chefs with locally sourced ingredients.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://img.icons8.com/ios-filled/100/000000/swimming-pool.png"
                alt="Pool"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Relaxation</h3>
              <p className="text-gray-600">
                Unwind with our spa, pool, and wellness facilities designed to rejuvenate your soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6  dark:text-white ">Our Mission</h2>
        <p className="text-gray-600   dark:text-white   max-w-3xl mx-auto leading-relaxed">
          At our hotel, we believe in crafting experiences that go beyond just
          accommodation. Our mission is to provide unmatched hospitality, blending luxury
          with comfort, and ensuring every guest leaves with cherished memories.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Plan Your Stay With Us</h2>
        <p className="mb-6">Discover elegance, comfort, and unmatched hospitality today.</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}