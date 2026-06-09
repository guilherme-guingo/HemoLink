import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Styleguide from "../pages/StyleGuide";
import { Catalogo } from "../pages/Catalogo";
import { Perfil } from "../pages/Perfil";
import { AdminDashboard } from "../pages/AdminDashboard";
import { HospitalDetail } from "../pages/AdminDashboard/HospitalDetail";
import { AddHospital, EditHospital } from "../pages/AdminDashboard/HospitalDetail/HospitalForm";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

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
          <Route path="adminDashboard/new" element={<AddHospital />} />
          <Route path="adminDashboard/:id/edit" element={<EditHospital />} />
          <Route path="adminDashboard/:id" element={<HospitalDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
