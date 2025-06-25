import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      title: "Интерактивные тесты",
      description:
        "Система тестирования с мгновенной обратной связью и детальной аналитикой результатов",
      icon: "ClipboardCheck",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Персональный прогресс",
      description:
        "Отслеживание достижений, статистика обучения и рекомендации для улучшения результатов",
      icon: "TrendingUp",
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Адаптивное обучение",
      description:
        "Система подстраивается под ваш темп и стиль обучения для максимальной эффективности",
      icon: "Brain",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Геймификация",
      description:
        "Достижения, рейтинги и соревнования делают процесс обучения увлекательным",
      icon: "Trophy",
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Экспертные материалы",
      description:
        "Курсы от ведущих преподавателей с многолетним опытом и высшими квалификациями",
      icon: "GraduationCap",
      color: "from-indigo-500 to-purple-400",
    },
    {
      title: "Доступ везде",
      description:
        "Обучайтесь с любого устройства в любое время - дома, в дороге или на переменах",
      icon: "Smartphone",
      color: "from-teal-500 to-blue-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные технологии и проверенные методики для эффективного
            обучения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={feature.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Система тестирования нового поколения
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Наши тесты адаптируются под ваш уровень знаний, предоставляют
                мгновенную обратную связь и помогают выявить пробелы в знаниях
                для более эффективного обучения.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Более 1000 тестовых заданий
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Автоматическая проверка и оценка
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Детальная аналитика результатов
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <Icon
                  name="BarChart3"
                  size={64}
                  className="mx-auto mb-4 opacity-80"
                />
                <h4 className="text-2xl font-bold mb-2">Ваш прогресс</h4>
                <p className="opacity-90 mb-6">
                  Отслеживайте свои достижения в реальном времени
                </p>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Математика</span>
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
