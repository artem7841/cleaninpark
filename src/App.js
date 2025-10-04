import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Portfolio from "./components/Portfolio";
import Calculator from "./components/Calculator";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Advantages />
      <Portfolio />
      <Calculator />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
