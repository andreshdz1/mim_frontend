import { Link } from "react-router-dom";
import { MessageSquare, Clock, School, Hammer, Cog } from "lucide-react";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100 m-1 p-2 items-center justify-between">
      <header className="bg-blue-200 text-white p-1 w-full flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-8xl font-thin mt-2">MIM </h1>
          <h2 className="text-3xl font-arial-narrow">
            {" "}
            Módulo de Información Marista{" "}
          </h2>
        </div>
        <img src="/public/MIM_2.png" alt="Logo MIM" className="h-40 " />
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-arial-narrow mb-4">
            Mapa interactivo UMG
          </h2>
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="University Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 text-lg font-medium">
                Interactive Map Placeholder
              </span>
            </div>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Link
            to="/foro"
            className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:bg-blue-200 transition-colors"
          >
            <MessageSquare className="w-7 h-7 mr-1 text-blue-800" />
            <span className="font-arial-narrow text-2xl">Foro</span>
          </Link>
          <Link
            to="/horarios"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <Clock className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-arial-narrow text-2xl">Horarios</span>
          </Link>
          <Link
            to="/salones"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <School className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-arial-narrow text-2xl">Salones</span>
          </Link>
          <Link
            to="/talleres"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <Hammer className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-arial-narrow text-2xl">Talleres</span>
          </Link>
        </nav>
      </main>
    </div>
  );
}
