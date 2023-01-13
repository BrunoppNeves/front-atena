//importa o react
import React from "react";

// para realizar a navegacao entre as rotas
import { Routes, Route } from "react-router-dom";

// importa a pagina
import Dashboard from "./pages/Dashboard";
import Colaboradores from "./pages/Colaboradores";

export const Paths = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Colaboradores" element={<Colaboradores />} />
    </Routes>
  );
};
