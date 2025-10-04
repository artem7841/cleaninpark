import React from "react";

const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Контакты</h2>
      <div className="contacts-grid">
        <div>
          <h3>Наша почта</h3>
          <p>info@domain.ru</p>
          <h3>График работы</h3>
          <p>с 9:00 до 21:00</p>
          <h3>Телефон</h3>
          <p>+7 (000) 000-00-00</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <textarea placeholder="Текст сообщения"></textarea>
          <button className="btn">Отправить свой вопрос</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
