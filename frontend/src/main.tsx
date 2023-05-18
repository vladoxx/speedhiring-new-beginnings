import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Login from "./pages/Login/Login.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

import "./assets/styles/index.css";
import "normalize.css";
import Company from "./pages/Company/Company.tsx";
import User from "./pages/User/User.tsx";
import RegisterUser from "./pages/RegisterUser/RegisterUser.tsx";
import RegisterCompany from "./pages/RegisterCompany/RegisterCompany.tsx";
import AdvertiseVacancy from "./pages/AdvertiseVacancy/AdvertiseVacancy.tsx";
import Vacancy from "./pages/Vacancy/Vacancy.tsx";
import DescriptionVacancy from "./pages/DescriptionVacancy/DescriptionVacancy.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser/>} />
        <Route path="/register-company" element={<RegisterCompany/>} />
        <Route path="/advertiseVacancy" element={<AdvertiseVacancy/>} />
        <Route path="/descriptionVacancy" element={<DescriptionVacancy/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/vacancy" element={<Vacancy/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
