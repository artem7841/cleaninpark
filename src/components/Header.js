import React, { useState } from "react";
import logo from "../assets/logo.png";
import girlImage from "../assets/photo_back.png"; // твоя картинка с девушкой
import "../style/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__green-bg"></div>
      {/* Верхняя навигация */}
      <div className="header__top">
        <div className="header__logo">
          <img src={logo} alt="CleaninPark" className="header__logo-image" />
        </div>

        <div className="header__right-section">
          <span className="header__phone">+7 (000) 000-00-00</span>
          <button className="header__btn">Связаться</button>
        </div>

        {/* Бургер для мобилок */}
        <div className="header__burger" onClick={toggleMenu}>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="header__mobile-menu">
          <span className="header__phone">+7 (000) 000-00-00</span>
          <button className="header__btn">Связаться</button>
        </div>
      )}

      {/* Основной контент */}
      <div className="header__content">
        <div className="header__text-block">
          <h1 className="header__title">
            Доступные услуги клининга <br /> в Екатеринбурге
          </h1>
          <button className="header__btn header__btn-big">
            Рассчитать стоимость
          </button>
        </div>

        <div className="header__image-block">
          
          <img src={girlImage} alt="Уборка" className="header__image" />
        </div>
      </div>
      
    </header>
  );
};

export default Header;
