"use client"
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { RoomData } from "@/data/room_list";

interface Booking {
  bookingId: string;
  user: string;
  room: RoomData;
  guests: number;
  nights: number;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  confirmBooking: boolean;
  paid: boolean;
}

interface BContextType {
  bookings: Booking[];
  addBooking: (
    room: RoomData,
    checkIn: string,
    checkOut: string,
    guests: number
  ) => void;
  clearBookings: (bookingId?: string) => void; // Make bookingId optional for clearing all
  checkIn: string;
  setCheckIn: React.Dispatch<React.SetStateAction<string>>;
  checkOut: string;
  setCheckOut: React.Dispatch<React.SetStateAction<string>>;
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  confirmBooking: boolean;
  setConfirmBooking: React.Dispatch<React.SetStateAction<boolean>>;
  paid: boolean;
  setPaid: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BContext = createContext<BContextType | undefined>(undefined);

export const BProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>(
    //   Initialize from localStorage
    () => {
      if (typeof window === "undefined") {
        return [];
      }
      try {
        const stored = localStorage.getItem("bookings");
        return stored ? JSON.parse(stored) : [];
      } catch (error) {
        console.error("Failed to parse bookings from localStorage", error);
        return [];
      }
    }
  );

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(0);
  const [confirmBooking, setConfirmBooking] = useState(false);
  const [paid, setPaid] = useState(false);

  // Save bookings to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("bookings", JSON.stringify(bookings));
    } catch (error) {
      console.error("Failed to save bookings to localStorage", error);
    }
  }, [bookings]);

  const addBooking = (
    room: RoomData,
    checkIn: string,
    checkOut: string,
    guests: number
  ) => {
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const validNights = nights > 0 ? nights : 0;
    const bookingTotalPrice = validNights * room.price;

    const newBooking: Booking = {
      bookingId: Math.random().toString(36).substring(2, 9),
      user: "John Doe", // Replace with actual user
      room: room,
      guests: guests,
      checkIn: checkIn,
      checkOut: checkOut,
      nights: validNights,
      totalPrice: bookingTotalPrice,
      confirmBooking: confirmBooking,
      paid: paid,
    };

    setBookings((prev) => [...prev, newBooking]);
    setConfirmBooking(true);
    setTimeout(() => setConfirmBooking(false), 3000);
    console.log("Booking added:", newBooking);
  };

  const clearBookings = (bookingId?: string) => {
    if (bookingId) {
      setBookings((prev) =>
        prev.filter((booking) => booking.bookingId !== bookingId)
      );
    } else {
      setBookings([]); // If no ID is provided, clear all bookings
    }
  };

  return (
    <BContext.Provider
      value={{
        bookings,
        addBooking,
        clearBookings,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        guests,
        setGuests,
        confirmBooking,
        setConfirmBooking,
        paid,
        setPaid,
        
      }}
    >
      {children}
    </BContext.Provider>
  );
};

export const useBContext = () => {
  const context = useContext(BContext);
  if (context === undefined) {
    throw new Error("useBContext must be used within a BProvider");
  }
  return context;
};
