import React from "react";

const Services = () => {
  const services = [
    { title: "Генеральная уборка", img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
    { title: "После ремонта", img: "https://cdn-icons-png.flaticon.com/512/2728/2728981.png" },
    { title: "Поддерживающая", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
    { title: "Для офисов", img: "https://cdn-icons-png.flaticon.com/512/2331/2331726.png" },
  ];

  return (
    <section className="services">
      <div className="container">
      <h2>Наши услуги</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={s.img} alt={s.title} />
            <p>{s.title}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
