import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      title: "Математика",
      description: "От основ до продвинутых тем",
      icon: "Calculator",
      color: "from-blue-500 to-cyan-400",
      students: "2,500",
      tests: "150",
    },
    {
      title: "Физика",
      description: "Законы природы простым языком",
      icon: "Zap",
      color: "from-purple-500 to-pink-400",
      students: "1,800",
      tests: "120",
    },
    {
      title: "Литература",
      description: "Мировая классика и современность",
      icon: "BookOpen",
      color: "from-green-500 to-emerald-400",
      students: "2,200",
      tests: "80",
    },
    {
      title: "Химия",
      description: "Увлекательный мир элементов",
      icon: "FlaskConical",
      color: "from-orange-500 to-red-400",
      students: "1,500",
      tests: "100",
    },
    {
      title: "Биология",
      description: "Живая природа во всем разнообразии",
      icon: "Leaf",
      color: "from-teal-500 to-green-400",
      students: "1,900",
      tests: "90",
    },
    {
      title: "История",
      description: "От древности до наших дней",
      icon: "Clock",
      color: "from-amber-500 to-orange-400",
      students: "2,100",
      tests: "70",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Популярные курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите предмет и начните свое путешествие к знаниям с нашей
            интерактивной системой обучения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>

              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={course.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    <span>{course.students} учеников</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="FileText" size={16} />
                    <span>{course.tests} тестов</span>
                  </div>
                </div>

                <Button
                  className="w-full group-hover:scale-105 transition-transform duration-200"
                  variant="outline"
                >
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                  Изучать курс
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-primary text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
          >
            <Icon name="Grid3X3" size={20} className="mr-2" />
            Все курсы и предметы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
