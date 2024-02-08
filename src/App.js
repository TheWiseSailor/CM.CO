// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RenderPages from "./components/RenderPages"; 
import ContactFormPage from "./components/Contact/Contact"; // Corrected import path

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RenderPages />} /> 
          <Route path="/JE.CO" element={<RenderPages />} /> 
          <Route path="/contact" element={<ContactFormPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
