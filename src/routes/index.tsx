import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Sparkles, Zap, ShoppingCart, ArrowRight, Tag } from "lucide-react";

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
  category: string;
};

const domains: Domain[] = [
  { name: "sonex.kz", category: "Бренд" },
  { name: "maitre-deco.kz", category: "Декор" },
  { name: "maitre-decor.kz", category: "Декор" },
  { name: "manders.kz", category: "Бренд" },
  { name: "decorazza.kz", category: "Декор" },
  { name: "bayramix.kz", category: "Декор" },
  { name: "tutsvet.kz", category: "Свет" },
  { name: "chiaro.kz", category: "Свет" },
  { name: "mw-light.kz", category: "Свет" },
  { name: "leds-c4.kz", category: "Свет" },
  { name: "casadiluce.kz", category: "Свет" },
  { name: "masiero.kz", category: "Свет" },
  { name: "asfour.kz", category: "Хрусталь" },
  { name: "asfourcrystal.kz", category: "Хрусталь" },
  { name: "satechi.kz", category: "Техника" },
];

const categoryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  Бренд: { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200", glow: "shadow-sky-200" },
  Декор: { bg: "bg-rose-100", text: "text-rose-700", border: "border-rose-200", glow: "shadow-rose-200" },
  Свет: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200", glow: "shadow-amber-200" },
  Хрусталь: { bg: "bg-violet-100", text: "text-violet-700", border: "border-violet-200", glow: "shadow-violet-200" },
  Техника: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200", glow: "shadow-emerald-200" },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-300 opacity-40 blur-3xl animate-blob-pulse" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-300 opacity-30 blur-3xl animate-blob-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-cyan-300 opacity-30 blur-3xl animate-blob-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="relative">
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              Доступно к продаже — {domains.length} доменов
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl"
            >
              <span className="text-gradient">Премиум домены</span>
              <br />
              <span className="text-slate-800">в зоне .kz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-slate-500 md:text-xl"
            >
              Готовые бренды для бизнеса в сфере декора, освещения и техники.
              Выбирай, пиши — и домен твой!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#domains"
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300"
              >
                <ShoppingCart className="h-5 w-5" />
                Смотреть домены
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                <Zap className="h-5 w-5 text-amber-500" />
                Связаться
              </a>
            </motion.div>
          </div>
        </header>

        {/* Domains grid */}
        <main id="domains" className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center gap-3"
          >
            <Globe className="h-7 w-7 text-indigo-500" />
            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">Все домены</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {domains.map((d) => {
              const colors = categoryColors[d.category] ?? categoryColors["Бренд"];
              return (
                <motion.article
                  key={d.name}
                  variants={item}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-800">{d.name}</h3>
                    <span
                      className={`shrink-0 rounded-full ${colors.bg} ${colors.text} px-3 py-1 text-xs font-bold`}
                    >
                      {d.category}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                    <Tag className="h-4 w-4" />
                    <span>Готов к передаче</span>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl border ${colors.border} ${colors.bg} px-5 py-3 text-sm font-bold ${colors.text} transition group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600`}
                  >
                    Купить домен
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </main>

        {/* Contact */}
        <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-16 text-center shadow-2xl shadow-indigo-200 md:px-16 md:py-24"
          >
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              Заинтересовал домен?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-indigo-100">
              Напиши — обсудим стоимость и оформим передачу прав на выбранное имя.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:owner@example.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Написать на почту
              </a>
              <a
                href="https://wa.me/77000000000"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Продажа доменов .kz — все права защищены
          </div>
        </footer>
      </div>
    </div>
  );
}
