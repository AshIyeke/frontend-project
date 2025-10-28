"use client";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { RoomData, rooms } from "@/data/room_list";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [Location, setLocation] = useState("");
  const [guests, setGuests] = useState("");

  function handleLocation(e: any) {
    setLocation(e.target.value);
    console.log(Location);
  }
  function handleGuest(e: any) {
    setGuests(e.target.value);
    console.log(guests);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Location:", Location);
    console.log("Guests:", guests);
    console.log(
      "Check-In Date:",
      checkIn ? checkIn.toLocaleDateString() : "Not selected"
    );

    setLocation("");
    setGuests("");
    setCheckIn(undefined);
  }
  return (
    <div className=" md:flex flex-wrap space-y-4 mx-auto gap-6 p-8 my-9  justify-center items-center text-center rounded-lg  ">
      <div>
        <h1>Location</h1>
        <select
          onChange={(e) => handleLocation(e)}
          className="border-2 p-1.5 rounded-lg w-60 "
          aria-label="Location"
        >
          {rooms.map((room: RoomData) => (
            <option key={room.id} value={room.location}>
              {room.location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h1>Room Grade</h1>
        <select
          onChange={(e) => handleGuest(e)}
          className="border-2 p-1.5 rounded-lg w-60 "
          aria-label="Check-in"
        >
          {rooms.map((room: RoomData) => (
            <option key={room.id} value={room.category}>
              {room.category}
            </option>
          ))}
        </select>
      </div>
      <div className=" ">
        <h1>Check In</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-60 justify-between font-normal"
            >
              {checkIn ? checkIn.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0 " align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              captionLayout="dropdown"
              onSelect={(date) => {
                setCheckIn(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button
        onClick={(e) => handleSubmit(e)}
        className="bg-blue-300 mt-2 p-5 cursor-pointer "
      >
        Search
      </Button>
    </div>
  );
}
