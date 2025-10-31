import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import do1 from "../assets/do1.jpg";
import posle1 from "../assets/posle1.jpg";
import do2 from "../assets/do2.jpg";
import posle2 from "../assets/posle2.jpg";
import do3 from "../assets/do3.jpg";
import posle3 from "../assets/posle3.jpg";
import do4 from "../assets/do4.jpg";
import posle4 from "../assets/posle4.jpg";
import do5 from "../assets/do5.jpg";
import posle5 from "../assets/posle5.jpg";
import do6 from "../assets/do6.jpg";
import posle6 from "../assets/posle6.jpg";
import do7 from "../assets/do7.jpg";
import posle7 from "../assets/posle7.jpg";
import do8 from "../assets/do8.jpg";
import posle8 from "../assets/posle8.jpg";
import do9 from "../assets/do9.jpg";
import posle9 from "../assets/posle9.jpg";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Обработка якорных ссылок
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Небольшая задержка для полной загрузки страницы
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  const images = [
    {
      before: do1,
      after: posle1
    },
    {
      before: do2,
      after: posle2
    },
    {
      before: do3,
      after: posle3
    },
    {
      before: do4,
      after: posle4
    },
    {
      before: do5,
      after: posle5
    },
    {
      before: do6,
      after: posle6
    },
    {
      before: do7,
      after: posle7
    },
    {
      before: do8,
      after: posle8
    },
    {
      before: do9,
      after: posle9
    },
    // Добавьте больше пар изображений
  ];

  const handleMove = (e) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const percentage = (x / containerRect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - containerRect.left;
    const percentage = (x / containerRect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    setSliderPosition(clampedPercentage);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setSliderPosition(50);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2>Наши работы</h2>
        
        <div className="portfolio-slider">
          {/* Контейнер слайдера со стрелками поверх фото */}
          <div className="slider-container-wrapper">
            <div 
              className="slider-container"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
            >
              <div className="image-wrapper">
                <img 
                  src={images[currentSlide].before} 
                  alt="До уборки" 
                  className="before-image"
                />
                <img 
                  src={images[currentSlide].after} 
                  alt="После уборки" 
                  className="after-image"
                  style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                />
              </div>
              
              <div 
                className="slider-handle"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
              >
                <div className="slider-line"></div>
                <div className="slider-button">
                  <span>⟷</span>
                </div>
              </div>

              <div className="slider-labels">
                <span className="label-before">До</span>
                <span className="label-after">После</span>
              </div>

              {/* Стрелки поверх фото */}
              <button 
                className="slider-arrow slider-arrow-prev"
                onClick={prevSlide}
                aria-label="Предыдущее фото"
              >
                ‹
              </button>

              <button 
                className="slider-arrow slider-arrow-next"
                onClick={nextSlide}
                aria-label="Следующее фото"
              >
                ›
              </button>
            </div>
          </div>

          {/* Навигация по слайдам (точки) */}
          <div className="slider-navigation">
            {images.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlide(index);
                  setSliderPosition(50);
                }}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;