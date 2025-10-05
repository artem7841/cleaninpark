import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Advantages = () => {
  const items = [
    { icon: icon1, text: "Работаем по ГОСТ" },
    { icon: icon2, text: "Профессиональная химия" },
    { icon: icon3, text: "Обученный персонал" },
    { icon: icon4, text: "Фотоотчёт" },
  ];

  return (
    <section className="advantages">
        <div className="container">
      <h2>Преимущества</h2>
      <div className="adv-grid">
        {items.map((a, i) => (
          <div key={i} className="adv-card">
            <img src={a.icon} className="icon2"/>
            <p>{a.text}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Advantages;
