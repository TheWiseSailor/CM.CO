// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import RenderPages from "./components/RenderPages";
import EsportsPage from "./components/Esports/Esports"; 
import Business from "./components/Business/Business";
import './app.css'


function App() {
  const formKey = process.env.REACT_APP_FORMSPREE_KEY;
  return (
    <div className="app-container">
      <Router>
        <Header />
  
        <Routes>
        <Route path="/" element={<RenderPages />} /> 
        <Route path="/CM.CO" element={<RenderPages />} />

   

          <Route path="/Esports" element={<EsportsPage />} /> 
          <Route path="/Business" element={<Business />} /> 

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
