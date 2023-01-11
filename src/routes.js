//importa o react
import React from "react";

// para realizar a navegacao entre as rotas
import { Routes, Route } from "react-router-dom";

// importa a pagina
import Dashboard from "./pages/Dashboard";

export const Paths = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};
