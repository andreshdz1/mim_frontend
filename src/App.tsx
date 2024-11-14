import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Foro from "./pages/Foro";
import Horarios from "./pages/Horarios";
import Salones from "./pages/Salones";
import Talleres from "./pages/Talleres";
import Calendar from "./pages/Calendar";
import Mural from "./pages/Mural";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/salones" element={<Salones />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/calendario" element={<Calendar />} />
        <Route path="/mural" element={<Mural />} />
      </Routes>
    </Router>
  );
}
