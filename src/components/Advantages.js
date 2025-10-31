import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Advantages = () => {
  const items = [
    { 
      icon: icon1, 
      title: "Качество",
      text: "Используем профессиональное оборудование, химию; сотрудники проходят курсы проф. обучения"
    },
    { 
      icon: icon3, 
      title: "Экологичность",
      text: "Используем экологичные средства уборки и дезинфекции – это помогает защищать природу и здоровье клиентов"
    },
    { 
      icon: icon2, 
      title: "Скорость",
      text: "Справляемся с задачей быстрее, чем большинство конкурентов – за счет большего числа клинеров, опыта кадров, проф. оборудования, методов и инструментов"
    },
  ];

  return (
    <section className="advantages">
      <div className="container">
        <h2 className="advantages-title">Наши преимущества</h2>
        <div className="advantages-grid">
          {items.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon-wrapper">
                <img src={advantage.icon} alt={advantage.title} className="advantage-icon"/>
              </div>
              <h3 className="advantage-card-title">{advantage.title}</h3>
              <p className="advantage-card-text">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;