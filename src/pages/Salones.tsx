import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tab";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Calendar } from "../components/ui/calendar";

// Mock data
const rooms = [
  { id: 1, name: "Room 101", type: "Degree", capacity: 30 },
  { id: 2, name: "Room 102", type: "Degree", capacity: 25 },
  { id: 3, name: "English Lab", type: "Language", capacity: 20 },
  { id: 4, name: "French Lab", type: "Language", capacity: 15 },
  { id: 5, name: "German Lab", type: "Language", capacity: 15 },
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [reservationDate, setReservationDate] = useState(new Date());

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    console.log("Room reserved:", selectedRoom, "for date:", reservationDate);
    alert("Room reserved successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Room Management</h1>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Rooms</TabsTrigger>
          <TabsTrigger value="degree">Degree Rooms</TabsTrigger>
          <TabsTrigger value="language">Language Rooms</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <RoomTable rooms={rooms} />
        </TabsContent>

        <TabsContent value="degree">
          <RoomTable rooms={rooms.filter((room) => room.type === "Degree")} />
        </TabsContent>

        <TabsContent value="language">
          <RoomTable rooms={rooms.filter((room) => room.type === "Language")} />
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Reserve a Room</CardTitle>
          <CardDescription>
            Select a room and date to make a reservation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReservation} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="room">Select Room</Label>
              <Select onValueChange={(value) => setSelectedRoom(value)}>
                <SelectTrigger id="room">
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map((room) => (
                    <SelectItem key={room.id} value={room.id.toString()}>
                      {room.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Calendar
                mode="single"
                required={true}
                selected={reservationDate}
                onSelect={(date: Date) => setReservationDate(date)}
                className="rounded-md border"
              />
            </div>
            <Button type="submit">Reserve Room</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function RoomTable({
  rooms,
}: {
  rooms: { id: number; name: string; type: string; capacity: number }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Room Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Capacity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rooms.map((room) => (
          <TableRow key={room.id}>
            <TableCell>{room.name}</TableCell>
            <TableCell>{room.type}</TableCell>
            <TableCell>{room.capacity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
