"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  Wifi,
  Coffee,
  Tv,
  Wind,
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
} from "lucide-react";
import { RoomData } from "@/data/room_list";

interface Props {
  room: RoomData;
}

export default function BookingCard({ room }: Props) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);

  const handleBooking = () => {
    if (checkIn && checkOut) {
      setShowBookingConfirm(true);
      setTimeout(() => setShowBookingConfirm(false), 3000);
    }
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn).getTime();
      const end = new Date(checkOut).getTime();
      const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const totalPrice = calculateNights() * room.price;
  return (
    <div className="lg:col-span-1 w-100  mx-auto">
      <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-4xl font-bold text-gray-900">
            ${room.price}
          </span>
          <span className="text-gray-600">/ night</span>
        </div>

        {showBookingConfirm && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-800 text-sm">
              Booking request sent!
            </span>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div>
            <label
              htmlFor="check-in"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Calendar className="w-4 h-4 inline mr-1" />
              Check-in
            </label>
            <input
              id="check-in"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="check-out"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Calendar className="w-4 h-4 inline mr-1" />
              Check-out
            </label>
            <input
              id="check-out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Users className="w-4 h-4 inline mr-1" />
              Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {[1, 2, 3].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {calculateNights() > 0 && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                ${room.price} x {calculateNights()} nights
              </span>
              <span className="text-gray-900 font-semibold">${totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Service fee</span>
              <span className="text-gray-900 font-semibold">$29</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-gray-900">
                  ${totalPrice + 29}
                </span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Book Now
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Free cancellation up to 48 hours before check-in
        </p>
      </div>
    </div>
  );
}
