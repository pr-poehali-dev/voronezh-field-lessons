import React from "react";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Home",
      title: "Удобство для семьи",
      description:
        "Занятия проходят в комфортной домашней обстановке, экономят время на дорогу",
    },
    {
      icon: "MapPin",
      title: "Покрытие всей области",
      description:
        "Выезжаем в любой район Воронежской области, включая отдаленные населенные пункты",
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description:
        "Программа адаптируется под уровень и потребности каждого ученика",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description:
        "Выбирайте удобное время занятий, включая выходные и вечерние часы",
    },
    {
      icon: "GraduationCap",
      title: "Опытные педагоги",
      description:
        "Преподаватели с высшим образованием и многолетним опытом работы",
    },
    {
      icon: "TrendingUp",
      title: "Гарантия результата",
      description: "Отслеживаем прогресс и гарантируем повышение успеваемости",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы делаем качественное образование доступным для каждой семьи в
            Воронежской области
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={benefit.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Готовы начать обучение?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение часа для подбора
            преподавателя и составления индивидуального плана занятий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-blue-100">
              <Icon name="Phone" size={18} className="mr-2" />
              <span>+7 (473) 123-45-67</span>
            </div>
            <div className="flex items-center text-blue-100">
              <Icon name="Mail" size={18} className="mr-2" />
              <span>info@vrnlessons.ru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
