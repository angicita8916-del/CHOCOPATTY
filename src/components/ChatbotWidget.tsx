import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, MapPin, Banknote, ShoppingBag, ArrowRight, RefreshCw, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import mascotAvatar from '../assets/images/chokopatty_mascot_avatar_1791372201803.jpg';
import { CONTACT_INFO } from '../data/products';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
  ctaUrl?: string;
  ctaText?: string;
  timestamp: string;
}

const FAQ_LIST = [
  '🎬 Ver video de bienvenida',
  '¿Puedo personalizar mi regalo?',
  '¿Qué productos tienen?',
  '¿Cuánto cuesta?',
  '¿Cómo puedo hacer un pedido?',
  '¿Qué formas de pago tienen?',
];

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [inputValue, setInputValue] = useState('');
  
  // Guided flow state: 'idle' | 'descubre' | 'recomienda' | 'personaliza' | 'whatsapp'
  const [flowStep, setFlowStep] = useState<string>('idle');
  const [flowCategory, setFlowCategory] = useState<string>('');
  const [flowOccasion, setFlowOccasion] = useState<string>('');
  const [flowZone, setFlowZone] = useState<string>('');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: '¡Bienvenidos a Chokopatty! Soy tu asistente de atención al cliente de Chokopatty. 💕✨ ¿En qué puedo ayudarte hoy para endulzar tu día?',
      options: FAQ_LIST,
      timestamp: 'Ahora',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const addBotMessage = (
    text: string,
    options?: string[],
    ctaUrl?: string,
    ctaText?: string
  ) => {
    const newMsg: ChatMessage = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      sender: 'bot',
      text,
      options,
      ctaUrl,
      ctaText,
      timestamp: 'Ahora',
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const addUserMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      sender: 'user',
      text,
      timestamp: 'Ahora',
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const handleSelectOption = (option: string) => {
    addUserMessage(option);
    handleBotLogic(option);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const text = inputValue.trim();
    setInputValue('');
    addUserMessage(text);
    handleBotLogic(text);
  };

  const handleBotLogic = (query: string) => {
    const q = query.toLowerCase();

    // 0. FAQ: Video de bienvenida
    if (q.includes('video') || q.includes('ver video') || q.includes('cocina')) {
      const el = document.getElementById('video-bienvenida');
      el?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        addBotMessage(
          '🎬 ¡Aquí arriba tienes nuestro video oficial de bienvenida! En él te muestro nuestra cocina mágica y cómo preparamos con amor cada una de nuestras recetas. Puedes darle a reproducir para conocerme y escuchar mi saludo. 🧁✨',
          ['¿Qué productos tienen?', '¿Cómo puedo hacer un pedido?', '¿Cuánto cuesta?']
        );
      }, 300);
      return;
    }

    // 1. FAQ: Formas de pago
    if (q.includes('pago') || q.includes('formas de pago') || q.includes('pagar') || q.includes('tarjeta') || q.includes('bizum')) {
      setTimeout(() => {
        addBotMessage(
          '💵 En Chokopatty disponemos exclusivamente de PAGO EN EFECTIVO AL RECIBIR EL PRODUCTO A DOMICILIO en Gerindote y Torrijos. No tienes que adelantar dinero por internet; pagas en mano cuando te entregamos tu detalle en perfecto estado. ✨',
          ['¿Dónde hacen entregas?', '¿Cómo puedo hacer un pedido?', 'Quiero ver los productos']
        );
      }, 400);
      return;
    }

    // 2. FAQ: Zonas / Entregas
    if (q.includes('donde') || q.includes('zona') || q.includes('envio') || q.includes('entrega') || q.includes('gerindote') || q.includes('torrijos')) {
      setTimeout(() => {
        addBotMessage(
          '🛵 Realizamos entregas a domicilio ÚNICAMENTE en las localidades de Gerindote y Torrijos, para asegurar la frescura de nuestras mini donas y el mimo en cada paquete. ¡Te lo llevamos hasta la puerta de tu casa!',
          ['¿Qué productos tienen?', '¿Cómo puedo hacer un pedido?', '¿Qué formas de pago tienen?']
        );
      }, 400);
      return;
    }

    // 3. FAQ: ¿Puedo personalizar mi regalo?
    if (q.includes('personalizar') || q.includes('personalizo') || q.includes('foto') || q.includes('mensaje')) {
      setTimeout(() => {
        addBotMessage(
          '💖 ¡Sí, por supuesto! Nos encanta la magia de personalizar. Puedes incluir dedicatorias emotivas, nombres en madera/tarjetas, fotos especiales (en nuestras Cajas con Chuches de 15 € o packs especiales), y adaptar los colores y golosinas a la persona homenajeada.',
          ['Personalizar un regalo de 30 €', 'Personalizar caja de chuches de 15 €', 'Personalizar Mini Donas']
        );
      }, 400);
      return;
    }

    // 4. FAQ: ¿Qué productos tienen?
    if (q.includes('productos') || q.includes('tienen') || q.includes('que hay') || q.includes('catalogo')) {
      setTimeout(() => {
        addBotMessage(
          '✨ Tenemos dos líneas mágicas:\n\n🍩 LÍNEA 1: Mini Donas artesanales con toppings incluidos gratis:\n• 4 Mini Donas (2 €) - Máx. 2 toppings\n• 6 Mini Donas (5 €) - Máx. 2 toppings\n• 12 Mini Donas (8 €) - Máx. 4 toppings\n(Fresas, Chispitas, Bolitas, Oreo, Nuez, M&M).\n\n🎁 LÍNEA 2: Regalos y Detalles Personalizados:\n• Detalles para regalar (30 €)\n• Frascos y Cajas con chuches (15 €).\n\n¿Cuál te gustaría descubrir?',
          ['Descubrir Mini Donas 🍩', 'Descubrir Regalos 🎁', 'Iniciar Asistente de Pedido 🪄']
        );
      }, 400);
      return;
    }

    // 5. FAQ: ¿Cuánto cuesta? / Precios / Toppings
    if (q.includes('cuanto cuesta') || q.includes('precio') || q.includes('cuanto sale') || q.includes('precios') || q.includes('topping')) {
      setTimeout(() => {
        addBotMessage(
          '🏷️ Aquí tienes nuestra lista de precios y toppings oficiales:\n\n🍩 MINI DONAS (Toppings incluidos gratis):\n• 4 Mini Donas: 2 € (Máximo 2 toppings)\n• 6 Mini Donas: 5 € (Máximo 2 toppings)\n• 12 Mini Donas: 8 € (Máximo 4 toppings)\n\n🎁 REGALOS Y DETALLES:\n• Frascos y Cajas de Chuches: 15 €\n• Cajas Detalles Completos: 30 €\n\n🛵 Entregas exclusivas en Gerindote y Torrijos con pago en efectivo.',
          ['Quiero pedir Mini Donas', 'Quiero un regalo de 30 €', 'Hacer un pedido ahora']
        );
      }, 400);
      return;
    }

    // 6. FAQ: ¿Cómo puedo hacer un pedido? / WhatsApp Flow
    if (q.includes('como puedo hacer') || q.includes('hacer un pedido') || q.includes('pedir') || q.includes('comprar')) {
      setTimeout(() => {
        addBotMessage(
          '📲 ¡Es súper fácil! Solo cuéntame qué producto quieres, tu localidad (Gerindote o Torrijos) y los datos de personalización. O si prefieres, pulsa el botón directo para hablar con nosotros en WhatsApp al 666119849.',
          ['Guiarme paso a paso 🪄', 'Ir directo a WhatsApp 💬'],
          'https://wa.me/34666119849?text=' + encodeURIComponent('¡Hola Chokopatty! Quiero hacer una consulta para un pedido a domicilio.'),
          'Abrir WhatsApp con Chokopatty 📲'
        );
      }, 400);
      return;
    }

    // Guided Flow: Paso a paso "Descubre -> Recomienda -> Resuelve dudas -> Personaliza -> Dirige a WhatsApp"
    if (q.includes('guiarme') || q.includes('asistente') || q.includes('iniciar') || q.includes('descubrir')) {
      setFlowStep('descubre');
      setTimeout(() => {
        addBotMessage(
          '✨ ¡Genial! Vamos a diseñar el detalle perfecto paso a paso.\n\n👉 **Paso 1 (Descubre):** ¿Qué tipo de dulce o detalle buscas hoy?',
          ['1. Mini Donas con Toppings 🍩', '2. Regalo para Mamá 🌸', '3. Regalo para mi Pareja ❤️', '4. Regalo para una Amiga 👯‍♀️', '5. Frasco o Caja con Chuches 🍬']
        );
      }, 400);
      return;
    }

    if (flowStep === 'descubre') {
      setFlowCategory(query);
      setFlowStep('recomienda');
      setTimeout(() => {
        addBotMessage(
          `🌸 ¡Excelente elección para *${query}*!\n\n👉 **Paso 2 (Recomienda):** ¿Para qué ocasión especial lo estás preparando?`,
          ['Cumpleaños 🎉', 'Aniversario o Amor 💘', 'Agradecimiento / Sorpresa ✨', 'Antojo personal o merienda 😋']
        );
      }, 400);
      return;
    }

    if (flowStep === 'recomienda') {
      setFlowOccasion(query);
      setFlowStep('personaliza');
      setTimeout(() => {
        addBotMessage(
          `🎉 ¡Entendido! Ocasión: *${query}*.\n\n👉 **Paso 3 (Personaliza y Ubicación):** Recuerda que entregamos en Gerindote y Torrijos con pago en efectivo al recibir en puerta. ¿En cuál de estas localidades estás?`,
          ['Gerindote 📍', 'Torrijos 📍']
        );
      }, 400);
      return;
    }

    if (flowStep === 'personaliza') {
      setFlowZone(query);
      setFlowStep('whatsapp');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#f43f5e', '#a855f7'],
      });

      const orderSummary = `¡Hola Chokopatty! 🍩✨\nVengo desde el asistente de la web con el siguiente pedido personalizado:\n\n• Producto deseado: ${flowCategory || 'Detalle Chokopatty'}\n• Ocasión: ${flowOccasion || 'Celebración'}\n• Zona de entrega: ${query}\n• Método de pago: Efectivo al recibir en domicilio.\n\n¿Me confirman disponibilidad para tomar mis datos y el mensaje personalizado? 💕`;

      setTimeout(() => {
        addBotMessage(
          `✨ ¡Listo! Tu pedido está preparado y estructurado. Te recuerdo que el pago es en efectivo en tu domicilio al entregarlo en ${query}.\n\nPulsa el botón de abajo para enviar este resumen directamente a nuestro WhatsApp (666119849) y coordinar la hora de entrega:`,
          ['Hacer otra consulta', 'Reiniciar asistente 🔄'],
          `https://wa.me/34666119849?text=${encodeURIComponent(orderSummary)}`,
          'Enviar mi pedido a WhatsApp (666119849) 📲'
        );
      }, 500);
      return;
    }

    // Default friendly response
    setTimeout(() => {
      addBotMessage(
        '¡Con mucho gusto te oriento! En Chokopatty tenemos deliciosas mini donas (desde 2 € con toppings incluidos) y regalos personalizados (15 € y 30 €) con entrega en Gerindote y Torrijos y pago en efectivo al recibir. ¿Te gustaría ver las opciones o hablar por WhatsApp?',
        FAQ_LIST,
        'https://wa.me/34666119849?text=' + encodeURIComponent(`¡Hola Chokopatty! Consulta: "${query}"`),
        'Chatear al WhatsApp 666119849 📲'
      );
    }, 400);
  };

  const handleResetFlow = () => {
    setFlowStep('idle');
    setFlowCategory('');
    setFlowOccasion('');
    setFlowZone('');
    addBotMessage(
      '¡Reiniciamos! Dime en qué puedo ayudarte o elige una pregunta rápida:',
      FAQ_LIST
    );
  };

  return (
    <>
      {/* Floating Trigger Widget at Bottom Right */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
        {/* Welcome Teaser Bubble */}
        {!isOpen && showTeaser && (
          <div className="mb-2 max-w-xs bg-white text-slate-800 p-3 rounded-2xl shadow-xl border-2 border-pink-200 text-xs font-bold animate-float-soft relative flex items-start gap-2">
            <span className="text-lg">🍩</span>
            <div>
              <p className="text-pink-600 font-display font-black text-sm">
                ¡Hola! Soy Patty 💕
              </p>
              <p className="text-slate-600 font-medium text-[11px] leading-tight">
                ¿Te ayudo a elegir tus mini donas o regalo ideal?
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTeaser(false);
              }}
              className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r-2 border-b-2 border-pink-200 transform rotate-45" />
          </div>
        )}

        {/* Main Floating Button with Anime Girl Avatar */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setHasInteracted(true);
            setShowTeaser(false);
          }}
          className="relative group p-1 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 shadow-xl shadow-pink-300 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Abrir asistente de Chokopatty"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white bg-pink-100 flex items-center justify-center relative">
            <img
              src={mascotAvatar}
              alt="Patty Asistente Anime de Chokopatty"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Online badge */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </span>

          {/* Sparkle badge */}
          <span className="absolute -top-1 -left-1 bg-amber-400 text-amber-950 p-1 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>

      {/* Expanded Chatbot Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-h-[82vh] h-[580px] bg-white rounded-3xl shadow-2xl border-2 border-pink-200 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white p-4 flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white bg-pink-100 shadow-sm shrink-0">
                <img
                  src={mascotAvatar}
                  alt="Avatar Asistente Patty"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-black text-base text-white">
                    Patty Asistente
                  </h3>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">
                    Anime Bot ✨
                  </span>
                </div>
                <p className="text-[11px] text-pink-100 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" />
                  Atención Chokopatty en línea
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetFlow}
                title="Reiniciar conversación"
                className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Key Quick Notice Bar */}
          <div className="bg-amber-50 border-b border-amber-200 px-3 py-1.5 text-[11px] text-amber-900 font-bold flex items-center justify-between shrink-0">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-600" />
              Gerindote & Torrijos
            </span>
            <span className="flex items-center gap-1">
              <Banknote className="w-3 h-3 text-emerald-600" />
              Pago en efectivo
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gradient-to-b from-[#FFF9F6] to-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-pink-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Optional WhatsApp Button generated */}
                {msg.ctaUrl && (
                  <div className="mt-2 w-full max-w-[85%]">
                    <a
                      href={msg.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-200 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{msg.ctaText || 'Contactar por WhatsApp'}</span>
                    </a>
                  </div>
                )}

                {/* Option Chips for quick click */}
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(opt)}
                        className="px-2.5 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-700 text-[11px] font-bold transition-all text-left flex items-center gap-1 hover:scale-102"
                      >
                        <ChevronRight className="w-3 h-3 text-pink-400 shrink-0" />
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ shortcut carousel */}
          <div className="p-2 bg-slate-50 border-t border-slate-100 overflow-x-auto whitespace-nowrap flex gap-1.5 no-scrollbar">
            {FAQ_LIST.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleSelectOption(faq)}
                className="inline-block text-[10px] font-bold px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-pink-300 hover:text-pink-600 shrink-0"
              >
                {faq}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-pink-100 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Pregúntame lo que quieras..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3.5 py-2.5 bg-slate-100 focus:bg-white text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400 text-slate-800"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-pink-600 text-white hover:bg-pink-700 disabled:opacity-40 transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
