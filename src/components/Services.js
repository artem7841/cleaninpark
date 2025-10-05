import React, { useRef } from "react";
import "../style/Services.css";
import serv_1 from "../assets/serv_1.jpg";
import serv_2 from "../assets/serv_2.jpg";
import serv_3 from "../assets/serv_3.jpg";
import serv_4 from "../assets/serv_4.jpg";

const Services = () => {
  const services = [
    { 
      title: "Генеральная уборка", 
      img: serv_3,
      description: "Полная уборка всех помещений с чисткой труднодоступных мест и дезинфекцией поверхностей"
    },
    { 
      title: "После ремонта", 
      img: serv_1,
      description: "Уборка строительной пыли, удаление следов ремонта, чистка окон и подготовка к проживанию"
    },
    { 
      title: "Поддерживающая", 
      img: serv_4,
      description: "Регулярная уборка для поддержания чистоты: влажная уборка, пылесос, чистка санузлов"
    },
    { 
      title: "Для офисов", 
      img: serv_2,
      description: "Комплексная уборка офисных помещений, переговорных, кухонь и зон отдыха"
    },
    { 
      title: "Мойка окон и балкона", 
      img: serv_2,
      description: "Комплексная уборка офисных помещений, переговорных, кухонь и зон отдыха"
    },
  ];

  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.service-card');
      const cardWidth = card.offsetWidth + 20;
      sliderRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.service-card');
      const cardWidth = card.offsetWidth + 20;
      sliderRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="services">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services-slider">
          <div className="services-track" ref={sliderRef}>
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div 
                  className="service-card-inner"
                  style={{ '--bg-image': `url(${s.img})` }}
                >
                  <img src={s.img} alt={s.title} />
                  <p className="service-card-title">{s.title}</p>
                </div>
                <div className="service-card-description">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-controls">
          <button className="slider-prev" onClick={prevSlide}>‹</button>
          <button className="slider-next" onClick={nextSlide}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Services;