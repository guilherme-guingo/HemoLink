import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Styleguide from "../pages/StyleGuide";
import { Catalogo } from "../pages/Catalogo";
import { Perfil } from "../pages/Perfil";
import { AdminDashboard } from "../pages/AdminDashboard";
import { SolicitarDoacao } from "../pages/SolicitarDoacao";
import { Doar } from "../pages/Doar";
import { HospitalDetail } from "../pages/AdminDashboard/HospitalDetail";
import {
  AddHospital,
  EditHospital,
} from "../pages/AdminDashboard/HospitalDetail/HospitalForm";
import { Hospital } from "../pages/Hospital";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { PageNotFound } from "../pages/NotFound";
import { RotaPrivada, RotaAdmin } from "./RotasPrivadas";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="styleguide" element={<Styleguide />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="solicitar" element={<SolicitarDoacao />} />
          <Route path="doar" element={<Doar />} />
          <Route path="hospital/:id" element={<Hospital />} />

          <Route element={<RotaPrivada />}>
            <Route path="perfil" element={<Perfil />} />
          </Route>

          <Route element={<RotaAdmin />}>
            <Route path="adminDashboard" element={<AdminDashboard />} />
            <Route path="adminDashboard/new" element={<AddHospital />} />
            <Route path="adminDashboard/:id/edit" element={<EditHospital />} />
            <Route path="adminDashboard/:id" element={<HospitalDetail />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}