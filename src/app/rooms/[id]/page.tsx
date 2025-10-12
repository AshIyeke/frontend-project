"use client";
import BookingCard from "@/components/BookingCard";
import RoomCard from "@/components/Roomcard";
import { RoomData, rooms } from "@/data/room_list";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function RoomPage() {
  const param = useParams();
  const id = param.id as string;

  const room = rooms.find((r) => r.id == parseInt(id)) as RoomData;

  return (
    <div>
      <div className="flex justify-between items-center p-5  my-4">
        <h1 className="text-2xl font-bold">{room.name}</h1>
        <span className="text-lg font-bold"> ⭐⭐⭐⭐⭐ {room.rating}</span>
      </div>

      <div className="px-5 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Images column - spans 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-100">
                {/* secondary image placeholder or other image */}
                <Image
                  src={room.image}
                  alt={`${room.name} - alt 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-100">
                {/* secondary image placeholder or other image */}
                <Image
                  src={room.image}
                  alt={`${room.name} - alt 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Booking card column - stays to the right on large screens */}
          <div className="lg:col-span-1">
            <BookingCard room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}
