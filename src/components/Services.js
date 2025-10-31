import React, { useRef } from "react";
import "../style/Services.css";
import serv_1 from "../assets/serv_1.jpg";
import serv_2 from "../assets/serv_2.jpg";
import serv_3 from "../assets/serv_3.jpg";
import serv_4 from "../assets/serv_4.jpg";
import serv_6 from "../assets/posle2.jpg";
import serv_5 from "../assets/serv5.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { 
      title: "Генеральная уборка", 
      img: serv_3,
      description: "Полная уборка помещения с чисткой труднодоступных мест и дезинфекцией всех поверхностей",
      price: "От 170 руб за м²",
      link: "/service/general-cleaning", 
    },
    { 
      title: "После ремонта", 
      img: serv_1,
      description: "Уборка строительной пыли, удаление следов ремонта, чистка окон и подготовка к проживанию",
      price: "От 190 руб за м²",
      link: "/service/post-renovation", 
    },
    { 
      title: "Поддерживающая", 
      img: serv_4,
      description: "Регулярная уборка для поддержания чистоты: влажная уборка, пылесос, чистка санузлов",
      price: "От 120 руб за м²",
      link: "/service/maintenance-cleaning", 
    },
    { 
      title: "Для офисов", 
      img: serv_2,
      description: "Комплексная уборка офисных помещений, переговорных, кухонь и зон отдыха",
      price: "От 40 руб за м²",
      link: "/service/office-cleaning", 
    },
    { 
      title: "Мойка окон и балкона", 
      img: serv_5,
      description: "Профессиональная мойка окон, витрин, балконов и лоджий с использованием специальных средств",
      price: "От 200 руб за м²",
      link: "/service/window-cleaning", 
    },
    { 
      title: "Дополнительные услуги", 
      img: serv_6,
      description: "Точечное решение проблем с чистотой",
      price: "От 500 руб",
      link: "/service/additional-services", 
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
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div 
                  className="service-card-inner"
                  style={{ '--bg-image': `url(${service.img})` }}
                >
                  <img src={service.img} alt={service.title} />
                  <p className="service-card-title">{service.title}</p>
                </div>
                
                <div className="service-card-content">
                  <div className="service-card-description">
                    <p className="service-short-description">{service.description}</p>
                    <p className="service-price">{service.price}</p>
                    <Link to={service.link} className="service-details-link">
                      Читать подробное описание →
                    </Link>
                  </div>
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