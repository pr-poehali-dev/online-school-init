import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Icon name="Zap" size={20} className="text-yellow-300" />
            <span className="text-sm font-medium">Специальное предложение</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Начни учиться
            <span className="block text-yellow-300">уже сегодня!</span>
          </h2>

          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Получи доступ ко всем курсам и системе тестирования. Первая неделя
            бесплатно - без обязательств!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать бесплатно
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Задать вопрос
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Icon
              name="Clock"
              size={32}
              className="mx-auto mb-4 text-yellow-300"
            />
            <h4 className="text-lg font-semibold mb-2">Гибкий график</h4>
            <p className="text-sm opacity-80">Учись в удобное время</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Icon
              name="Users"
              size={32}
              className="mx-auto mb-4 text-green-300"
            />
            <h4 className="text-lg font-semibold mb-2">Поддержка</h4>
            <p className="text-sm opacity-80">Помощь экспертов 24/7</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Icon
              name="Award"
              size={32}
              className="mx-auto mb-4 text-blue-300"
            />
            <h4 className="text-lg font-semibold mb-2">Сертификат</h4>
            <p className="text-sm opacity-80">Получи признание</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Icon
              name="Smartphone"
              size={32}
              className="mx-auto mb-4 text-pink-300"
            />
            <h4 className="text-lg font-semibold mb-2">Мобильность</h4>
            <p className="text-sm opacity-80">Доступ с любого устройства</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm opacity-75">
            🔒 Безопасная оплата • 💯 Гарантия возврата средств • 📱 Без скрытых
            платежей
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
