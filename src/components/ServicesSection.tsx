import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const subjects = [
    {
      title: "Математика и физика",
      description:
        "От основ алгебры до высшей математики, подготовка к ЕГЭ и олимпиадам",
      icon: "Calculator",
      popular: true,
      grades: ["5-11 класс", "Подготовка к ЕГЭ"],
    },
    {
      title: "Русский язык и литература",
      description:
        "Грамотность, сочинения, анализ произведений, подготовка к экзаменам",
      icon: "BookOpen",
      popular: true,
      grades: ["1-11 класс", "ОГЭ/ЕГЭ"],
    },
    {
      title: "Английский язык",
      description:
        "Разговорная практика, грамматика, подготовка к международным экзаменам",
      icon: "Globe",
      popular: false,
      grades: ["Любой уровень", "IELTS/TOEFL"],
    },
    {
      title: "Химия и биология",
      description: "Лабораторные работы, подготовка к медицинским вузам",
      icon: "Flask",
      popular: false,
      grades: ["8-11 класс", "Профориентация"],
    },
    {
      title: "История и обществознание",
      description:
        "Региональная история, подготовка к гуманитарным специальностям",
      icon: "Scroll",
      popular: false,
      grades: ["5-11 класс", "ЕГЭ"],
    },
    {
      title: "Информатика и программирование",
      description:
        "Основы программирования, веб-разработка, подготовка к IT-профессиям",
      icon: "Code",
      popular: true,
      grades: ["7-11 класс", "Доп. образование"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Учебные предметы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий спектр дисциплин с возможностью индивидуального подхода к
            каждому ученику
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon
                      name={subject.icon as any}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  {subject.popular && (
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Популярно
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {subject.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {subject.grades.map((grade, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {grade}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Не нашли нужный предмет?</p>
          <p className="text-sm text-gray-500">
            Свяжитесь с нами — мы найдем преподавателя под ваши потребности
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
