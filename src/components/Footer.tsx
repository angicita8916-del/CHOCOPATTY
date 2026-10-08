import React from 'react';
import { Phone, Mail, MapPin, Banknote, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-slate-200 pt-16 pb-12 relative overflow-hidden border-t-4 border-pink-500">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/chokoPatty.png"
                alt="ChocoPatty - Chocolates que alegran el corazón"
                className="h-16 w-auto object-contain bg-white/10 p-1 rounded-2xl backdrop-blur-xs"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight block">
                  ChocoPatty
                </span>
                <span className="text-xs text-amber-300 font-bold tracking-wide">
                  Chocolates que alegran el corazón
                </span>
              </div>
            </div>

            <p className="text-pink-300 font-display font-bold text-base sm:text-lg leading-snug">
              “{CONTACT_INFO.slogan}”
            </p>

            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
              Emprendimiento artesanal dedicado a crear momentos inolvidables a través de mini donas decoradas con toppings y regalos personalizados.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Atención personalizada todos los días</span>
            </div>
          </div>

          {/* Contact Direct Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-pink-400">
              Canales de Contacto Directo
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold">
                      WhatsApp / Teléfono
                    </span>
                    <span className="font-bold text-emerald-400 group-hover:text-emerald-300">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-pink-500 text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold">
                      Correo Electrónico
                    </span>
                    <span className="font-bold text-slate-200 group-hover:text-pink-300 break-all text-xs sm:text-sm">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Delivery & Payment Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-pink-400">
              Cobertura & Pago
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-800/50 border border-slate-700">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Zonas de Entrega:</strong>
                  <span>Gerindote y Torrijos a domicilio.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-800/50 border border-slate-700">
                <Banknote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Forma de Pago:</strong>
                  <span>Exclusivamente en efectivo al recibir tu pedido en puerta.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Chokopatty. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para endulzar tus momentos en Gerindote & Torrijos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
