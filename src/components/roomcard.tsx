import Link from "next/link";
import Image from "next/image";

interface Room {
  id: number;
  name: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
}

interface Props {
  room: Room;
}

export default function RoomCard({ room }: Props) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <Link
        href={`/rooms/${room.id}`}
        className="relative h-64 overflow-hidden block"
      >
        <Image 
          src={room.image} 
          alt={room.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {room.badge}
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {room.name}
          </h2>
          <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-lg">
            <span className="text-blue-700 dark:text-blue-400 font-bold text-sm">
              {room.rating} ★
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
          {room.location} &middot; {room.category}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">${room.price}</span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          
          <Link
            href={`/rooms/${room.id}`}
            className="block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 text-center shadow-md hover:shadow-lg active:scale-95 transform"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
