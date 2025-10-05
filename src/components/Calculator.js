import React, { useState } from "react";

const Calculator = () => {
  const [area, setArea] = useState(50);
  const [service, setService] = useState("");
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

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

    let basePrice = 60;
    if (service === "repair") basePrice = 80;
    if (service === "support") basePrice = 50;
    if (service === "office") basePrice = 70;
    setPrice(area * basePrice);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d\s\-\+\(\)]/g, '');
    setPhone(value);
  };

  return (
    <section className="calculator">
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
      type="number"
      value={area}
      min="10"
      onChange={(e) => setArea(e.target.value)}
      placeholder="Площадь (м²)"
      className={errors.area ? "error" : ""}
    />
    {errors.area && <span className="error-message">{errors.area}</span>}
  </div>

  {/* Кнопка - вне контейнеров полей */}
  <button onClick={handleCalculate} className="btn2">Получить расчет</button>
</div>
      {price && <p className="price-result">Стоимость уборки: <b>{price} ₽</b></p>}
    </section>
  );
};

export default Calculator;