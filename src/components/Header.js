import React from "react";
import main from "../assets/main_image.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h1>Доступные услуги клининга <br></br> в Екатеринбурге</h1>
            <button className="btn">Рассчитать стоимость</button>
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
