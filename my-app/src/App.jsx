import React, { useState } from "react";
// import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";


function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
         <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<Navigate to="/home" />}
        />
      </Routes>
    </Router>
  );
}
export default App;