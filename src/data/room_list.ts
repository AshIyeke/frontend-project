export interface RoomData {
    id: number;
    name: string;
    location: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    badge: string;
    description: string;
    amenities: string[];
    beds: string;
    guests: number;
}
export const rooms: RoomData[] = [
        {
            id: 1,
            name: "The Mark Hotel",
            location: "New York",
            category: "Luxury Suite",
            price: 250,
            rating: 4.9,
            reviews: 100,
            image: "/pic1.jpeg",
            badge: "Best Seller",
            description: "Experience unparalleled luxury in our spacious suites, offering breathtaking city views and world-class service.",
            amenities: ["Free Wi-Fi", "King Bed", "Private Bathroom", "Flat-screen TV", "Minibar"],
            beds: "1 King Bed",
            guests: 2
        },
        {
            id: 2,
            name: "Central Park Residences", 
            location: "New York",
            category: "Luxury Suite",
            price: 180,
            rating: 4.8,
            reviews: 1100,
            image: "/pic2.jpg",
            badge: 'Value',
            description: "A comfortable and elegant stay awaits you, perfect for business or leisure travelers seeking value.",
            amenities: ["Free Wi-Fi", "Queen Bed", "Private Bathroom", "Coffee Maker"],
            beds: "1 Queen Bed",
            guests: 2
        },
        {
            id: 3,
            name: "Grand Palace",
            location: "Los Angeles",
            category: "Deluxe Room",
            price: 320,
            rating: 4.7,
            reviews: 950,
            image: "/pic3.jpg",
            badge: "Popular",
            description: "Indulge in the grandeur of the Grand Palace, featuring opulent decor and exceptional amenities.",
            amenities: ["Free Wi-Fi", "King Bed", "Jacuzzi", "Balcony", "Room Service"],
            beds: "1 King Bed",
            guests: 2
        },
        {
            id: 4,
            name: "Ocean View Inn",
            location: "Miami",
            category: "Standard Room",
            price: 280,
            rating: 4.6,
            reviews: 870,
            image: "/pic4.jpg",
            badge: "Sea View",
            description: "Wake up to stunning ocean views in our cozy standard rooms, just steps away from the beach.",
            amenities: ["Free Wi-Fi", "Queen Bed", "Ocean View", "Air Conditioning"],
            beds: "1 Queen Bed",
            guests: 2
        },
        {
            id: 5,
            name: "Mountain Retreat",
            location: "Denver",
            category: "Family Room",
            price: 210,
            rating: 4.5,
            reviews: 650,
            image: "/pic5.jpg",
            badge: "Family",
            description: "A serene escape in the mountains, ideal for families looking for adventure and relaxation.",
            amenities: ["Free Wi-Fi", "2 Queen Beds", "Mountain View", "Kitchenette", "Fireplace"],
            beds: "2 Queen Beds",
            guests: 4
        },
        {
            id: 6,
            name: "City Lights Hotel",
            location: "Chicago",
            category: "Luxury Suite",
            price: 400,
            rating: 4.9,
            reviews: 1200,
            image: "/pic6.jpg",
            badge: "Top Rated",
            description: "Experience the ultimate in luxury with our penthouse suite, offering panoramic city views.",
            amenities: ["Free Wi-Fi", "King Bed", "Private Pool", "Butler Service", "Panoramic View"],
            beds: "1 King Bed",
            guests: 2
        },
        {
            id: 7,
            name: "Sunset Resort",
            location: "San Diego",
            category: "Luxury Suite",
            price: 230,
            rating: 4.4,
            reviews: 540,
            image: "/pic7.jpg",
            badge: "Resort",
            description: "Enjoy a relaxing stay at our resort, complete with stunning sunset views and premium facilities.",
            amenities: ["Free Wi-Fi", "King Bed", "Spa Access", "Beach Access", "Restaurant"],
            beds: "1 King Bed",
            guests: 2
        },
        {
            id: 8,
            name: "Urban Stay",
            location: "Seattle",
            category: "Deluxe Room",
            price: 180,
            rating: 4.3,
            reviews: 430,
            image: "/pic8.jpg",
            badge: "Budget",
            description: "Affordable comfort in the heart of the city, perfect for urban explorers.",
            amenities: ["Free Wi-Fi", "Queen Bed", "City View", "Desk"],
            beds: "1 Queen Bed",
            guests: 2
        },
        {
            id: 9,
            name: "Royal Heritage",
            location: "Boston",
            category: "Business Room",
            price: 350,
            rating: 4.8,
            reviews: 980,
            image: "/pic9.jpg",
            badge: "Heritage",
            description: "Step back in time with a stay at our historic Royal Heritage hotel, blending classic charm with modern amenities.",
            amenities: ["Free Wi-Fi", "King Bed", "Historic Building", "Concierge Service"],
            beds: "1 King Bed",
            guests: 2
        },
        {
            id: 10,
            name: "Lakeview Hotel",
            location: "Minneapolis",
            category: "Family Room",
            price: 270,
            rating: 4.6,
            reviews: 720,
            image: "/pic8.jpg",
            badge: "Lake View",
            description: "Enjoy serene lake views from your room, a perfect retreat for nature lovers.",
            amenities: ["Free Wi-Fi", "2 Queen Beds", "Lake View", "Balcony"],
            beds: "2 Queen Beds",
            guests: 4
        },

    ];
