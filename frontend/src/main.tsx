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
import ChangePassword from "./pages/ChangePassword/ChangePassword.tsx";
import Notification from "./pages/Notification/Notification.tsx";
import Candidatures from "./pages/Candidatures/Candidatures.tsx";
import PersonalInformation from "./pages/PersonalInformation/PersonalInformation.tsx";
import Formation from "./pages/Formation/Formation.tsx";
import ProfessionalExperience from "./pages/ProfessionalExperience/ProfessionalExperience.tsx";
import CoursesCertifications from "./pages/CoursesCertifications/CoursesCertifications.tsx";
import Language from "./pages/Language/Language.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/advertise-vacancy" element={<AdvertiseVacancy />} />
        <Route path="/description-vacancy" element={<DescriptionVacancy />} />
        <Route path="/company" element={<Company />} />
        <Route path="/user" element={<User />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/candidatures" element={<Candidatures />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/formation" element={<Formation />} />
        <Route
          path="/professional-experience"
          element={<ProfessionalExperience />}
        />
        <Route
          path="/courses-certifications"
          element={<CoursesCertifications />}
        />
        <Route path="/language" element={<Language />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
