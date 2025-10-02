"use client"
import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
// import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { setgid } from "process"

export default function Search() {
    const [open, setOpen] = useState(false)
    const [checkIn, setCheckIn] = useState<Date | undefined>(undefined)
    const[Location,setLocation]=useState('')
    const[guests,setGuests]=useState('')
    return (
    <div className=" md:flex space-y-4 mx-auto gap-6 p-8 my-9  justify-center items-center text-center rounded-lg  " >
        <div>
            <h1>Location</h1>
            <input className="border-2 p-1.5 w-60 rounded-lg"  aria-label="Location" type="text" placeholder="Location" />
        </div>
        <div>
            <h1>Guest and rooms</h1>
            <select    className="border-2 p-1.5 rounded-lg w-60 " aria-label="Check-in" >
                    <option value={1}>1 Guests</option>
                    <option value={2} >2 Guest</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
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
                    setCheckIn(date)
                    setOpen(false)
                    }}
                />
                </PopoverContent>
            </Popover>

            
        </div>
        
            <Button className="bg-blue-300 mt-2 p-5 cursor-pointer ">Search</Button>
        
    </div>
    );
}