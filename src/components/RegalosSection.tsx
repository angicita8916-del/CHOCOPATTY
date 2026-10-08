import React, { useState } from 'react';
import { Gift, Heart, Sparkles, Check, ShoppingBag, MessageCircle, Camera, PenTool, User, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GIFTS_30, GIFTS_15, GiftItem, CONTACT_INFO } from '../data/products';
import { useCart } from '../context/CartContext';
import giftsArtImg from '../assets/images/chokopatty_gifts_art_1791372308074.jpg';

export const RegalosSection: React.FC = () => {
  const { addItem } = useCart();
  const [activeModalItem, setActiveModalItem] = useState<GiftItem | null>(null);
  const [recipientName, setRecipientName] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const openCustomizeModal = (item: GiftItem) => {
    setActiveModalItem(item);
    setRecipientName('');
    setCustomMessage('');
    setSpecialNote('');
  };

  const handleSaveGiftOrder = () => {
    if (!activeModalItem) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#ec4899', '#3b82f6', '#fbbf24'],
    });

    addItem({
      title: activeModalItem.title,
      type: 'regalo',
      price: activeModalItem.price,
      quantity: 1,
      recipientName: recipientName.trim() ? recipientName.trim() : undefined,
      customMessage: customMessage.trim() ? customMessage.trim() : undefined,
      notes: specialNote.trim() ? specialNote.trim() : undefined,
    });

    setSuccessToast(`¡${activeModalItem.title} añadido a tu pedido!`);
    setActiveModalItem(null);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleDirectWhatsApp = (item: GiftItem) => {
    const text = `¡Hola Chokopatty! 🎁 Me interesa el regalo *${item.title}* (${item.price} €).\n¿Me podrías asesorar para personalizarlo con mensaje para entregar en Gerindote/Torrijos?`;
    window.open(`https://wa.me/34666119849?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="regalos-detalles" className="py-16 md:py-24 bg-gradient-to-b from-white via-pink-50/30 to-purple-50/20 relative scroll-mt-20">
      {/* Decorative top accent */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>Línea 2 Exclusiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            Regalos & Detalles Personalizados
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Sorpresas emotivas preparadas con golosinas, peluches, fotos y dedicatorias que llegan directo al corazón.
          </p>
        </div>

        {/* Hero Banner for Gift Line */}
        <div className="rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white p-6 sm:p-10 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 bg-white rounded-full blur-3xl transform translate-x-10 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-black bg-white/20 text-white px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Magia que emociona
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug">
                Creando sonrisas inolvidables para las personas que más quieres
              </h3>
              <p className="text-sm sm:text-base text-pink-100 font-medium max-w-xl">
                Tú eliges a quién quieres sorprender y nosotros nos encargamos de que cada caja, lazo, dulce y mensaje quede perfecto.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-white/15 px-3 py-1.5 rounded-xl text-xs font-bold">
                  🧸 Peluches & Globos
                </span>
                <span className="bg-white/15 px-3 py-1.5 rounded-xl text-xs font-bold">
                  💌 Mensajes en madera o tarjeta
                </span>
                <span className="bg-white/15 px-3 py-1.5 rounded-xl text-xs font-bold">
                  📸 Fotos con tus recuerdos
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-2xl overflow-hidden border-2 border-white/60 shadow-2xl max-w-xs rotate-2 hover:rotate-0 transition-transform">
                <img
                  src={giftsArtImg}
                  alt="Regalos mágicos personalizados Chokopatty"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SUBSECCIÓN 1: "DETALLES PARA REGALAR" — 30 € */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-pink-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎀</span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                  Detalles para Regalar
                </h3>
              </div>
              <p className="text-sm text-slate-600 font-medium">
                Cajas completas de alto impacto emocional diseñadas según a quién desees homenajear.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-2xl font-display font-black text-lg border border-pink-200">
              <span>Precio Único:</span>
              <span className="text-2xl text-rose-600">30 €</span>
            </div>
          </div>

          {/* Cards 30 € Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GIFTS_30.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border-2 border-pink-100 hover:border-pink-300 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-3 py-1 rounded-xl bg-pink-50 text-pink-700 border border-pink-200">
                      {item.tag}
                    </span>
                    <span className="text-2xl font-display font-black text-rose-600">
                      30 €
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-display font-black text-slate-900 mb-1 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-pink-500 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Incluye:
                    </p>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => openCustomizeModal(item)}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-display font-bold text-sm shadow-md shadow-pink-200 transition-all flex items-center justify-center gap-2"
                  >
                    <PenTool className="w-4 h-4" />
                    <span>Personalizar & Pedir (30 €)</span>
                  </button>

                  <button
                    onClick={() => handleDirectWhatsApp(item)}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Consultar por WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECCIÓN 2: "FRASCOS Y CAJAS PERSONALIZADAS" — 15 € */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-purple-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍬</span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                  Frascos y Cajas Personalizadas
                </h3>
              </div>
              <p className="text-sm text-slate-600 font-medium">
                Detalles más compactos con chuches, fotos y dedicatorias especiales.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-2xl font-display font-black text-lg border border-purple-200">
              <span>Precio Único:</span>
              <span className="text-2xl text-purple-700">15 €</span>
            </div>
          </div>

          {/* Cards 15 € Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {GIFTS_15.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-purple-100 hover:border-purple-300 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-3 py-1 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
                      {item.tag}
                    </span>
                    <span className="text-2xl font-display font-black text-purple-700">
                      15 €
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-display font-black text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-purple-500 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4 leading-relaxed bg-purple-50/50 p-3 rounded-xl border border-purple-100">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Incluye:
                    </p>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => openCustomizeModal(item)}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-bold text-sm shadow-md shadow-purple-200 transition-all flex items-center justify-center gap-2"
                  >
                    <PenTool className="w-4 h-4" />
                    <span>Personalizar & Pedir (15 €)</span>
                  </button>

                  <button
                    onClick={() => handleDirectWhatsApp(item)}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Preguntar por WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toast confirmation */}
        {successToast && (
          <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 flex items-center gap-2 text-sm font-bold border border-slate-700 animate-in fade-in slide-in-from-bottom duration-300">
            <Check className="w-5 h-5 text-emerald-400" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Modal for Personalizing Gift Item */}
        {activeModalItem && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-pink-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-black uppercase text-pink-600 tracking-wider">
                    Personaliza tu Detalle
                  </span>
                  <h3 className="text-2xl font-display font-black text-slate-900">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    Precio: <strong className="text-rose-600">{activeModalItem.price} €</strong> (Efectivo al recibir en Gerindote/Torrijos)
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 my-6">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-pink-500" />
                    <span>¿Para quién es el regalo? (Nombre o parentesco)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Mamá María / Mi novio Carlos / Mi mejor amiga Lucía"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <PenTool className="w-3.5 h-3.5 text-pink-500" />
                    <span>Mensaje o Dedicatoria para la tarjeta / caja</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Escribe las palabras bonitas que quieras que incluyamos..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400 text-sm"
                  />
                </div>

                {activeModalItem.id === 'cajas-chuches' && (
                  <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200 text-xs text-purple-900 flex items-start gap-2">
                    <Camera className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Foto personalizada:</strong> Una vez confirmado el pedido, podrás adjuntarnos la foto directamente por WhatsApp para imprimirla con máxima calidad.
                    </span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                    Notas adicionales / Temática (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Colores favoritos rosa y blanco, dulces preferidos chocolate..."
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="py-3 px-4 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 text-sm"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveGiftOrder}
                  className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-display font-bold text-sm shadow-md shadow-pink-200 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir a mi Pedido ({activeModalItem.price} €)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
