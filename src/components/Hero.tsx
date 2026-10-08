import React from 'react';
import { ArrowDown, Sparkles, Heart, MapPin, Banknote, Gift } from 'lucide-react';
import heroImg from '../assets/images/chokopatty_hero_anime_1791372162674.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#FFF5F7] via-[#FFF9F6] to-white">
      {/* Decorative Anime Floating Elements */}
      <div className="absolute top-12 left-6 text-2xl animate-float-soft opacity-70 pointer-events-none select-none">
        🌸
      </div>
      <div className="absolute top-28 right-10 text-3xl animate-float-soft opacity-80 pointer-events-none select-none [animation-delay:1.5s]">
        ✨
      </div>
      <div className="absolute bottom-16 left-12 text-2xl animate-float-soft opacity-70 pointer-events-none select-none [animation-delay:2s]">
        🍩
      </div>
      <div className="absolute bottom-10 right-20 text-2xl animate-float-soft opacity-60 pointer-events-none select-none [animation-delay:0.8s]">
        🎀
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Official Brand Logo & Tagline Card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3 sm:p-4 rounded-3xl bg-white border-2 border-pink-200/90 shadow-md shadow-pink-100">
              <img
                src="/chokoPatty.png"
                alt="Logo oficial ChocoPatty"
                className="h-16 sm:h-20 w-auto object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-center sm:text-left">
                <span className="inline-block text-[11px] font-black tracking-wider uppercase text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full mb-1">
                  Chocolates que alegran el corazón ✨
                </span>
                <p className="text-xs text-slate-500 font-semibold">
                  Marca Oficial de Mini Donas y Detalles Personalizados
                </p>
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.15]">
              Dulzura que emociona el corazón con{' '}
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 bg-clip-text text-transparent underline decoration-pink-300 decoration-wavy decoration-from-font">
                ChocoPatty
              </span>
            </h1>

            {/* Required Brand Slogan */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white/90 border-2 border-pink-200/90 shadow-sm shadow-pink-100 relative">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 absolute -top-2.5 -left-2.5 transform -rotate-12" />
              <p className="text-xl sm:text-2xl font-display font-semibold text-rose-600 leading-snug">
                “Detalles llenos de amor y mucha magia que hacen sonreír”
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Mini donas recién horneadas con toppings incluidos gratis y detalles sorpresa personalizados elaborados a mano para celebrar en <strong className="text-slate-800">Gerindote</strong> y <strong className="text-slate-800">Torrijos</strong>.
            </p>

            {/* Key Delivery & Payment Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Envíos: Gerindote & Torrijos</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
                <Banknote className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pago en efectivo al recibir</span>
              </div>
              <a
                href="#video-bienvenida"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-pink-100 border border-pink-300 text-pink-700 text-xs font-bold hover:bg-pink-200 transition-colors"
              >
                <span>🎬</span>
                <span>Ver Video de Bienvenida</span>
              </a>
            </div>

            {/* The 2 Required Main CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* CTA 1: Mini Donas */}
              <a
                href="#mini-donas"
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-display font-bold text-base sm:text-lg shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>Descubre nuestras Mini Donas</span>
                <span className="text-xl group-hover:rotate-12 transition-transform">🍩</span>
                <ArrowDown className="w-4 h-4 ml-1 animate-bounce" />
              </a>

              {/* CTA 2: Regalos */}
              <a
                href="#regalos-detalles"
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white border-2 border-pink-400 text-pink-700 hover:bg-pink-50/70 font-display font-bold text-base sm:text-lg shadow-md shadow-pink-100 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>Descubre nuestros Regalos</span>
                <Gift className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                <ArrowDown className="w-4 h-4 ml-1 opacity-70 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Anime Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-400/30 via-amber-300/30 to-purple-400/30 rounded-3xl blur-2xl transform rotate-2" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-pink-200/80 bg-white group">
                <img
                  src={heroImg}
                  alt="Chokopatty deliciosas mini donas y dulces coloridos con estética anime"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Sweet Badge in Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-pink-100 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">✨</span>
                    <div>
                      <p className="font-display font-bold text-slate-800 text-sm">
                        Hecho a mano con ternura
                      </p>
                      <p className="text-xs text-pink-600 font-semibold">
                        Toppings 100% incluidos
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 bg-pink-100 text-pink-700 rounded-xl">
                    Desde 2 €
                  </span>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-gradient-to-r from-amber-400 to-rose-400 text-white text-xs font-black px-3.5 py-2 rounded-2xl shadow-lg transform rotate-6 animate-pulse-subtle flex items-center gap-1.5">
                <span>🎉 100% Artesanal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
