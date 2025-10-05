import React from "react";


const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container3">
      <div className="contacts-container">
        <h2 className="contacts-title">Контакты</h2>

        <div className="contacts-grid">
          {/* Левая колонка */}
          <div className="contacts-info">
            <div className="contacts-item">
              <h3>Наша почта</h3>
              <p>info@domain.ru</p>
            </div>

            <div className="contacts-item">
              <h3>График работы</h3>
              <p>с 9:00 до 21:00</p>
            </div>

            <div className="contacts-item">
              <h3>Телефон</h3>
              <p>+7 (000) 000-00-00</p>
            </div>

            <div className="contacts-buttons">
              <a href="#" className="btn telegram">Telegram</a>
              <a href="#" className="btn whatsapp">WhatsApp</a>
            </div>

            <p className="contacts-note">
              По всем вопросам обращайтесь по телефону или через мессенджеры.
            </p>
          </div>

          {/* Правая колонка — форма */}
          <div className="contacts-form-block">
            <h3>У вас остались вопросы?</h3>
            <p>Напишите нам, и менеджер с радостью ответит на них.</p>

            <form className="contacts-form">
              <div className="form-row">
                <input type="text" placeholder="Ваше имя" />
                <input type="text" placeholder="Номер телефона" />
              </div>
              <div className="form-row">
              <textarea placeholder="Текст сообщения"></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Отправить свой вопрос
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
