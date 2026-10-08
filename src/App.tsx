/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { MiniDonasSection } from './components/MiniDonasSection';
import { RegalosSection } from './components/RegalosSection';
import { InspirationShowcase } from './components/InspirationShowcase';
import { DeliveryPolicySection } from './components/DeliveryPolicySection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF9F6] text-slate-800 selection:bg-pink-300 selection:text-pink-900">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Video de Bienvenida Oficial ChocoPatty */}
          <VideoSection />

          {/* Línea 1: Mini Donas y Toppings */}
          <MiniDonasSection />

          {/* Línea 2: Regalos y Detalles Personalizados */}
          <RegalosSection />

          {/* Galería de creaciones e inspiración artesanal */}
          <InspirationShowcase />

          {/* Condiciones de Entrega y Pago (Gerindote y Torrijos / Efectivo) */}
          <DeliveryPolicySection />
        </main>

        {/* Footer & Contactos */}
        <Footer />

        {/* Interactive Anime Chatbot Assistant ("Patty Asistente") */}
        <ChatbotWidget />

        {/* Cart & Order Drawer */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
