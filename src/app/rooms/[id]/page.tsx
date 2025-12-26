"use client";
import { RoomData, rooms } from "../../../data/room_list";
import BookingCard from "../../../components/BookingCard";
import { Bed, Users, Wifi, Star } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function RoomPage() {
  const param = useParams();
  const id = param.id as string;

  const room = rooms.find((r) => r.id == parseInt(id)) as RoomData;

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {room.name}
        </h1>
        <div className="flex items-center mt-2 text-sm md:text-base">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {room.rating}
          </span>
          <span className="mx-2 text-gray-500 dark:text-gray-400">·</span>
          <span className="text-gray-600 dark:text-gray-300 underline cursor-pointer">
            {room.reviews} reviews
          </span>
          <span className="mx-2 text-gray-500 dark:text-gray-400">·</span>
          <span className="text-gray-600 dark:text-gray-300 underline cursor-pointer">
            {room.location}
          </span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-2 mb-8">
        <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 sm:row-span-2 md:row-span-2 rounded-lg overflow-hidden relative h-64 sm:h-auto">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-span-1 rounded-lg overflow-hidden relative h-48">
          <Image
            src="/pic2.jpg"
            alt={`${room.name} - alt 1`}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-span-1 rounded-lg overflow-hidden relative h-48">
          <Image
            src="/pic3.jpg"
            alt={`${room.name} - alt 2`}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-span-1 rounded-lg overflow-hidden relative h-48">
          <Image
            src="/pic4.jpg"
            alt={`${room.name} - alt 3`}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-span-1 rounded-lg overflow-hidden relative h-48">
          <Image
            src="/pic5.jpg"
            alt={`${room.name} - alt 4`}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Room Details & Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {room.category} in {room.location}
            </h2>
            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mt-2">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" /> {room.guests} guests
              </div>
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" /> {room.beds}
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">
              {room.description}
            </p>
          </div>

          <div className="py-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              What this place offers
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {room.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <Wifi className="w-5 h-5 mr-3" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <BookingCard room={room} />
        </div>
      </div>
    </div>
  );
}
