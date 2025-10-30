import React, { useState } from "react";

const Calculator = () => {
  const [area, setArea] = useState("");
  const [service, setService] = useState("");
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  // Цены за м² для каждого типа услуги
  const priceRates = {
    general: { min: 160, max: 180 },
    support: { min: 110, max: 130 },
    repair: { min: 180, max: 200 },
    office: { min: 30, max: 120 }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Введите имя";
    }

    if (!phone.trim()) {
      newErrors.phone = "Введите телефон";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(phone)) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (!service) {
      newErrors.service = "Выберите тип услуги";
    }

    if (!area || area < 10) {
      newErrors.area = "Площадь должна быть не менее 10 м²";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (!validateForm()) {
      return;
    }

    const areaNum = parseInt(area);
    const rates = priceRates[service];
    
    if (rates) {
      const minPrice = areaNum * rates.min;
      const maxPrice = areaNum * rates.max;
      setPriceRange({ min: minPrice, max: maxPrice });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d\s\-\+\(\)]/g, '');
    setPhone(value);
  };

  const handleAreaChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setArea(value);
  };

  // Форматирование числа с пробелами
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <section className="calculator" id="calculator">
      <h2>Рассчитайте стоимость вашей уборки</h2>
      <div className="calc-form">
        {/* Имя */}
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Имя" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Телефон */}
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Телефон" 
            value={phone}
            onChange={handlePhoneChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Тип услуги */}
        <div className="form-group">
          <select 
            value={service} 
            onChange={(e) => setService(e.target.value)}
            className={errors.service ? "error" : ""}
          >
            <option value="" disabled>Тип услуги</option>
            <option value="general">Генеральная уборка</option>
            <option value="repair">После ремонта</option>
            <option value="support">Поддерживающая</option>
            <option value="office">Для офисов</option>
          </select>
          {errors.service && <span className="error-message">{errors.service}</span>}
        </div>

        {/* Площадь */}
        <div className="form-group">
          <input
            type="text"
            value={area}
            onChange={handleAreaChange}
            placeholder="Площадь (м²)"
            className={errors.area ? "error" : ""}
          />
          {errors.area && <span className="error-message">{errors.area}</span>}
        </div>

        {/* Кнопка */}
        <button onClick={handleCalculate} className="btn2">Получить расчет</button>
      </div>

      {/* Результат с вилкой цен */}
      {priceRange.min && priceRange.max && (
        <div className="price-result">
          <p>
            <b>Примерная стоимость уборки:</b>
          </p>
          <p className="price-range">
            от {formatPrice(priceRange.min)} до {formatPrice(priceRange.max)} ₽
          </p>
          <p className="price-note">
            Для точного расчета обратитесь к менеджеру
          </p>
        </div>
      )}
    </section>
  );
};

export default Calculator;