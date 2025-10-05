import React from "react";
import tg from "../assets/tg_icon.png";
import whatsapp from "../assets/whatsapp_icon.png";
import "../style/Footer.css";
import { Omega } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container3">
      <div className="footer-container">
        {/* Левая часть */}
        <div className="footer-left">
          <h3 className="footer-logo">CleaninPark</h3>
          <div className="footer-socials">
            <a href="#" className="social" aria-label="WhatsApp">
              <img className="icon" src={whatsapp}/>
            </a>
            <a href="#" className="social" aria-label="Telegram">
              <img className="icon" src={tg}/>
            </a>
          </div>
        </div>

        {/* Правая часть */}
        <div className="footer-right">
          <a href="mailto:info@domain.ru" className="footer-mail">
            info@domain.ru
          </a>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="footer-bottom">
        <p>© CleaninPark, 2025</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
