import React from 'react';
import '../style/PrivacyPolicy.css'; // Стили (если нужны)

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU'); // Автоматическая подстановка даты

  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h1>
        
        <section className="policy-section">
          <h2>1. ОПЕРАТОР</h2>
          <p>Самозанятый Лопатин Ярослав Михайлович</p>
          <p>ИНН: 667908332008</p>
          <p>Контактный email: <a href="mailto:jarosllopatin7@yandex.ru">jarosllopatin7@yandex.ru</a></p>
          <p>Телефон: <a href="tel:+79827166207">+7 (982) 716-62-07</a></p>
        </section>

        <section className="policy-section">
          <h2>2. ОБРАБАТЫВАЕМЫЕ ДАННЫЕ</h2>
          <ul>
            <li>Имя</li>
            <li>Номер телефона</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. ЦЕЛИ ОБРАБОТКИ</h2>
          <ul>
            <li>Обратная связь с клиентом для обсуждения заказа клининговых услуг</li>
            <li>Заключение и исполнение договора на оказание услуг</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. ОСНОВАНИЕ ДЛЯ ОБРАБОТКИ</h2>
          <p>Согласие субъекта персональных данных</p>
        </section>

        <section className="policy-section">
          <h2>5. ПОРЯДОК ОБРАБОТКИ</h2>
          <p>Данные хранятся на защищенных серверах хостинг-провайдера.</p>
          <p>Не передаются третьим лицам без согласия субъекта.</p>
        </section>

        <section className="policy-section">
          <h2>6. СРОКИ ХРАНЕНИЯ</h2>
          <p>Данные хранятся до достижения целей обработки или до отзыва согласия.</p>
        </section>

        <section className="policy-section">
          <h2>7. ПРАВА СУБЪЕКТА ПДн</h2>
          <p>Вы можете:</p>
          <ul>
            <li>Отозвать согласие на обработку ПДн</li>
            <li>Запросы направлять на email: <a href="mailto:jarosllopatin7@yandex.ru">jarosllopatin7@yandex.ru</a></li>
          </ul>
        </section>

        <div className="effective-date">
          <p>Дата вступления в силу: {currentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;