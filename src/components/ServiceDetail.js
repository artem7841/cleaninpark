import React from "react";
import { useParams, Link } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Данные для всех услуг
  const servicesData = {
    "general-cleaning": {
      title: "Генеральная уборка квартиры и дома в Екатеринбурге",
      subtitle: "Комплексное наведение порядка в доме. Вернем чистоту и свежесть в каждый уголок.",
      description: "Генеральная уборка — полное обновление чистоты дома. Не просто протираем пыль, а моем все поверхности, чистим труднодоступные места и проводим дезинфекцию. Идеальное решение для сезонного обновления жилья или подготовки к важному событию.",
      price: "От 160 руб за м²",
      sections: [
        {
          title: "КОМНАТЫ И ГОСТИНАЯ:",
          subtitle: "Превращаем жилое пространство в зону комфорта и чистоты",
          items: [
            "Потолок и стены: Удаление паутины, пыли с карнизов, потолочных углов, выключателей, розеток.",
            "Осветительные приборы: Аккуратное мытье плафонов люстр, светильников.",
            "Радиаторы отопления: Мойка с двух сторон и между секций.",
            "Полы: Влажная уборка с перемещением легкой мебели. Мытье плинтусов.",
            "Мебель: Корпусная — протирка всех поверхностей; Мягкая — чистка пылесосом",
            "Двери: Мытье полотен, косяков и ручек."
          ]
        },
        {
          title: "ЗОНА КУХНИ:",
          subtitle: "Устраняем невидимые бактерии и жировые отложения там, где вы готовите",
          items: [
            "Кухонный гарнитур: Мытье фасадов, ручек, фартука, устранение жировых отложений.",
            "Вентиляция: Обезжиривание решетки вытяжки и наружной поверхности.",
            "Техника: Мытье холодильника, СВЧ-печи, чайника и другой техники.",
            "Столешница: Дезинфекция и полировка."
          ]
        },
        {
          title: "ЗОНА САНУЗЛА:",
          subtitle: "Обеспечиваем не просто блеск, а полную гигиеническую безопасность",
          items: [
            "Сантехника: Чистка унитаза, ванной и душевой кабины, раковины с использованием дезинфицирующих средств.",
            "Поверхности: Мойка кафеля, межплиточных швов, стеклянных полок, зеркал.",
            "Аксессуары: Чистка держателей, стаканчиков, полочек."
          ]
        }
      ],
      advantages: [
        "Система «Чистых зон»: Используем цветную маркировку инвентаря для исключения перекрестного распространения бактерий",
        "Дезинфекция по стандартам: Обрабатываем выключатели, дверные ручки, пульты управления",
        "Борьба с микроскопической пылью: Связываем и удаляем пыль специальными средствами",
        "Профессиональная химия: Бережем лаковое покрытие мебели и целостность техники"
      ]
    },
    "maintenance-cleaning": {
      title: "Поддерживающая уборка",
      subtitle: "Идеальный порядок за 3-4 часа",
      description: "Не всегда нужна генеральная уборка. Часто требуется просто быстро навести порядок, с которым вы не успеваете справиться сами. Разовая поддерживающая уборка — это экспресс-решение для занятых людей.",
      price: "От 110 руб за м²",
      sections: [
        {
          title: "КОМНАТЫ И ЖИЛЫЕ ПОМЕЩЕНИЯ",
          items: [
            "Сияющие полы без разводов: Влажная уборка всех покрытий.",
            "Отсутствие пыли: Протирка всех открытых поверхностей, включая подоконники.",
            "Ухоженная мебель: Чистка фасадов шкафов и зеркал до блеска.",
            "Свежий текстиль: Чистка ковров мощным пылесосом Karcher."
          ]
        },
        {
          title: "КУХНЯ",
          items: [
            "Столешницы и поверхности: Мойка рабочих зон, обеденного стола",
            "Фасады мебели: Протирка кухонных шкафов от пыли и брызг",
            "Бытовая техника: Мытье внешних поверхностей холодильника, микроволновки, чайника",
            "Раковина и смеситель: Обезжиривание и полировка"
          ]
        }
      ]
    }
    // Добавь остальные услуги по аналогии
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Услуга не найдена</h2>
        <Link to="/" style={{ color: '#10b981', textDecoration: 'none' }}>
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Хедер страницы */}
      <div style={{ 
        padding: "60px 20px 40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <Link 
          to="/" 
          style={{ 
            color: '#10b981', 
            textDecoration: 'none',
            marginBottom: '20px',
            display: 'inline-block'
          }}
        >
          ← Назад к услугам
        </Link>
        
        <h1 style={{ 
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: "700",
          marginBottom: "15px",
          lineHeight: "1.2"
        }}>
          {service.title}
        </h1>
        
        <p style={{ 
          fontSize: "clamp(16px, 2vw, 18px)",
          color: "#666",
          marginBottom: "25px",
          fontStyle: "italic"
        }}>
          {service.subtitle}
        </p>

        <div style={{ 
          backgroundColor: "#10b981",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          display: "inline-block",
          marginBottom: "30px",
          fontWeight: "600"
        }}>
          {service.price}
        </div>

        {/* Основное описание */}
        <div style={{ 
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "40px",
          padding: "25px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px"
        }}>
          {service.description}
        </div>

        {/* Секции с что входит */}
        {service.sections && service.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <h3 style={{ 
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#1a1a1a"
            }}>
              {section.title}
            </h3>
            
            {section.subtitle && (
              <p style={{ 
                color: "#666",
                marginBottom: "20px",
                fontStyle: "italic"
              }}>
                {section.subtitle}
              </p>
            )}
            
            <ul style={{ 
              listStyle: "none",
              padding: 0
            }}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} style={{ 
                  marginBottom: "12px",
                  paddingLeft: "20px",
                  position: "relative",
                  fontSize: "15px",
                  lineHeight: "1.5"
                }}>
                  <span style={{ 
                    position: "absolute",
                    left: "0",
                    color: "#10b981",
                    fontWeight: "bold"
                  }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Преимущества */}
        {service.advantages && (
          <div style={{ 
            marginTop: "50px",
            padding: "30px",
            backgroundColor: "#f0fdf4",
            borderRadius: "12px",
            border: "1px solid #dcfce7"
          }}>
            <h3 style={{ 
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#1a1a1a"
            }}>
              Почему выбирают нашу уборку
            </h3>
            
            <ul style={{ listStyle: "none", padding: 0 }}>
              {service.advantages.map((advantage, index) => (
                <li key={index} style={{ 
                  marginBottom: "15px",
                  paddingLeft: "25px",
                  position: "relative",
                  fontSize: "15px",
                  lineHeight: "1.5"
                }}>
                  <span style={{ 
                    position: "absolute",
                    left: "0",
                    color: "#10b981",
                    fontWeight: "bold"
                  }}>✓</span>
                  {advantage}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Призыв к действию */}
        <div style={{ 
          marginTop: "50px",
          padding: "40px",
          backgroundColor: "#1a1a1a",
          color: "white",
          borderRadius: "12px",
          textAlign: "center"
        }}>
          <h3 style={{ 
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "15px"
          }}>
            Готовы к идеальной чистоте?
          </h3>
          <p style={{ 
            marginBottom: "25px",
            fontSize: "16px",
            opacity: "0.9"
          }}>
            Закажите уборку прямо сейчас и получите бесплатную консультацию
          </p>
          <Link 
            to="/contacts" 
            style={{ 
              backgroundColor: "#10b981",
              color: "white",
              padding: "12px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block"
            }}
          >
            Заказать расчет
          </Link>
        </div>

        {/* Ссылка на портфолио */}
        <div style={{ 
          textAlign: "center",
          marginTop: "40px",
          padding: "20px"
        }}>
          <Link 
            to="/portfolio" 
            style={{ 
              color: "#10b981",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px"
            }}
          >
            Посмотреть фото наших работ →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;