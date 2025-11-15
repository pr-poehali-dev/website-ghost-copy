import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: 'Александра Волкова',
      role: 'Креативный директор',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/732f9dce-8b11-4d41-8a3f-ea3ad4007e30.jpg',
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Арт-директор',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/732f9dce-8b11-4d41-8a3f-ea3ad4007e30.jpg',
    },
    {
      name: 'Мария Лебедева',
      role: 'Дизайнер',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/732f9dce-8b11-4d41-8a3f-ea3ad4007e30.jpg',
    },
    {
      name: 'Игорь Морозов',
      role: 'Разработчик',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/732f9dce-8b11-4d41-8a3f-ea3ad4007e30.jpg',
    },
  ];

  const galleryItems = [
    {
      title: 'Проект Северное Сияние',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/9c7477b3-8dc4-4ed2-aceb-5ab8ccb149fe.jpg',
    },
    {
      title: 'Концепт Призрак',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/835fdc70-a6d1-428d-873f-a96314bd7c52.jpg',
    },
    {
      title: 'Тёмная Материя',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/9c7477b3-8dc4-4ed2-aceb-5ab8ccb149fe.jpg',
    },
    {
      title: 'Квантовый Скачок',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/835fdc70-a6d1-428d-873f-a96314bd7c52.jpg',
    },
    {
      title: 'Вечная Пустота',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/9c7477b3-8dc4-4ed2-aceb-5ab8ccb149fe.jpg',
    },
    {
      title: 'Космическая Одиссея',
      image: 'https://cdn.poehali.dev/projects/216e09d0-494f-4e1c-9d26-86d70f23ed9b/files/835fdc70-a6d1-428d-873f-a96314bd7c52.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wider text-primary">ПРИЗРАК</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'team', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wide transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'team' && 'Команда'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            ПРИЗРАК
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы создаём невидимое, воплощаем невозможное
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="hover-scale text-lg px-8 py-6"
            >
              Связаться с нами
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'tel:+79991234567'}
              className="hover-scale text-lg px-8 py-6"
            >
              <Icon name="Phone" size={24} className="mr-2" />
              Вызов Даунов
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">О нас</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border hover-scale">
                <CardContent className="p-8">
                  <Icon name="Sparkles" size={40} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Креативность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы превращаем смелые идеи в уникальные визуальные решения, которые запоминаются надолго.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover-scale">
                <CardContent className="p-8">
                  <Icon name="Zap" size={40} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Инновации</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Используем передовые технологии и методы для создания проектов будущего.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover-scale">
                <CardContent className="p-8">
                  <Icon name="Target" size={40} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Точность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Каждая деталь имеет значение. Мы доводим проекты до совершенства.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover-scale">
                <CardContent className="p-8">
                  <Icon name="Rocket" size={40} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Результат</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Наша цель — превосходить ожидания и создавать проекты мирового уровня.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="min-h-screen flex items-center justify-center py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center animate-fade-in">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary text-sm uppercase tracking-wide">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center animate-fade-in">Галерея работ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden group hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Готовы начать новый проект? Мы всегда открыты для интересных предложений.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Card className="bg-card border-border p-6 hover-scale">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold">info@prizrak.studio</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-card border-border p-6 hover-scale">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="mt-12 flex gap-6 justify-center">
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Twitter" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Linkedin" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ПРИЗРАК. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;