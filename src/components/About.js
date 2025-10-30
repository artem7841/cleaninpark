
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../style/About.css";
import avatar from "../assets/avatar.jpg";


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          {/* Текстовая часть */}
          <div className="about-text">
            <h2 className="about-title">
              Профессионализм — когда чистота становится системой
            </h2>
            <div className="about-description">
              <p>
                «До создания CleanInPark я пять лет управляла логистикой в федеральной компании. 
                Задача была — превратить хаотичные процессы в отлаженные конвейеры, где человеческий 
                фактор сводится к минимуму, а результат предсказуем.
              </p>
              <p>
                Главная «боль» в клининге – бессистемность и зависимость от человеческого ресурса, 
                и как следствие - непредсказуемость результата.
              </p>
              <Link to="/service/general-cleaning" style={{ textDecoration: 'none' }}>
 <p>
                Я создала CleanInPark как компанию, где качество — не случайность, а следствие 
                продуманных до мелочей стандартов и процессов.
              </p>
                </Link> 
              <p>
                Я создала CleanInPark как компанию, где качество — не случайность, а следствие 
                продуманных до мелочей стандартов и процессов.
              </p>
            </div>
            
            <div className="about-philosophy">
              <h3 className="philosophy-title">Наша философия:</h3>
              <ul className="philosophy-list">
                <li className="philosophy-item">
                  <span className="philosophy-icon">•</span>
                  <strong>Стандарты вместо импровизации</strong>
                </li>
                <li className="philosophy-item">
                  <span className="philosophy-icon">•</span>
                  <strong>Технологии вместо устаревших методов</strong>
                </li>
                <li className="philosophy-item">
                  <span className="philosophy-icon">•</span>
                  <strong>Экологичность как обязанность</strong>
                </li>
              </ul>
            </div>

            <div className="about-conclusion">
              <p>
                Мы создали сервис, где чистота — не вопрос везения, а следствие продуманной системы. 
                Чтобы вы доверяли нам так же, как доверяете другим профессионалам — врачам, юристам, пилотам.
              </p>
              <p className="highlight-text">
                Потому что ваш дом заслуживает предсказуемого совершенства.
              </p>
            </div>
          </div>

          {/* Фото основателя */}
          <div className="about-image">
            <div className="founder-photo">
              <img 
                src={avatar} 
                className="founder-img"
              />
              <div className="photo-frame"></div>
            </div>
            <div className="founder-info">
              <p className="founder-name">Основатель CleanInPark</p>
              <p className="founder-role">Управляющий директор</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
