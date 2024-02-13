// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RenderPages from "./components/RenderPages"; 
import ContactFormPage from "./components/Contact/Contact"; 
import EsportsPage from "./components/Esports/Esports"; 
import Business from "./components/Business/Business";
import './app.css'
function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
  
        <Routes>
          <Route path="/" element={<RenderPages />} /> 
          <Route path="/JE.CO" element={<RenderPages />} /> 
          <Route path="/contact" element={<ContactFormPage />} /> 
          <Route path="/Esports" element={<EsportsPage />} /> 
          <Route path="/Business" element={<Business />} /> 

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
