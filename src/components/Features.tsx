import Link from "next/link";
import { rooms } from "./room_list";
import RoomCard from "./Roomcard";
export default function Features() {
  // Filter rooms to only show suites
  const suiteRooms = rooms.filter((room) => room.category === "Luxury Suites");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-600 dark:text-white font-semibold text-sm tracking-wider uppercase bg-blue-50 dark:bg-blue-600 px-4 py-2 rounded-full">
              Featured Suites
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  dark:text-white mb-4">
            Our Luxury Suite Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled luxury in our handpicked suite collection,
            designed for the most discerning travelers seeking ultimate comfort
            and elegance.
          </p>
        </div>

        {/* Suites Grid */}
        {suiteRooms.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suiteRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No suites available at the moment.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href={"/rooms"}
            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
