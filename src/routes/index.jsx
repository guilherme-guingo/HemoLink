import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Styleguide from "../pages/StyleGuide";
import { Catalogo } from "../pages/Catalogo";
import { Perfil } from "../pages/Perfil";
import { AdminDashboard } from "../pages/AdminDashboard";
import { Hospital } from "../pages/Hospital";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="styleguide" element={<Styleguide />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="hospital/:id" element={<Hospital />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
