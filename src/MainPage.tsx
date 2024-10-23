import { Link } from "react-router-dom";
import { MessageSquare, Clock, School, Hammer, Cog } from "lucide-react";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Modulo de Informacion Marista</h1>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Mapa interactivo</h2>
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
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
            <span className="font-medium">Foro</span>
          </Link>
          <Link
            to="/horarios"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <Clock className="w-6 h-6 mr-2 text-blue-600" />
            <span className="font-medium">Horarios</span>
          </Link>
          <Link
            to="/salones"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <School className="w-6 h-6 mr-2 text-blue-600" />
            <span className="font-medium">Salones</span>
          </Link>
          <Link
            to="/talleres"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <Hammer className="w-6 h-6 mr-2 text-blue-600" />
            <span className="font-medium">Talleres</span>
          </Link>
        </nav>
      </main>
    </div>
  );
}
