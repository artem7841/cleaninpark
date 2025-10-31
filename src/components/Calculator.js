import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [area, setArea] = useState("");
  const [service, setService] = useState("");
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isCalculated, setIsCalculated] = useState(false);

  // Цены за м² для каждого типа услуги
  const priceRates = {
    general: { min: 160, max: 180 },
    support: { min: 110, max: 130 },
    repair: { min: 180, max: 200 },
    office: { min: 30, max: 120 }
  };

  // Названия услуг для отображения
  const serviceNames = {
    general: "Генеральная уборка",
    support: "Поддерживающая уборка", 
    repair: "Уборка после ремонта",
    office: "Уборка офисов"
  };

  // Загрузка данных при монтировании
  useEffect(() => {
    const savedData = sessionStorage.getItem('calculatorFormData');
    if (savedData) {
      try {
        const formData = JSON.parse(savedData);
        setName(formData.name || "");
        setPhone(formData.phone || "");
        setService(formData.service || "");
        setArea(formData.area || "");
      } catch (error) {
        console.error('Ошибка загрузки данных формы:', error);
      }
    }
  }, []);

  // Сохранение данных формы при изменении
  useEffect(() => {
    const formData = {
      name,
      phone,
      service,
      area
    };
    sessionStorage.setItem('calculatorFormData', JSON.stringify(formData));
  }, [name, phone, service, area]);

  // Валидация имени
  const validateName = (name) => {
    if (!name.trim()) {
      return "Введите имя";
    }
    if (name.trim().length < 2) {
      return "Имя должно содержать минимум 2 символа";
    }
    if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/.test(name.trim())) {
      return "Имя может содержать только буквы и дефисы";
    }
    return "";
  };

  // Валидация телефона
  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return "Введите телефон";
    }
    
    // Очищаем телефон от всего кроме цифр
    const cleanPhone = phone.replace(/[^\d]/g, '');
    
    if (cleanPhone.length < 10) {
      return "Телефон должен содержать минимум 10 цифр";
    }
    if (cleanPhone.length > 15) {
      return "Телефон слишком длинный";
    }
    if (!/^[\d\s\-\+\(\)]+$/.test(phone)) {
      return "Введите корректный номер телефона";
    }
    return "";
  };

  // Валидация услуги
  const validateService = (service) => {
    if (!service) {
      return "Выберите тип услуги";
    }
    return "";
  };

  // Валидация площади
  const validateArea = (area) => {
    if (!area.trim()) {
      return "Введите площадь";
    }
    
    const areaNum = parseInt(area);
    
    if (isNaN(areaNum)) {
      return "Площадь должна быть числом";
    }
    if (areaNum < 10) {
      return "Площадь должна быть не менее 10 м²";
    }
    if (areaNum > 1000) {
      return "Площадь не может превышать 1000 м²";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(name),
      phone: validatePhone(phone),
      service: validateService(service),
      area: validateArea(area)
    };

    setErrors(newErrors);
    
    // Проверяем, есть ли ошибки
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    return !hasErrors;
  };

  const handleCalculate = () => {
    if (!validateForm()) {
      setIsCalculated(false);
      return;
    }

    const areaNum = parseInt(area);
    const rates = priceRates[service];
    
    if (rates) {
      const minPrice = areaNum * rates.min;
      const maxPrice = areaNum * rates.max;
      setPriceRange({ min: minPrice, max: maxPrice });
      setIsCalculated(true);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    
    // Валидация в реальном времени
    if (errors.phone) {
      const error = validatePhone(value);
      setErrors(prev => ({ ...prev, phone: error }));
    }
  };

  const handleAreaChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setArea(value);
    
    // Валидация в реальном времени
    if (errors.area) {
      const error = validateArea(value);
      setErrors(prev => ({ ...prev, area: error }));
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    
    // Валидация в реальном времени
    if (errors.name) {
      const error = validateName(value);
      setErrors(prev => ({ ...prev, name: error }));
    }
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setService(value);
    
    // Валидация в реальном времени
    if (errors.service) {
      const error = validateService(value);
      setErrors(prev => ({ ...prev, service: error }));
    }
  };

  // Функция для прокрутки к контактам с передачей данных
  const scrollToContactsWithData = (e) => {
    e.preventDefault();
    
    // Проверяем, что расчет был выполнен
    if (!isCalculated) {
      alert("Сначала выполните расчет стоимости");
      return;
    }
    
    // Сохраняем данные в sessionStorage для контактов
    const formData = {
      name: name.trim(),
      phone: phone.trim(),
      service: serviceNames[service] || service,
      meters: area,
      calculatedPrice: priceRange
    };
    
    console.log('Сохранение данных для контактов:', formData);
    
    try {
      sessionStorage.setItem('calculatorData', JSON.stringify(formData));
      console.log('Данные сохранены в sessionStorage');
      
      // Очищаем данные формы калькулятора после успешного сохранения
      clearCalculatorForm();
      
    } catch (error) {
      console.error('Ошибка сохранения в sessionStorage:', error);
    }
    
    // Прокручиваем к контактам
    const contactsSection = document.getElementById('contact');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Очистка формы калькулятора
  const clearCalculatorForm = () => {
    setName("");
    setPhone("");
    setService("");
    setArea("");
    setPriceRange({ min: null, max: null });
    setIsCalculated(false);
    setErrors({});
    sessionStorage.removeItem('calculatorFormData');
  };

  // НОВАЯ ФУНКЦИЯ - переход к контактам с URL параметрами
  const navigateToContacts = () => {
    // Валидируем форму перед переходом
    if (!validateForm()) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    // Сохраняем данные в sessionStorage (как запасной вариант)
    const dataToSave = {
      service: serviceNames[service] || service,
      meters: area,
      calculatedPrice: priceRange,
      name: name,
      phone: phone
    };
    sessionStorage.setItem('calculatorData', JSON.stringify(dataToSave));

    // Создаем URL параметры
    const params = new URLSearchParams({
      service: serviceNames[service] || service,
      meters: area || '',
      priceMin: priceRange?.min || 0,
      priceMax: priceRange?.max || 0,
      name: name || '',
      phone: phone || ''
    });

    // Переходим на страницу контактов с параметрами
    window.location.href = `/#contact?${params.toString()}`;
    console.log('🔗 Переход к контактам с параметрами:', params.toString());
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
            onChange={handleNameChange}
            className={errors.name ? "error" : ""}
            onBlur={() => setErrors(prev => ({ ...prev, name: validateName(name) }))}
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
            onBlur={() => setErrors(prev => ({ ...prev, phone: validatePhone(phone) }))}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Тип услуги */}
        <div className="form-group">
          <select 
            value={service} 
            onChange={handleServiceChange}
            className={errors.service ? "error" : ""}
            onBlur={() => setErrors(prev => ({ ...prev, service: validateService(service) }))}
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
            onBlur={() => setErrors(prev => ({ ...prev, area: validateArea(area) }))}
          />
          {errors.area && <span className="error-message">{errors.area}</span>}
        </div>

        {/* Кнопка */}
        <button 
          onClick={handleCalculate} 
          className="btn2"
          disabled={!name || !phone || !service || !area}
        >
          Получить расчет
        </button>
      </div>

      {/* Результат с вилкой цен */}
      {priceRange.min && priceRange.max && isCalculated && (
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
          {/* Кнопка для перехода к контактам с передачей данных */}
          <div style={{marginTop: '15px', textAlign: 'center'}}>
            <a 
              href="#contact" 
              onClick={navigateToContacts}
              style={{
                color: '#007bff',
                textDecoration: 'underline',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Рассчитать точную стоимость, задать вопрос
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Calculator;