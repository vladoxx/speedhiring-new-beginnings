import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserTokenContextProvider } from "./context/UserTokenContext.tsx";
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
import Home from "./pages/Home/Home.tsx";
import GeneralLogin from "./pages/GeneralLogin/GeneralLogin.tsx";
import LoginUser from "./pages/LoginUser/LoginUser.tsx";
import LoginCompany from "./pages/LoginCompany/LoginCompany.tsx";
import { UserIdContextProvider } from "./context/UserIdContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserIdContextProvider>
        <UserTokenContextProvider>
          <Header />

          <Routes>
            <Route path="/:id?" element={<Home />} />
            <Route path="/advertise-vacancy" element={<AdvertiseVacancy />} />
            <Route path="/company" element={<Company />} />
            <Route path="/candidatures/:id" element={<Candidatures />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route
              path="/description-vacancy"
              element={<DescriptionVacancy />}
            />
            <Route path="/login-user" element={<LoginUser />} />
            <Route path="/login-company" element={<LoginCompany />} />
            <Route path="/general-login" element={<GeneralLogin />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/register-company" element={<RegisterCompany />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/vacancy" element={<Vacancy />} />
            <Route
              path="/personal-information"
              element={<PersonalInformation />}
            />
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
        </UserTokenContextProvider>
      </UserIdContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
