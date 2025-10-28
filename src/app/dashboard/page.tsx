"use client";
import { useBContext } from "@/components/bcontext";
import { LayoutDashboard, Trash2 } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const { bookings, clearBookings } = useBContext();

  if (!bookings || bookings.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">My Bookings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          You have no bookings yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <LayoutDashboard className="w-8 h-8" />
        My Bookings
      </h1>
      <div>
        {bookings.map((booking) => (
          <div
            key={booking.bookingId}
            className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6"
          >
            <div>
              <h1>{booking.bookingId}</h1>

              <Image
                height={100}
                width={100}
                src={booking.room.image}
                alt="room image"
              />

              <h2 className="text-2xl font-semibold mb-2">
                {booking.room.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {booking.room.description}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Check-In:</span>{" "}
                {booking.checkIn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
