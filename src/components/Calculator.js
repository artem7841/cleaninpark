import React, { useState } from "react";

const Calculator = () => {
  const [area, setArea] = useState(50);
  const [service, setService] = useState("general");
  const [price, setPrice] = useState(null);

  const handleCalculate = () => {
    let basePrice = 60;
    if (service === "repair") basePrice = 80;
    if (service === "support") basePrice = 50;
    if (service === "office") basePrice = 70;
    setPrice(area * basePrice);
  };

  return (
    <section className="calculator">
      <h2>Рассчитайте стоимость вашей уборки</h2>
      <div className="calc-form">
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Телефон" />
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="general">Генеральная уборка</option>
          <option value="repair">После ремонта</option>
          <option value="support">Поддерживающая</option>
          <option value="office">Для офисов</option>
        </select>
        <input
          type="number"
          value={area}
          min="10"
          onChange={(e) => setArea(e.target.value)}
          placeholder="Площадь (м²)"
        />
        <button onClick={handleCalculate} className="btn">Получить расчет</button>
      </div>
      {price && <p className="price-result">Стоимость уборки: <b>{price} ₽</b></p>}
    </section>
  );
};

export default Calculator;
