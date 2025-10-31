import React, { useState, useEffect, useRef } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contactMethod: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    contactMethod: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    contactMethod: false
  });

  const [calculatorData, setCalculatorData] = useState(null);
  const hasLoadedCalculatorData = useRef(false);
  const formRef = useRef(null);

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

  // Валидация способа связи
  const validateContactMethod = (method) => {
    if (!method) {
      return "Выберите предпочтительный способ связи";
    }
    return "";
  };

  // Общая валидация формы
  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      phone: validatePhone(formData.phone),
      contactMethod: validateContactMethod(formData.contactMethod)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  // Валидация отдельного поля
  const validateField = (name, value, isTouched) => {
    if (!isTouched) return "";
    
    switch (name) {
      case 'name':
        return validateName(value);
      case 'phone':
        return validatePhone(value);
      case 'contactMethod':
        return validateContactMethod(value);
      default:
        return "";
    }
  };

  // Функция для загрузки данных из URL параметров
  const loadCalculatorDataFromURL = () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      console.log('🔍 Параметры URL:', window.location.search);
      console.log('📋 Все параметры:', Object.fromEntries(urlParams.entries()));
      
      if (urlParams.has('service') || urlParams.has('meters')) {
        const data = {
          service: urlParams.get('service') || '',
          meters: urlParams.get('meters') || '',
          calculatedPrice: {
            min: parseInt(urlParams.get('priceMin')) || 0,
            max: parseInt(urlParams.get('priceMax')) || 0
          },
          name: urlParams.get('name') || '',
          phone: urlParams.get('phone') || ''
        };
        
        console.log('📦 Данные из URL параметров:', data);
        
        setCalculatorData(data);
        
        // Заполняем форму данными из калькулятора
        setFormData(prev => ({
          ...prev,
          name: data.name,
          phone: data.phone
        }));
        
        // Помечаем поля как "тронутые" для валидации
        const newTouched = {
          name: !!data.name, // true если есть имя
          phone: !!data.phone, // true если есть телефон
          contactMethod: false
        };
        setTouched(newTouched);
        
        // Валидируем загруженные данные
        const newErrors = {
          name: validateName(data.name),
          phone: validatePhone(data.phone),
          contactMethod: ""
        };
        setErrors(newErrors);
        
        hasLoadedCalculatorData.current = true;
        console.log('✅ Данные успешно загружены из URL параметров');
        
        return true;
      }
      
      console.log('❌ Параметры калькулятора не найдены в URL');
      return false;
    } catch (error) {
      console.error('❌ Ошибка загрузки данных из URL:', error);
      return false;
    }
  };

  // Запасная функция для загрузки из sessionStorage
  const loadCalculatorDataFromStorage = () => {
    try {
      const savedCalculatorData = sessionStorage.getItem('calculatorData');
      console.log('🔍 Данные в sessionStorage:', savedCalculatorData);
      
      if (savedCalculatorData) {
        const data = JSON.parse(savedCalculatorData);
        console.log('📦 Данные из sessionStorage:', data);
        
        setCalculatorData(data);
        
        setFormData(prev => ({
          ...prev,
          name: data.name || '',
          phone: data.phone || ''
        }));
        
        const newTouched = {
          name: true,
          phone: true,
          contactMethod: false
        };
        setTouched(newTouched);
        
        const newErrors = {
          name: validateName(data.name || ''),
          phone: validatePhone(data.phone || ''),
          contactMethod: ""
        };
        setErrors(newErrors);
        
        hasLoadedCalculatorData.current = true;
        console.log('✅ Данные успешно загружены из sessionStorage');
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('❌ Ошибка загрузки из sessionStorage:', error);
      return false;
    }
  };

  // Функция для загрузки сохраненных данных формы
  const loadSavedFormData = () => {
    try {
      const savedFormData = sessionStorage.getItem('contactsFormData');
      if (savedFormData && !hasLoadedCalculatorData.current) {
        const data = JSON.parse(savedFormData);
        setFormData(data);
        
        const newErrors = {
          name: "",
          phone: "", 
          contactMethod: ""
        };
        setErrors(newErrors);
      }
    } catch (error) {
      console.error('Ошибка загрузки сохраненных данных формы:', error);
    }
  };

  // Основная загрузка при монтировании
  useEffect(() => {
    console.log('🚀 Компонент Contacts смонтирован');
    console.log('📍 Текущий URL:', window.location.href);
    console.log('📍 Хеш:', window.location.hash);
    console.log('📍 Параметры:', window.location.search);
    
    // Пробуем загрузить данные из URL параметров
    const urlDataLoaded = loadCalculatorDataFromURL();
    
    // Если данных в URL нет, пробуем загрузить из sessionStorage
    if (!urlDataLoaded) {
      console.log('🔄 Данных в URL нет, пробуем sessionStorage');
      loadCalculatorDataFromStorage();
    }
    
    // Загружаем сохраненные данные формы
    loadSavedFormData();

    const handleHashChange = () => {
      console.log('🔄 Хеш изменился:', window.location.hash);
      if (window.location.hash === '#contact') {
        hasLoadedCalculatorData.current = false;
        
        // При изменении хеша также проверяем URL параметры
        const urlDataLoaded = loadCalculatorDataFromURL();
        if (!urlDataLoaded) {
          loadCalculatorDataFromStorage();
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Сохранение данных формы при изменении
  useEffect(() => {
    sessionStorage.setItem('contactsFormData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateField(name, value, true);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (!touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }
    
    const error = validateField(name, value, true);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Получение текстового описания способа связи
  const getContactMethodText = (method) => {
    switch (method) {
      case 'telegram':
        return 'Telegram';
      case 'whatsapp':
        return 'WhatsApp';
      case 'phone':
        return 'Телефонный звонок';
      case 'email':
        return 'Email';
      default:
        return 'Не указан';
    }
  };

  // Отправка через Google Forms
  const submitToGoogleForms = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSepPfrOsTsx8e0veqjDfQ7es8DnP8MpSxY9xJxB_VyQk_z60Q/formResponse";
    
    // Создаем форму для отправки
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = googleFormUrl;
    form.style.display = 'none';
    form.target = '_blank';

    // Добавляем поля
    const fields = {
      'entry.1803102575': formData.name,
      'entry.1496045372': formData.phone,
      'entry.392138171': getContactMethodText(formData.contactMethod),
      'entry.1639246950': calculatorData ? calculatorData.service : "Прямой запрос",
      'entry.749667160': calculatorData ? `${calculatorData.meters} м²` : "Не указана",
      'entry.1761612622': calculatorData ? `от ${calculatorData.calculatedPrice?.min || 0} до ${calculatorData.calculatedPrice?.max || 0} руб.` : "Не рассчитывалась"
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    return true;
  };

  // Отправка через Email
  const submitViaEmail = () => {
    const subject = "Новая заявка с сайта";
    const body = `
Имя: ${formData.name}
Телефон: ${formData.phone}
Способ связи: ${getContactMethodText(formData.contactMethod)}
Услуга: ${calculatorData ? calculatorData.service : "Прямой запрос"}
Площадь: ${calculatorData ? `${calculatorData.meters} м²` : "Не указана"}
Стоимость: ${calculatorData ? `от ${calculatorData.calculatedPrice?.min || 0} до ${calculatorData.calculatedPrice?.max || 0} руб.` : "Не рассчитывалась"}
    `.trim();

    window.location.href = `mailto:17artem12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newTouched = {
      name: true,
      phone: true,
      contactMethod: true
    };
    setTouched(newTouched);

    if (!validateForm()) {
      alert("Пожалуйста, исправьте ошибки в форме");
      return;
    }

    // СНАЧАЛА отправляем в Google Forms
    const googleSent = submitToGoogleForms();
    
    // ПОТОМ отправляем email (дублируем для надежности)
    setTimeout(() => {
      submitViaEmail();
    }, 100);

    if (googleSent) {
      alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.");
      
      // Очищаем данные после отправки
      sessionStorage.removeItem('calculatorData');
      sessionStorage.removeItem('contactsFormData');
      hasLoadedCalculatorData.current = false;
      setCalculatorData(null);
      
      setFormData({
        name: "",
        phone: "",
        contactMethod: ""
      });
      
      setTouched({
        name: false,
        phone: false,
        contactMethod: false
      });
      
      setErrors({
        name: "",
        phone: "",
        contactMethod: ""
      });
    }
  };

  // Проверка валидности формы
  const isFormValid = () => {
    const allFieldsFilled = formData.name && formData.phone && formData.contactMethod;
    const noErrors = !errors.name && !errors.phone && !errors.contactMethod;
    return allFieldsFilled && noErrors;
  };

  // Функция для определения класса поля
  const getFieldClassName = (fieldName) => {
    return touched[fieldName] && errors[fieldName] ? "error" : "";
  };

  return (
    <section className="contacts" id="contact">
      <div className="container">
        <div className="contacts-container">
          <h2 className="contacts-title">Контакты</h2>

          <div className="contacts-grid">
            {/* Левая колонка */}
            <div className="contacts-info">
              <div className="contacts-item">
                <h3>Наша почта</h3>
                <p>jarosllopatin7@yandex.ru</p>
              </div>

              <div className="contacts-item">
                <h3>Телефон</h3>
                <p>+7 (982) 716-62-07</p>
              </div>

              <div className="contacts-buttons">
                <a href="https://t.me/+79827166207" className="btn-link telegram">Telegram</a>
                <a href="https://wa.me/79827166207" className="btn-link whatsapp">WhatsApp</a>
              </div>

              <p className="contacts-note">
                По всем вопросам обращайтесь по телефону или через мессенджеры.
              </p>
            </div>

            {/* Правая колонка — форма */}
            <div className="contacts-form-block">
              <h3>У вас остались вопросы?</h3>
              <p>Напишите нам, и менеджер с радостью ответит на них.</p>


              {calculatorData && (
                <div className="calculator-info" style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: '1px solid #e9ecef'
                }}>
                  <h4>Данные из калькулятора:</h4>
                  <p><strong>Услуга:</strong> {calculatorData.service}</p>
                  <p><strong>Площадь:</strong> {calculatorData.meters} м²</p>
                  <p><strong>Примерная стоимость:</strong> от {calculatorData.calculatedPrice?.min || 0} до {calculatorData.calculatedPrice?.max || 0} руб.</p>
                </div>
              )}

              <form className="contacts-form" onSubmit={handleSubmit} ref={formRef}>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getFieldClassName('name')}
                    />
                    {touched.name && errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="phone"
                      placeholder="Номер телефона" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getFieldClassName('phone')}
                    />
                    {touched.phone && errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <select 
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getFieldClassName('contactMethod')}
                    >
                      <option value="">Предпочтительный способ связи:</option>
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="phone">Телефонный звонок</option>
                    </select>
                    {touched.contactMethod && errors.contactMethod && (
                      <span className="error-message">{errors.contactMethod}</span>
                    )}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={!isFormValid()}
                >
                  {calculatorData ? 'Получить точный расчет' : 'Связаться с менеджером'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;