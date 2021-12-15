import { Route, Routes } from "react-router-dom";
import "./styles.css";

import Dashboard from "./Pages/Dashboard";
import Metrics from "./Pages/Metrics";
import Login from "./Components/Main/Login";
import Partners from "./Pages/Partners";

export default function App() {
  return (
    <section className="App">
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="metrics" element={<Metrics />} />
        <Route path="partners" element={<Partners />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </section>
  );
}
