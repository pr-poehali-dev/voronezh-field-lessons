
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="Award" size={20} className="mr-2" />
            <span className="text-sm font-medium">Участник конкурса "Большая перемена"</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Выездные уроки по
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block">
              Воронежской области
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Качественное образование прямо у вас дома. Опытные преподаватели приедут в любой район области для индивидуальных и групповых занятий.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на урок
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-blue-100">Опытных преподавателей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-blue-100">Учебных предметов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-blue-100">Покрытие области</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
