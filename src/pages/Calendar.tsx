import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaCalendarDay } from "react-icons/fa6";

export default function CalendarPage() {
  const [semester, setSemester] = useState("2024-A"); //almacenar el semesgtre selecionado
  const navigate = useNavigate(); // Hook para hacer navegacion

  const returnToMainPage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-arial-narrow text-5xl text-center mb-6 flex items-center justify-center text-blue-900 ">
        <FaCalendarDay className="ml-2 text-5xl relative right-5" />

        <span className="mr-2">Calendario Ciclo Escolar 2024-2025</span>
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setSemester("2024-A")}
          className={`p-2 px-6 rounded-lg mr-4 ${semester === "2024-A" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          2024-A
        </button>
        <button
          onClick={() => setSemester("2024-B")}
          className={`p-2 px-6 rounded-lg ${semester === "2024-B" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          2024-B
        </button>
      </div>
      <div className="text-center mb-6">
        <p>
          Semestre Seleccionado: <strong>{semester}</strong>
        </p>
      </div>
      <div className="absolute top-5 left-20 bottom-0 flex items-center ">
        <button
          onClick={returnToMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 transition"
        >
          <IoIosArrowBack className="text-xl" />
        </button>
      </div>
    </div>
  );
}
