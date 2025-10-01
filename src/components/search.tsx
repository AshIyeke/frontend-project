"use client"
import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
// import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function Search() {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    return (
    <div className=" md:flex space-y-4 mx-auto  gap-6 p-10  justify-center items-center text-center bg-white   shadow-lg rounded-lg  " >
        <div>
            <h1>Location</h1>
            <input className="border-2 p-1.5 w-60 rounded-lg  " aria-label="Location" type="text" placeholder="Location" />
        </div>
        <div>
            <h1>Guest and rooms</h1>
            <select className="border-2 p-1.5 rounded-lg w-60 " aria-label="Check-in" >
                    <option>2 Guests, 1 Room</option>
                    <option>1 Guest, 1 Room</option>
                    <option>3 Guests, 1 Room</option>
                    <option>4 Guests, 2 Rooms</option>
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
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0 " align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                    setDate(date)
                    setOpen(false)
                    }}
                />
                </PopoverContent>
            </Popover>

            
        </div>
        
            <Button className="bg-blue-300 p-5 cursor-pointer ">Search</Button>
        
    </div>
    );
}