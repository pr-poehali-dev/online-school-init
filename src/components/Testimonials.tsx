import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Смирнова",
      grade: "11 класс",
      subject: "Математика",
      rating: 5,
      text: "Благодаря онлайн-школе я наконец-то разобралась с алгеброй! Тесты помогают сразу понять, где нужно подтянуться. Очень удобно заниматься в своем темпе.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b169?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Максим Петров",
      grade: "9 класс",
      subject: "Физика",
      rating: 5,
      text: "Раньше физика казалась сложной, но здесь все объясняют простым языком с классными примерами. Интерактивные задания помогают лучше запоминать материал!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Дарья Козлова",
      grade: "10 класс",
      subject: "Литература",
      rating: 5,
      text: "Система тестирования просто супер! Сразу видишь свой прогресс и понимаешь, что нужно повторить. Мои оценки в школе значительно улучшились.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Артём Волков",
      grade: "8 класс",
      subject: "Химия",
      rating: 5,
      text: "Теперь химия - мой любимый предмет! Эксперименты в видео-уроках и понятные объяснения сделали сложную науку увлекательной. Родители в восторге от результатов!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Отзывы наших учеников
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 10,000 учеников уже достигли успеха с нашей платформой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.grade}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Icon name="BookOpen" size={14} className="text-blue-500" />
                    <span className="text-sm text-blue-600 font-medium">
                      {testimonial.subject}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Присоединяйтесь к тысячам успешных учеников!
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Начните свое обучение сегодня и достигните новых высот в
              образовании
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="opacity-90">Улучшение оценок</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="opacity-90">Довольных учеников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Доступ к материалам</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
