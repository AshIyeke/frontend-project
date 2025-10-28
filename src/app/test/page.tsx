// Perfect 👌 — you want two upgrades:
// 	1.	Persist bookings with localStorage (so they don’t vanish on refresh).
// 	2.	Support multiple bookings — meaning if you book another room, it gets added (appended) to your Booking Dashboard list instead of overwriting the previous one.

// Let’s set this up cleanly using React + Next.js + TypeScript.

// ⸻

// 🧩 Step 1: Enhanced Booking Context

// 📄 src/context/BookingContext.tsx

// "use client";

// import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// interface Room {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
// }

// interface Booking {
//   bookingId: string;
//   date: string;
//   user: string;
//   room: Room;
// }

// interface BookingContextType {
//   bookings: Booking[];
//   addBooking: (room: Room) => void;
//   clearBookings: () => void;
// }

// const BookingContext = createContext<BookingContextType | undefined>(undefined);

// export const BookingProvider = ({ children }: { children: ReactNode }) => {
//   const [bookings, setBookings] = useState<Booking[]>([]);

//   // Load bookings from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem("bookings");
//     if (stored) {
//       setBookings(JSON.parse(stored));
//     }
//   }, []);

//   // Save bookings to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("bookings", JSON.stringify(bookings));
//   }, [bookings]);

//   const addBooking = (room: Room) => {
//     const newBooking: Booking = {
//       bookingId: Math.random().toString(36).substring(2, 9),
//       date: new Date().toISOString(),
//       user: "John Doe", // Replace with actual user
//       room,
//     };

//     setBookings((prev) => [...prev, newBooking]);
//   };

//   const clearBookings = () => {
//     setBookings([]);
//     localStorage.removeItem("bookings");
//   };

//   return (
//     <BookingContext.Provider value={{ bookings, addBooking, clearBookings }}>
//       {children}
//     </BookingContext.Provider>
//   );
// };

// export const useBooking = () => {
//   const context = useContext(BookingContext);
//   if (!context) throw new Error("useBooking must be used within a BookingProvider");
//   return context;
// };



// ⸻

// 🧩 Step 2: Wrap Your App in the Provider

// 📄 src/app/layout.tsx

// import { BookingProvider } from "../context/BookingContext";
// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <BookingProvider>{children}</BookingProvider>
//       </body>
//     </html>
//   );
// }



// ⸻

// 🧩 Step 3: Room Page (where you click “Book Now”)

// 📄 src/app/rooms/[id]/page.tsx

// "use client";

// import { useRouter } from "next/navigation";
// import { useBooking } from "../../../context/BookingContext";

// export default function RoomPage({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const { addBooking } = useBooking();

//   const room = {
//     id: params.id,
//     name: Room ${params.id},
//     price: 200 + Math.floor(Math.random() * 100),
//     description: "A comfortable and spacious suite with great amenities.",
//   };

//   const handleBookNow = () => {
//     addBooking(room);
//     router.push("/booking-dashboard");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-2">{room.name}</h1>
//       <p className="text-gray-600 mb-4">{room.description}</p>
//       <p className="text-lg font-semibold">${room.price} / night</p>

//       <button
//         onClick={handleBookNow}
//         className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// }



// ⸻

// 🧩 Step 4: Booking Dashboard (shows all bookings)

// 📄 src/app/booking-dashboard/page.tsx

// "use client";

// import { useBooking } from "../../context/BookingContext";

// export default function BookingDashboard() {
//   const { bookings, clearBookings } = useBooking();

//   if (bookings.length === 0) {
//     return <p className="p-6 text-gray-600">No bookings yet. Go book a room!</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Booking Dashboard</h1>

//       <button
//         onClick={clearBookings}
//         className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//       >
//         Clear All Bookings
//       </button>

//       <div className="space-y-4">
//         {bookings.map((booking) => (
//           <div
//             key={booking.bookingId}
//             className="bg-white shadow p-4 rounded border border-gray-200"
//           >
//             <h2 className="text-2xl font-semibold mb-2">{booking.room.name}</h2>
//             <p><strong>Price:</strong> ${booking.room.price}</p>
//             <p><strong>Description:</strong> {booking.room.description}</p>
//             <p><strong>Booking ID:</strong> {booking.bookingId}</p>
//             <p><strong>Date:</strong> {new Date(booking.date).toLocaleString()}</p>
//             <p><strong>User:</strong> {booking.user}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// ⸻

// 🧭 How It Works
// 	•	Each time you click “Book Now”, it calls addBooking(room) → adds a new booking to context and localStorage.
// 	•	The BookingDashboard reads all stored bookings and lists them.
// 	•	Data persists after reload thanks to localStorage.
// 	•	You can also clear all bookings via a button.

// ⸻

// 🧠 Bonus Ideas

// You can easily extend this to:
// 	•	Filter bookings by user
// 	•	Add booking dates, guests, or payment info
// 	•	Sync bookings with a backend API

// ⸻

// Would you like me to add date pickers and a guest count to the booking flow next (so the dashboard shows richer booking info)?