import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/navigation/tab";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/layout/card";
import { Button } from "../components/navigation/button";
import { Input } from "../components/forms/input";
import { Label } from "../components/forms/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/forms/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/layout/table";

// Mock data
const workshops = [
  {
    id: 1,
    name: "Salsa Dancing",
    type: "Cultural",
    schedule: "Mondays and Wednesdays, 6-8 PM",
  },
  {
    id: 2,
    name: "Creative Writing",
    type: "Cultural",
    schedule: "Tuesdays, 5-7 PM",
  },
  { id: 3, name: "Basketball", type: "Sports", schedule: "Thursdays, 4-6 PM" },
  { id: 4, name: "Yoga", type: "Sports", schedule: "Fridays, 7-8 AM" },
  {
    id: 5,
    name: "Photography",
    type: "Cultural",
    schedule: "Saturdays, 10 AM - 12 PM",
  },
];

export default function Talleres() {
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleInscription = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the inscription data to your backend
    console.log("Workshop inscription:", {
      workshop: selectedWorkshop,
      name,
      email,
    });
    alert("Inscription submitted successfully!");
    // Reset form
    setSelectedWorkshop("");
    setName("");
    setEmail("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Non-Curricular Activities and Workshops
      </h1>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Workshops</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <WorkshopTable workshops={workshops} />
        </TabsContent>

        <TabsContent value="cultural">
          <WorkshopTable
            workshops={workshops.filter(
              (workshop) => workshop.type === "Cultural",
            )}
          />
        </TabsContent>

        <TabsContent value="sports">
          <WorkshopTable
            workshops={workshops.filter(
              (workshop) => workshop.type === "Sports",
            )}
          />
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Workshop Inscription</CardTitle>
          <CardDescription>Sign up for a workshop</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleInscription} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workshop">Select Workshop</Label>
              <Select
                onValueChange={setSelectedWorkshop}
                value={selectedWorkshop}
              >
                <SelectTrigger id="workshop">
                  <SelectValue placeholder="Select a workshop" />
                </SelectTrigger>
                <SelectContent>
                  {workshops.map((workshop) => (
                    <SelectItem
                      key={workshop.id}
                      value={workshop.id.toString()}
                    >
                      {workshop.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Submit Inscription</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function WorkshopTable({
  workshops,
}: {
  workshops: { id: number; name: string; type: string; schedule: string }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Workshop Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Schedule</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workshops.map((workshop) => (
          <TableRow key={workshop.id}>
            <TableCell>{workshop.name}</TableCell>
            <TableCell>{workshop.type}</TableCell>
            <TableCell>{workshop.schedule}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
