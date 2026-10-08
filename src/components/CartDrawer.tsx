import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, MapPin, Banknote, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../data/products';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
    totalCount,
    isCartOpen,
    setIsCartOpen,
    generateWhatsAppUrl,
  } = useCart();

  const [clientName, setClientName] = useState('');
  const [selectedZone, setSelectedZone] = useState('Torrijos');
  const [clientAddress, setClientAddress] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  if (!isCartOpen) return null;

  const handleFinishWhatsApp = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
    const url = generateWhatsAppUrl(clientName, selectedZone, clientAddress, clientNotes);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-pink-100 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-pink-100 flex items-center justify-between bg-gradient-to-r from-pink-50 to-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛍️</span>
              <div>
                <h3 className="font-display font-black text-xl text-slate-900">
                  Tu Pedido Dulce
                </h3>
                <p className="text-xs text-pink-600 font-bold">
                  {totalCount} {totalCount === 1 ? 'producto seleccionado' : 'productos seleccionados'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery & Cash Alert inside Drawer */}
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-xs text-amber-900 font-bold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Gerindote & Torrijos</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Banknote className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Pago en efectivo al recibir</span>
            </span>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <span className="text-5xl block animate-bounce">🍩</span>
                <p className="font-display font-black text-lg text-slate-700">
                  Tu canasta está vacía
                </p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explora nuestras deliciosas mini donas o detalles personalizados y añade tus favoritos.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold text-xs"
                >
                  Ver Menú Chokopatty
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-pink-100 p-4 bg-pink-50/30 space-y-2 hover:border-pink-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-black text-sm text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs font-black text-rose-600">
                        {item.price} € / ud.
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-400 hover:text-rose-500 p-1"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Toppings badge */}
                  {item.toppings && item.toppings.length > 0 && (
                    <p className="text-[11px] text-slate-600 bg-white/80 p-1.5 rounded-lg border border-pink-100">
                      <strong>Toppings:</strong> {item.toppings.join(', ')}
                    </p>
                  )}

                  {/* Recipient / Message */}
                  {item.recipientName && (
                    <p className="text-[11px] text-slate-600">
                      <strong>Para:</strong> {item.recipientName}
                    </p>
                  )}
                  {item.customMessage && (
                    <p className="text-[11px] text-slate-600 italic">
                      “{item.customMessage}”
                    </p>
                  )}
                  {item.notes && (
                    <p className="text-[11px] text-slate-500">
                      Nota: {item.notes}
                    </p>
                  )}

                  {/* Quantity controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-pink-100/60">
                    <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-slate-500 hover:text-slate-800 p-0.5"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-black px-1.5">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-slate-500 hover:text-slate-800 p-0.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-display font-black text-slate-900 text-sm">
                      {item.price * item.quantity} €
                    </span>
                  </div>
                </div>
              ))
            )}

            {/* Client Delivery details form if items > 0 */}
            {items.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-200 space-y-3.5">
                <span className="text-xs font-black uppercase text-pink-600 tracking-wider">
                  Datos de entrega a domicilio
                </span>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Laura Pérez"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Localidad de entrega
                  </label>
                  <select
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400 bg-white font-bold text-slate-800"
                  >
                    <option value="Torrijos">Torrijos (A domicilio)</option>
                    <option value="Gerindote">Gerindote (A domicilio)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Dirección (Calle, número, piso)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Calle Mayor 12, 2º B"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Horario de entrega / Observaciones
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Por la tarde a partir de las 18:00 h"
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer with Total & CTA */}
          {items.length > 0 && (
            <div className="p-5 border-t border-pink-100 bg-white space-y-3">
              <div className="flex items-center justify-between text-base">
                <span className="font-bold text-slate-600">Total a pagar:</span>
                <span className="font-display font-black text-2xl text-rose-600">
                  {totalPrice} €
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pago en efectivo al recibir en tu puerta.</span>
              </div>

              <button
                onClick={handleFinishWhatsApp}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-display font-bold text-sm shadow-lg shadow-emerald-200 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar Pedido por WhatsApp ({CONTACT_INFO.phoneDisplay})</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full py-1 text-center text-xs text-slate-400 hover:text-rose-500 font-semibold transition-colors"
              >
                Vaciar canasta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
