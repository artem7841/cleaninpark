import React from "react";

const Advantages = () => {
  const items = [
    { icon: "📘", text: "Работаем по ГОСТ" },
    { icon: "⚗️", text: "Профессиональная химия" },
    { icon: "👷", text: "Обученный персонал" },
    { icon: "📸", text: "Фотоотчёт" },
  ];

  return (
    <section className="advantages">
        <div className="container">
      <h2>Преимущества</h2>
      <div className="adv-grid">
        {items.map((a, i) => (
          <div key={i} className="adv-card">
            <span className="adv-icon">{a.icon}</span>
            <p>{a.text}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Advantages;
