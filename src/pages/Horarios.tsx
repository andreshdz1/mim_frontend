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
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LuFileClock } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";

export default function HorariosPage() {
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
  const returnMainPage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-arial-narrow text-5xl text-center mb-6 flex items-center justify-center text-blue-900 ">
        <LuFileClock className="ml-2 text-5xl relative right-5" />

        <span className="mr-2">Horarios</span>
      </h1>
      <div className="absolute top-5 left-20 bottom-0 flex items-center ">
        <button
          onClick={returnMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 transition"
        >
          <IoIosArrowBack className="text-xl" />
        </button>
      </div>
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
              <SelectItem value="Aeroespacial">Aeroespacial</SelectItem>
              <SelectItem value="Automotriz">Automotriz</SelectItem>
              <SelectItem value="Cibernética">Cibernética</SelectItem>
              <SelectItem value="Inteligencia Artificial (IA)">
                Inteligencia Artificial (IA)
              </SelectItem>
              <SelectItem value="Industrial">Industrial</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="max-w-4xl mx-auto mb-6">
        <CardHeader>
          <CardTitle>Selecciona tu semestre</CardTitle>
        </CardHeader>
        <FaGraduationCap className="ml-2 text-3xl relative left-2 text-blue-400" />

        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona el semestre" />
            </SelectTrigger>
            <SelectContent>
              {/* Esto debería ser dinámico según la carrera seleccionada */}
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

      {/* Mostrar las opciones seleccionadas */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold"></h2>
      </div>
    </div>
  );
}
