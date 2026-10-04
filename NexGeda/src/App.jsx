import react, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout Wrappers
import MainLayout from "./Layouts/MainLayout/MainLayout.jsx";
import AuthLayout from "./Layouts/AuthoLayout/AuthoLayout.jsx";
// Pages
import Home from "./Pages/Home/Home.jsx";
import SignIn from "./Pages/SignIn/Sign.jsx"; 
import ResetPassword from './Components/ResetForgate/ResetPassword.jsx';
import SignUp from './Components/Signup/SignUp.jsx';
import Scholarship from './Components/ScholarshipPage/Scholarship.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Scholarship" element={<Scholarship />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/ForgotePassword" element={<ResetPassword />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
