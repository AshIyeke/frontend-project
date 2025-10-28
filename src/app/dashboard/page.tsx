"use client";
import { useBContext } from "@/components/bcontext";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Trash2 } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const { bookings, clearBookings, updatePaymentStatus, user} = useBContext();

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
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Welcome, {user}!
      </h2>
      <h1 className="text-3xl font-bold mb-8 flex gap-3">
        <LayoutDashboard className="w-8 h-8" />
        My Bookings
      </h1>
      <div className="space-y-6 ">
        {bookings.map((booking) => (
          <div
            key={booking.bookingId}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center md:items-start gap-4 "
          >
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                height={140}
                width={180}
                src={booking.room.image}
                alt={booking.room.name}
                className="rounded-md object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-center md:text-left">
              <div className="sm:col-span-2 lg:col-span-3">
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {booking.room.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Booking ID: {booking.bookingId}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Check-In:</span> {booking.checkIn}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Check-Out:</span>{" "}
                {booking.checkOut}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Guests:</span> {booking.guests}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Nights:</span> {booking.nights}
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white sm:col-span-2 lg:col-span-1">
                <span className="font-medium">Total:</span> $
                {booking.totalPrice.toFixed(2)}
              </p>
            </div>

            {/* Actions Section */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 mt-4 md:mt-0 md:ml-auto items-center md:items-end">
              <Button
                onClick={() => clearBookings(booking.bookingId)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => updatePaymentStatus(booking.bookingId)}
                  className={`px-4 py-2 rounded-lg text-white ${
                    booking.paid
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {booking.paid ? "Paid" : "Pending Payment"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
