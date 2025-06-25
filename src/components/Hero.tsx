import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
          <Icon name="Sparkles" size={20} className="text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">
            Новая эра онлайн-образования
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent leading-tight">
          Учись с{" "}
          <span className="gradient-primary bg-clip-text text-transparent">
            удовольствием
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Интерактивная онлайн-школа с системой тестирования, которая делает
          обучение увлекательным и эффективным
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="gradient-primary text-white hover:scale-105 transition-transform duration-200 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать обучение
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-300 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-200"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Узнать больше
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">10,000+</h3>
            <p className="text-gray-600">Довольных учеников</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Icon name="BookOpen" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">50+</h3>
            <p className="text-gray-600">Курсов и предметов</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Icon name="Award" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">95%</h3>
            <p className="text-gray-600">Успешных результатов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
