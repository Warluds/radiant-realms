import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Продажа доменов .kz — премиум домены" },
      { name: "description", content: "Продаются премиум домены в зоне .kz: sonex.kz, manders.kz, decorazza.kz, bayramix.kz, satechi.kz и другие." },
      { property: "og:title", content: "Продажа доменов .kz" },
      { property: "og:description", content: "Премиум домены .kz для бизнеса в сфере декора, света и техники." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Domain = {
  name: string;
  from: string;
  to: string;
  category: string;
};

const domains: Domain[] = [
  { name: "sonex.kz", from: "25 октября 2025", to: "25 октября 2026", category: "Бренд" },
  { name: "maitre-deco.kz", from: "28 февраля 2026", to: "28 февраля 2027", category: "Декор" },
  { name: "maitre-decor.kz", from: "28 февраля 2026", to: "28 февраля 2027", category: "Декор" },
  { name: "manders.kz", from: "15 марта 2026", to: "15 марта 2027", category: "Бренд" },
  { name: "decorazza.kz", from: "31 марта 2026", to: "31 марта 2027", category: "Декор" },
  { name: "bayramix.kz", from: "31 марта 2026", to: "31 марта 2027", category: "Декор" },
  { name: "tutsvet.kz", from: "6 апреля 2026", to: "6 апреля 2027", category: "Свет" },
  { name: "chiaro.kz", from: "12 июля 2026", to: "12 июля 2027", category: "Свет" },
  { name: "mw-light.kz", from: "12 июля 2026", to: "12 июля 2027", category: "Свет" },
  { name: "leds-c4.kz", from: "27 июля 2026", to: "27 июля 2027", category: "Свет" },
  { name: "casadiluce.kz", from: "27 июля 2026", to: "27 июля 2027", category: "Свет" },
  { name: "masiero.kz", from: "27 июля 2026", to: "27 июля 2027", category: "Свет" },
  { name: "asfour.kz", from: "27 июля 2026", to: "27 июля 2027", category: "Хрусталь" },
  { name: "asfourcrystal.kz", from: "27 июля 2026", to: "27 июля 2027", category: "Хрусталь" },
  { name: "satechi.kz", from: "26 января 2027", to: "26 января 2028", category: "Техника" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Доступно к продаже
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Премиум домены <span className="text-primary">.kz</span> продаются
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Коллекция зарегистрированных доменных имён в казахстанской зоне .kz —
            готовые бренды для бизнеса в сфере декора, освещения и техники.
            Регистрация продлена на 1 год.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Связаться для покупки
            </a>
            <a
              href="#domains"
              className="rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:bg-accent"
            >
              Смотреть домены ({domains.length})
            </a>
          </div>
        </div>
      </header>

      <main id="domains" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Список доменов</h2>
            <p className="mt-2 text-muted-foreground">
              Каждый домен зарегистрирован на 1 год и готов к передаче новому владельцу.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <article
              key={d.name}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold tracking-tight">{d.name}</h3>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                  {d.category}
                </span>
              </div>
              <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Срок</dt>
                  <dd className="font-medium text-foreground">1 год</dd>
                </div>
                <div className="flex justify-between">
                  <dt>С</dt>
                  <dd>{d.from}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>До</dt>
                  <dd>{d.to}</dd>
                </div>
              </dl>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
              >
                Купить домен →
              </a>
            </article>
          ))}
        </div>
      </main>

      <section id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Заинтересовал домен?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Напишите нам — обсудим стоимость и оформим передачу прав на выбранный домен.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:owner@example.com"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Написать на почту
            </a>
            <a
              href="https://wa.me/77000000000"
              className="rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold transition hover:bg-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Продажа доменов .kz
        </div>
      </footer>
    </div>
  );
}
