import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EsportsPage from "./components/Esports/Esports"; 
import Business from "./components/Business/Business";
import './app.css';
import HomePage from "./components/HomePage/HomePage";

function App() {
  const formKey = process.env.REACT_APP_FORMSPREE_KEY;
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Esports" element={<EsportsPage />} />
          <Route path="/Business" element={<Business />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;