import { useState } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

// Mock data for careers and schedules
const careers = [
  { id: 1, name: "Ingeniería Informática" },
  { id: 2, name: "Administración de Empresas" },
  { id: 3, name: "Psicología" },
];

const mockSchedule = [
  {
    day: "Lunes",
    time: "08:00 - 10:00",
    course: "Programación I",
    room: "Lab 101",
  },
  {
    day: "Lunes",
    time: "10:00 - 12:00",
    course: "Matemáticas Discretas",
    room: "Aula 201",
  },
  {
    day: "Martes",
    time: "09:00 - 11:00",
    course: "Bases de Datos",
    room: "Lab 102",
  },
  {
    day: "Miércoles",
    time: "08:00 - 10:00",
    course: "Programación I",
    room: "Lab 101",
  },
  {
    day: "Jueves",
    time: "14:00 - 16:00",
    course: "Sistemas Operativos",
    room: "Aula 305",
  },
  {
    day: "Viernes",
    time: "10:00 - 12:00",
    course: "Redes de Computadoras",
    room: "Lab 103",
  },
];

export default function HorariosPage() {
  const [selectedCareer, setSelectedCareer] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Horarios</h1>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Selecciona tu Carrera</CardTitle>
          <CardDescription>
            Elige tu carrera para ver el horario correspondiente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select onValueChange={setSelectedCareer}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona una carrera" />
            </SelectTrigger>
            <SelectContent>
              {careers.map((career) => (
                <SelectItem key={career.id} value={career.name}>
                  {career.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedCareer && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">
                Horario para {selectedCareer}
              </h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Día</TableHead>
                    <TableHead>Hora</TableHead>
                    <TableHead>Curso</TableHead>
                    <TableHead>Aula</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSchedule.map((slot, index) => (
                    <TableRow key={index}>
                      <TableCell>{slot.day}</TableCell>
                      <TableCell>{slot.time}</TableCell>
                      <TableCell>{slot.course}</TableCell>
                      <TableCell>{slot.room}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
