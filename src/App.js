import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Portfolio from "./components/Portfolio";
import Calculator from "./components/Calculator";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import HowWork from "./components/HowWork";
import ServiceDetail from "./components/ServiceDetail.js";
import PrivacyPolicy from "./components/PrivacyPolicy.js";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={
            <>
            <Header />
              <About />
              <Advantages />
              <Services />
              <Calculator />
      
              <Portfolio />
              <HowWork/>
              <Contacts />
              
              
            </>
          } />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
