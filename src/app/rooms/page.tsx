"use client";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/room_list";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function RoomsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialLocation = searchParams.get("location");

  // State to keep track of selected filter categories
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
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

  // useEffect runs whenever selectedFilters, initialLocation changes.
  // It updates filteredRooms based on the selected filters and initial search.
  useEffect(() => {
    let result = rooms;

    // Filter by location if provided in URL
    if (initialLocation) {
      result = result.filter(
        (room) => room.location.toLowerCase() === initialLocation.toLowerCase()
      );
    }

    // Filter by categories if any selected
    if (selectedFilters.length > 0) {
      result = result.filter((room) => selectedFilters.includes(room.category));
    }

    setFilteredRooms(result);
  }, [selectedFilters, initialLocation]);

  // Handles filter button clicks.
  function handleFilter(category: string) {
    setSelectedFilters(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove if already selected
          : [...prev, category] // Add if not selected
    );
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Search Info */}
      {(initialLocation || selectedFilters.length > 0) && (
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-xl font-medium text-gray-600 dark:text-gray-400">
            Showing results {initialLocation && <span>in <span className="text-blue-600 font-bold">{initialLocation}</span></span>}
            {selectedFilters.length > 0 && <span> for <span className="text-blue-600 font-bold">{selectedFilters.join(", ")}</span></span>}
          </h2>
        </div>
      )}

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedFilters.includes(category)
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
        {(selectedFilters.length > 0 || initialLocation) && (
          <button
            onClick={() => {
              setSelectedFilters([]);
              window.history.replaceState({}, '', '/rooms');
            }}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Room Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        {filteredRooms.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
              No rooms found matching your criteria.
            </h3>
            <button
              onClick={() => {
                setSelectedFilters([]);
                window.history.replaceState({}, '', '/rooms');
              }}
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Show all rooms
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Rooms() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading rooms...</div>}>
      <RoomsContent />
    </Suspense>
  );
}
