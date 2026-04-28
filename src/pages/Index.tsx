import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const HERO_IMG = "https://cdn.poehali.dev/projects/e11eaa0e-5000-466d-ab44-0d78fcc64080/files/479b65ab-abc4-4a7e-ad73-f581f5b9e0ce.jpg"
const ROW_IMG = "https://cdn.poehali.dev/projects/e11eaa0e-5000-466d-ab44-0d78fcc64080/files/65d19ae2-91c9-4331-a42a-5d1355364d7d.jpg"

const MENU = [
  { name: "Классический глазурный", desc: "Нежное тесто с ванильной глазурью", price: "89 ₽", emoji: "🍩" },
  { name: "Клубничный рай", desc: "Розовая глазурь с клубничным кремом", price: "109 ₽", emoji: "🍓" },
  { name: "Шоколадный бум", desc: "Двойной шоколад и хрустящие шарики", price: "119 ₽", emoji: "🍫" },
  { name: "Посыпка-веселуха", desc: "Яркие цветные посыпки — для настроения!", price: "99 ₽", emoji: "🎉" },
  { name: "Карамельный дрим", desc: "Солёная карамель и хрустящий орех", price: "129 ₽", emoji: "🍯" },
  { name: "Кокосовый бриз", desc: "Белая глазурь с кокосовой стружкой", price: "109 ₽", emoji: "🥥" },
]

const WHY = [
  { icon: "Flame", title: "Только свежие", desc: "Готовим каждое утро — никаких вчерашних!" },
  { icon: "Heart", title: "С любовью", desc: "Каждый пончик — это маленькое произведение искусства" },
  { icon: "Truck", title: "Быстрая доставка", desc: "Довезём горячими за 30 минут" },
]

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div style={{ fontFamily: "var(--font-pacifico)" }} className="text-2xl text-primary">
            Кружок 🍩
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <a href="#menu" className="hover:text-primary transition-colors">Меню</a>
            <a href="#why" className="hover:text-primary transition-colors">О нас</a>
            <a href="#order" className="hover:text-primary transition-colors">Заказать</a>
          </nav>
          <a href="#order">
            <Button className="bg-primary text-primary-foreground rounded-full px-5 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
              Заказать
              <Icon name="ArrowUpRight" size={16} className="ml-1" />
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🎉 Свежие пончики каждый день
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Вкусные<br />
            <span className="text-primary">пончики</span><br />
            с доставкой
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto md:mx-0">
            Свежая выпечка прямо к вашей двери. Более 10 вкусов на любой каприз!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#menu">
              <Button size="lg" className="bg-primary text-primary-foreground rounded-full px-8 text-base hover:scale-105 transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)] w-full sm:w-auto">
                Смотреть меню
              </Button>
            </a>
            <a href="#order">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-primary text-primary hover:bg-secondary w-full sm:w-auto">
                Заказать сейчас
              </Button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-secondary opacity-60"></div>
            <img
              src={HERO_IMG}
              alt="Вкусные пончики"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="bg-secondary/40 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {WHY.map((item) => (
              <div key={item.title} className="bg-card rounded-3xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as "Flame"} size={26} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
            Наше меню
          </h2>
          <p className="text-muted-foreground text-lg">Выбирай любимый вкус — или бери всё!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {MENU.map((item) => (
            <div key={item.name} className="bg-card border border-border rounded-3xl p-6 flex flex-col gap-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl text-center">{item.emoji}</div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-primary font-bold text-xl">{item.price}</span>
                <Button size="sm" className="bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform">
                  В корзину
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-3xl overflow-hidden relative h-56 md:h-72">
          <img src={ROW_IMG} alt="Ассортимент пончиков" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center px-10">
            <div>
              <p className="text-white/80 text-sm mb-2 font-mono">Свежие каждый день</p>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                Попробуй все вкусы!
              </h3>
              <a href="#order">
                <Button className="bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                  Заказать набор
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <footer id="order" className="bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div style={{ fontFamily: "var(--font-pacifico)" }} className="text-5xl text-primary mb-4">
            Кружок
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
            Готовы заказать?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            Звоните или пишите — доставим свежие пончики прямо к вам!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+79001234567">
              <Button size="lg" className="bg-primary text-primary-foreground rounded-full px-10 text-base hover:scale-105 transition-all hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)]">
                <Icon name="Phone" size={18} className="mr-2" />
                +7 (900) 123-45-67
              </Button>
            </a>
            <a href="https://wa.me/79001234567">
              <Button size="lg" variant="outline" className="rounded-full px-10 text-base border-primary text-primary hover:bg-secondary">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-12">© 2025 Кружок · Вкусные пончики с доставкой</p>
        </div>
      </footer>
    </div>
  )
}
