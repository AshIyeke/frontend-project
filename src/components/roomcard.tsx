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

export default function RoomCard({room}:Props){
    return(
        <div className="p-8 w-full  space-y-5  ">

                        <img src={room.image} alt={room.name} className="w-full h-60  rounded-2xl object-cover" />

                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-bold">{room.name}</h2>
                            <span className="bg-blue-400  text-black dark:text-white text-xs px-2 py-1 rounded">{room.badge}</span>
                        </div>
                        <p className="text-sm text-gray-600">{room.location} &middot; {room.category}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-black dark:text-white font-semibold mr-2">{room.rating} ★</span>
                            <span className="text-xs text-gray-500">({room.reviews} reviews)</span>
                        </div>
            <div className="mt-4 font-bold text-xl">
                ${room.price}/night
            </div>
        </div>
    )
}