import React from "react";
import main from "../assets/main_image.png";
import logo from "../assets/logo1.png";

const Header = () => {
  // Функция для плавной прокрутки к разделу
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="top-bar">
          <div className="top-bar-left">
            <img src={logo} className="logo" alt="logo"/>
          </div>
          <div className="top-bar-right">
            <p>+7 (982) 716-62-07</p>
            <button onClick={() => scrollToSection('contact')}>Связаться</button>
          </div>
        </div>
        <div className="header-content">
          <div className="header-text">
            <h1 style={{ fontSize: '38px' }}>Профессиональная уборка квартир, домов, офисов в Екатеринбурге. <br></br> Качественно, быстро, экологично.</h1>
            <button 
              className="btn" 
              onClick={() => scrollToSection('calculator')}
            >
              Рассчитать стоимость
            </button>
          </div>
          <div className="header-image">
            <img src={main} alt="cleaning" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;