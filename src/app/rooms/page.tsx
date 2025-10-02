"use client";
import RoomCard from "@/components/Roomcard";
import { rooms } from "@/components/room_list";
import { useState, useEffect } from "react";

export default function Rooms() {
  // State to keep track of selected filter categories
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  // State to keep track of the rooms to display after filtering
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  // List of available room categories for filtering
  const categories = [
    "Standard Room",
    "Deluxe Room",
    "Family Room",
    "Business Room",
    "Luxury Suite",
  ];

  // useEffect runs whenever selectedFilters changes.
  // It updates filteredRooms based on the selected filters.
  useEffect(() => {
    if (selectedFilters.length === 0) {
      // If no filters are selected, show all rooms
      setFilteredRooms(rooms);
    } else {
      // Otherwise, filter rooms by selected categories
      setFilteredRooms(
        rooms.filter((room) => selectedFilters.includes(room.category))
      );
    }
  }, [selectedFilters]);

  // Handles filter button clicks.
  // Adds or removes a category from selectedFilters.
  function handleFilter(category: string) {
    setSelectedFilters(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove if already selected
          : [...prev, category] // Add if not selected
    );
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen py-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            // Highlight button if selected
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              selectedFilters.includes(category)
                ? "bg-blue-400 text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Room Cards Grid */}
      <div>
        <div className="container mx-auto grid grid-cols-1 p-8 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((room) => (
            // Render a RoomCard for each filtered room
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}
