import React from 'react';
import { MapPin, Banknote, ShieldCheck, Clock, Truck, Sparkles, HeartHandshake } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export const DeliveryPolicySection: React.FC = () => {
  return (
    <section id="condiciones" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/40 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Transparencia y Confianza</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            Condiciones de Entrega y Pago
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            En Chokopatty cuidamos cada detalle para que tu experiencia sea cómoda, segura y sin complicaciones.
          </p>
        </div>

        {/* 2 Main Spotlight Cards (Delivery Zone & Cash Payment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Card 1: Zona de Entrega */}
          <div className="rounded-3xl p-8 bg-white border-2 border-rose-200 shadow-xl shadow-rose-100/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/40 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-rose-200 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>

              <div className="inline-block text-xs font-black text-rose-600 uppercase tracking-wider mb-2">
                Zonas Exclusivas de Reparto
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-3">
                Gerindote & Torrijos
              </h3>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6">
                Para garantizar la máxima frescura en nuestras mini donas y el cuidado impecable de los regalos, realizamos entregas a domicilio <strong>únicamente en las localidades de Gerindote y Torrijos</strong>.
              </p>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center gap-3">
              <Truck className="w-5 h-5 text-rose-600 shrink-0" />
              <p className="text-xs font-bold text-rose-900">
                Llevamos tu pedido directamente hasta la puerta de tu casa o el domicilio que nos indiques.
              </p>
            </div>
          </div>

          {/* Card 2: Forma de Pago */}
          <div className="rounded-3xl p-8 bg-white border-2 border-emerald-200 shadow-xl shadow-emerald-100/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-emerald-200 group-hover:scale-110 transition-transform">
                <Banknote className="w-7 h-7" />
              </div>

              <div className="inline-block text-xs font-black text-emerald-600 uppercase tracking-wider mb-2">
                Método de Pago Único y Seguro
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-3">
                Pago en Efectivo al Recibir
              </h3>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6">
                Aceptamos <strong className="text-slate-900">exclusivamente pago en efectivo en el momento de la entrega a domicilio</strong>. No necesitas pagar nada por adelantado por internet: revisas tu pedido en mano y pagas cómodamente.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
              <HeartHandshake className="w-5 h-5 text-emerald-700 shrink-0" />
              <p className="text-xs font-bold text-emerald-900">
                100% de confianza mutua: entregamos en mano tu detalle en perfecto estado.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-step How to Order */}
        <div className="rounded-3xl bg-white border border-pink-100 p-8 sm:p-10 shadow-lg">
          <h3 className="text-2xl font-display font-black text-slate-900 text-center mb-8">
            ¿Cómo realizar tu pedido en 3 simples pasos?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-pink-100 text-pink-700 font-display font-black text-xl flex items-center justify-center mb-4">
                1
              </div>
              <h4 className="font-display font-bold text-lg text-slate-800 mb-2">
                Elige tu Producto
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Selecciona tus Mini Donas con tus toppings favoritos o el detalle de regalo que quieras obsequiar.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-pink-100 text-pink-700 font-display font-black text-xl flex items-center justify-center mb-4">
                2
              </div>
              <h4 className="font-display font-bold text-lg text-slate-800 mb-2">
                Escríbenos por WhatsApp
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Envíanos los datos de entrega en Gerindote o Torrijos, y los mensajes o fotos que quieras personalizar.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 font-display font-black text-xl flex items-center justify-center mb-4">
                3
              </div>
              <h4 className="font-display font-bold text-lg text-slate-800 mb-2">
                Recibe y Paga en Efectivo
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Llevamos tu pedido con todo el amor y magia. Pagas en efectivo al recibirlo en tu puerta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
