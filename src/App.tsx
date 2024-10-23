import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Foro from "./pages/Foro";
import Horarios from "./pages/Horarios";
import Salones from "./pages/Salones";
import Talleres from "./pages/Talleres";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Foro" element={<Foro />} />
        <Route path="/Horarios" element={<Horarios />} />
        <Route path="/Salones" element={<Salones />} />
        <Route path="/Talleres" element={<Talleres />} />
      </Routes>
    </Router>
  );
}
