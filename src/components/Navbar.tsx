import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles, MapPin, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../data/products';

export const Navbar: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-xs transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 text-white text-xs font-semibold py-1.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            Entregas a domicilio exclusivas en <strong>Gerindote</strong> y <strong>Torrijos</strong>
          </span>
          <span className="hidden sm:inline opacity-70">•</span>
          <span className="flex items-center gap-1">
            <Banknote className="w-3.5 h-3.5" />
            Pago en <strong>efectivo al recibir</strong> en tu puerta
          </span>
          <span className="hidden md:inline opacity-70">•</span>
          <span className="hidden md:flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            ¡Toppings incluidos sin coste adicional!
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo with Official Uploaded Image */}
        <a href="#" className="flex items-center gap-2 group py-1">
          <img
            src="/chokoPatty.png"
            alt="ChocoPatty - Chocolates que alegran el corazón"
            className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            href="#video-bienvenida"
            className="px-3 py-2 rounded-xl text-sm font-bold text-pink-600 hover:text-pink-700 hover:bg-pink-50 transition-colors flex items-center gap-1.5"
          >
            <span>🎬</span>
            <span>Video</span>
          </a>
          <a
            href="#mini-donas"
            className="px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-pink-600 hover:bg-pink-50/80 transition-colors"
          >
            🍩 Mini Donas
          </a>
          <a
            href="#regalos-detalles"
            className="px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-pink-600 hover:bg-pink-50/80 transition-colors"
          >
            🎁 Regalos & Detalles
          </a>
          <a
            href="#condiciones"
            className="px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-pink-600 hover:bg-pink-50/80 transition-colors"
          >
            🛵 Entrega y Pago
          </a>
          <a
            href="#contacto"
            className="px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-pink-600 hover:bg-pink-50/80 transition-colors"
          >
            💌 Contacto
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Cart / Pedido Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-600 transition-colors border border-pink-200/60"
            aria-label="Ver pedido"
            title="Ver mi pedido"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-sm">
                {totalCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm px-4 py-2.5 rounded-2xl shadow-md shadow-emerald-200 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pide al {CONTACT_INFO.phoneDisplay}</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-2xl text-slate-600 hover:text-pink-600 hover:bg-pink-50 md:hidden"
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-pink-100 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <a
            href="#video-bienvenida"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl font-bold text-pink-600 hover:bg-pink-50"
          >
            🎬 Video de Bienvenida
          </a>
          <a
            href="#mini-donas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl font-bold text-slate-700 hover:bg-pink-50 hover:text-pink-600"
          >
            🍩 Línea 1: Mini Donas & Toppings
          </a>
          <a
            href="#regalos-detalles"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl font-bold text-slate-700 hover:bg-pink-50 hover:text-pink-600"
          >
            🎁 Línea 2: Regalos y Detalles
          </a>
          <a
            href="#condiciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl font-bold text-slate-700 hover:bg-pink-50 hover:text-pink-600"
          >
            🛵 Condiciones de Entrega y Pago
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl font-bold text-slate-700 hover:bg-pink-50 hover:text-pink-600"
          >
            💌 Contacto y Ubicación
          </a>

          <div className="pt-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-2xl shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chatear por WhatsApp ({CONTACT_INFO.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
