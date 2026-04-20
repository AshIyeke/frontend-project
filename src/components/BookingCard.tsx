import { useContext } from "react";
import { BContext } from "./bcontext";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Check
} from "lucide-react";
import { RoomData } from "../data/room_list";

interface Props {
  room: RoomData;
}

export default function BookingCard({ room }: Props) {
  const {
    addBooking,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests,
    confirmBooking,
  } = useContext(BContext)!;

  const router = useRouter();

  const handleBookNow = () => {
    addBooking(room, checkIn, checkOut, guests);
    
    router.push("/dashboard");
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = outDate.getTime() - inDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const totalPrice = calculateNights() * room.price;
  return (
    <div className="lg:col-span-1 w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 sticky top-24 transition-all">
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-4xl font-bold text-gray-900">
            ${room.price}
          </span>
          <span className="text-gray-600">/ night</span>
        </div>

        {confirmBooking && (
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
              className="block text-sm font-medium text-gray-700 mb-2 "
            >
              <Calendar className="w-4 h-4 inline mr-1 text-black" />
              Check-in
            </label>
            <input
              id="check-in"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black "
            />
          </div>

          <div>
            <label
              htmlFor="check-out"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Calendar className="w-4 h-4 inline mr-1 text-black" />
              Check-out
            </label>
            <input
              id="check-out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            />
          </div>
          <div>
            <label
              htmlFor="check-out"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Calendar className="w-4 h-4 inline mr-1 text-black" />
              Guests
            </label>
            <input
              id="guests"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="Number of Guests"
              value={guests}
              type="number"
              onChange={(e) => setGuests(Number(e.target.value))}
            />
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
          onClick={handleBookNow}
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
