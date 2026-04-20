"use client";
import React, { useState, useMemo } from "react";
import { ChevronDownIcon, MapPin, Hotel, Calendar as CalendarIcon, Search as SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { rooms } from "../data/room_list";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  // Get unique locations and categories
  const locations = useMemo(() => Array.from(new Set(rooms.map(r => r.location))), []);
  const categories = useMemo(() => Array.from(new Set(rooms.map(r => r.category))), []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (category) params.set("category", category);
    if (checkIn) params.set("checkIn", format(checkIn, "yyyy-MM-dd"));

    router.push(`/rooms?${params.toString()}`);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
      <form 
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
      >
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2.5 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="">Any Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Hotel className="w-4 h-4 text-blue-600" />
            Room Grade
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2.5 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="">Any Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-blue-600" />
            Check In
          </label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between font-normal bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 h-[46px] rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {checkIn ? format(checkIn, "PPP") : "Select date"}
                <ChevronDownIcon className="w-4 h-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  setCheckIn(date);
                  setOpen(false);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button
          type="submit"
          className="w-full h-[46px] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2"
        >
          <SearchIcon className="w-5 h-5" />
          Search
        </Button>
      </form>
    </div>
  );
}
