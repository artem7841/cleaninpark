import React, { useState, useRef } from "react";
import do1 from "../assets/do1.jpg";
import posle1 from "../assets/posle1.jpg";
import do2 from "../assets/do2.jpg";
import posle2 from "../assets/posle2.jpg";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const images = [
    {
      before: do1,
      after: posle1
    },
    {
      before: do2,
      after: posle2
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
    <section className="portfolio">
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