import React, { useState } from 'react';
import { Sparkles, Heart, Gift, MessageCircle, Camera } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

interface GalleryCard {
  title: string;
  category: string;
  emoji: string;
  description: string;
  accent: string;
}

const CREATION_HIGHLIGHTS: GalleryCard[] = [
  {
    title: 'Brochetas de Mini Donas',
    category: 'Presentación Dulce',
    emoji: '🍡',
    description: 'Mini donas glaseadas en varilla decoradas con lazo rosa de satén, ideales para fiestas infantiles y cumpleaños.',
    accent: 'bg-pink-100 text-pink-700 border-pink-200',
  },
  {
    title: 'Cajas de Madera Grabadas para Mamá',
    category: 'Detalle Especial 30 €',
    emoji: '🪵',
    description: 'Caja con frases talladas ("La Mejor Mamá Del Mundo", "Te Amo Mamá") repleta de chocolates finos y golosinas.',
    accent: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    title: 'Caja de 12 Mini Donas Temáticas',
    category: 'Pack Fiesta 8 €',
    emoji: '🍩',
    description: '12 diseños únicos: corazones, mariposas, nubes de azúcar, chispitas arcoíris y glaseados de fantasía.',
    accent: 'bg-rose-100 text-rose-700 border-rose-200',
  },
  {
    title: 'Peluche, Globo Burbuja & Chocolates',
    category: 'Detalle Romántico 30 €',
    emoji: '🧸',
    description: 'Osito de peluche blanco, globo transparente con mensaje ("Feliz Cumpleaños Mi Princesa") y variedad de chuches.',
    accent: 'bg-purple-100 text-purple-700 border-purple-200',
  },
  {
    title: 'Vasitos Dulces con Mini Donas',
    category: 'Snack To-Go',
    emoji: '🥤',
    description: 'Vaso con tapa domo lleno de mini donas glaseadas con sprinkles multicolores para meriendas y detalles exprés.',
    accent: 'bg-sky-100 text-sky-700 border-sky-200',
  },
  {
    title: 'Frasquitos con Molinillos de Viento',
    category: 'Frascos 15 €',
    emoji: '🎐',
    description: 'Frasco de cristal con corcho, confites multicolores y molinillos artesanales hechos a mano.',
    accent: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
];

export const InspirationShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-black uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Nuestras Creaciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Magia & Creatividad en cada Pedido
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            Cada detalle es preparado a mano con dedicación absoluta para crear momentos memorables en Gerindote y Torrijos.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREATION_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-gradient-to-br from-pink-50/40 via-white to-amber-50/20 border-2 border-pink-100 hover:border-pink-300 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-black px-3 py-1 rounded-xl border ${item.accent}`}>
                    {item.category}
                  </span>
                  <span className="text-3xl group-hover:scale-125 transition-transform">
                    {item.emoji}
                  </span>
                </div>

                <h3 className="text-xl font-display font-black text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Hecho con amor
                </span>
                <a
                  href={`https://wa.me/34666119849?text=${encodeURIComponent(
                    `¡Hola Chokopatty! Me encanta la opción de "${item.title}". ¿Podrían darme más detalles?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-black flex items-center gap-1"
                >
                  <span>Pedir así</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
