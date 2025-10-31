import React from "react";
import tg from "../assets/tg_icon.png";
import whatsapp from "../assets/whatsapp_icon.png";
import "../style/Footer.css";
import { Omega } from "lucide-react";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container3">
  <div className="footer-container">
    {/* Левая часть */}
    <div className="footer-left">
      <img src={logo} className="logo2" alt="logo"/>
      <div className="footer-socials">
        <a href="https://wa.me/79827166207" className="social" aria-label="WhatsApp">
          <img className="icon" src={whatsapp}/>
        </a>
        <a href="https://t.me/+79827166207" className="social" aria-label="Telegram">
          <img className="icon" src={tg}/>
        </a>
      </div>
    </div>

        {/* Правая часть */}
        <div className="footer-right">
          <a href="info@domain.ru" className="footer-mail">
            jarosllopatin7@yandex.ru
          </a>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="footer-bottom">
        <p>© CleanInPark, 2025</p>
        <p>Самозанятый Лопатин Ярослав Михайлович, ИНН 667908332008</p>
  <p>Телефон: +7 (982) 716-62-07 | Email: jarosllopatin7@yandex.ru</p>
  <p><a href="/privacy-policy">Политика обработки персональных данных</a></p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
