import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/forms/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/layout/card";
import { LuFileClock } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";

export default function HorariosPage() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const navigate = useNavigate();

  const categories = [
    { id: "ingenierias", name: "Ingenierías" },
    { id: "licenciaturas", name: "Licenciaturas" },
  ];

  const careers = {
    ingenierias: [
      { id: 1, name: "Aeroespacial", semesters: 10 },
      { id: 2, name: "Automotriz", semesters: 9 },
      { id: 3, name: "Cibernética", semesters: 10 },
      { id: 4, name: "Inteligencia Artificial (IA)", semesters: 9 },
      { id: 5, name: "Industrial", semesters: 9 },
    ],
    licenciaturas: [
      { id: 1, name: "Animación Digital", semesters: 9 },
      { id: 2, name: "Arquitectura", semesters: 9 },
      { id: 3, name: "Comercio", semesters: 9 },
      { id: 4, name: "Derecho", semesters: 10 },
      { id: 5, name: "Educación", semesters: 9 },
      { id: 6, name: "Mercadotecnia", semesters: 9 },
      { id: 7, name: "Nutrición y Gastronomía", semesters: 10 },
    ],
  };

  const returnToMainPage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Header */}
      <header className="bg-blue-200 text-white p-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo de MIM */}
          <img src="/public/MIM_2.png" alt="Logo MIM" className="h-20 w-20" />
          <h1 className="text-5xl mt-2 font-thin">MIM</h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-80 text-black shadow-lg"
          />
          <button className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-600 transition">
            <FcSearch className="text-3xl" />
          </button>
        </div>

        {/* Botón de navegación a la página principal */}
        <button
          onClick={returnToMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 shadow-lg transition"
        >
          <IoHome className="text-xl" />
        </button>
      </header>

      {/* Encabezado de Horarios */}
      <h1 className="text-3xl font-arial-narrow text-5xl text-center mb-6 flex items-center justify-center text-blue-900 relative top-3">
        <span className="mr-2">Foro Universitario</span>
        <LuFileClock className="ml-2 text-5xl" />
      </h1>

      {/* Botón para regresar a la página principal */}
      <div className="absolute top-5 left-20 bottom-0 flex items-center">
        <button
          onClick={returnToMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 transition"
        >
          <IoHome className="text-xl" />
        </button>
      </div>

      {/* Card para seleccionar categoría */}
      <Card className="max-w-4xl mx-auto mb-6">
        <CardHeader>
          <CardTitle className="font-arial-narrow">
            Selecciona la categoría
          </CardTitle>
          <MdCategory className="ml-2 text-3xl relative right-5 text-blue-400" />
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona una categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Card para seleccionar carrera */}
      <Card className="max-w-4xl mx-auto mb-6">
        <CardHeader>
          <CardTitle className="font-arial-narrow">
            Selecciona tu carrera
          </CardTitle>
          <AiOutlineSchedule className="ml-2 text-3xl relative right-5 text-blue-400" />
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona una carrera" />
            </SelectTrigger>
            <SelectContent>
              {careers.ingenierias.map((career) => (
                <SelectItem key={career.id} value={career.name}>
                  {career.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Card para seleccionar semestre */}
      <Card className="max-w-4xl mx-auto mb-6">
        <CardHeader>
          <CardTitle>Selecciona tu semestre</CardTitle>
          <FaGraduationCap className="ml-2 text-3xl relative left-2 text-blue-400" />
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona el semestre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Semestre 1</SelectItem>
              <SelectItem value="2">Semestre 2</SelectItem>
              <SelectItem value="3">Semestre 3</SelectItem>
              <SelectItem value="4">Semestre 4</SelectItem>
              <SelectItem value="5">Semestre 5</SelectItem>
              <SelectItem value="6">Semestre 6</SelectItem>
              <SelectItem value="7">Semestre 7</SelectItem>
              <SelectItem value="8">Semestre 8</SelectItem>
              <SelectItem value="9">Semestre 9</SelectItem>
              <SelectItem value="10">Semestre 10</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Mostrar las opciones seleccionadas (este es un área donde puedes personalizar aún más) */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">
          {/* Aquí iría el resumen de la categoría, carrera y semestre seleccionados */}
        </h2>
      </div>
    </div>
  );
}
