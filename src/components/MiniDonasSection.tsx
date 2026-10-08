import React, { useState } from 'react';
import { Sparkles, Check, Plus, ShoppingBag, MessageCircle, Heart, Star, Palette, Box, PartyPopper, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DONUT_PACKS, TOPPINGS, DONUT_PRESENTATIONS, DonutPack, Topping } from '../data/products';
import { useCart } from '../context/CartContext';
import donutsArtImg from '../assets/images/chokopatty_donuts_art_1791372241053.jpg';

export const MiniDonasSection: React.FC = () => {
  const { addItem } = useCart();
  
  // Customizer interactive state
  const [selectedPack, setSelectedPack] = useState<DonutPack>(DONUT_PACKS[1]); // Default 6 donas
  const [selectedToppings, setSelectedToppings] = useState<string[]>(['Fresas', 'Chispitas de colores']);
  const [customStyle, setCustomStyle] = useState<string>('Surtido Colorido');
  const [customNote, setCustomNote] = useState<string>('');
  const [addedAlert, setAddedAlert] = useState(false);
  const [toppingAlert, setToppingAlert] = useState<string | null>(null);

  // Maximum toppings rule: 4 & 6 donas -> max 2 toppings. 12 donas -> max 4 toppings.
  const maxToppings = selectedPack.count >= 12 ? 4 : 2;

  const handleSelectPack = (pack: DonutPack) => {
    setSelectedPack(pack);
    const newMax = pack.count >= 12 ? 4 : 2;
    // Automatically trim if current toppings exceed new pack max
    if (selectedToppings.length > newMax) {
      setSelectedToppings((prev) => prev.slice(0, newMax));
    }
    setToppingAlert(null);
  };

  const toggleTopping = (toppingName: string) => {
    if (selectedToppings.includes(toppingName)) {
      setSelectedToppings((prev) => prev.filter((t) => t !== toppingName));
      setToppingAlert(null);
    } else {
      if (selectedToppings.length >= maxToppings) {
        setToppingAlert(
          `¡Máximo ${maxToppings} toppings permitidos para el pack de ${selectedPack.count} mini donas! Deselecciona uno si deseas cambiar.`
        );
        setTimeout(() => setToppingAlert(null), 3500);
        return;
      }
      setSelectedToppings((prev) => [...prev, toppingName]);
      setToppingAlert(null);
    }
  };

  const handleAddToCart = () => {
    // Trigger festive confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f472b6', '#ec4899', '#fbbf24', '#a855f7'],
    });

    addItem({
      title: `${selectedPack.title} (${customStyle})`,
      type: 'donas',
      price: selectedPack.price,
      quantity: 1,
      toppings: selectedToppings.length > 0 ? selectedToppings : ['Sin toppings específicos'],
      notes: customNote ? customNote : undefined,
    });

    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2500);
  };

  const handleQuickAdd = (pack: DonutPack) => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#f472b6', '#34d399', '#f59e0b'],
    });

    addItem({
      title: `${pack.title} - Toppings Surtidos`,
      type: 'donas',
      price: pack.price,
      quantity: 1,
      toppings: ['Toppings variados a elección'],
      notes: 'Pack rápido de mini donas',
    });

    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2500);
  };

  return (
    <section id="mini-donas" className="py-16 md:py-24 bg-white relative scroll-mt-20">
      {/* Decorative divider top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-black uppercase tracking-wider">
            <span>✨ Línea 1 Exclusiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            Mini Donas & Toppings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Esponjosas, irresistibles y decoradas con amor. <br className="hidden sm:inline" />
            <strong className="text-rose-600 font-black">¡Todos los toppings están incluidos sin coste adicional!</strong>
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {DONUT_PACKS.map((pack) => {
            const isSelected = selectedPack.id === pack.id;
            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl p-6 sm:p-7 border-2 transition-all flex flex-col justify-between ${
                  pack.popular
                    ? 'border-pink-500 bg-gradient-to-b from-pink-50/60 to-white shadow-xl shadow-pink-100 ring-2 ring-pink-400/20'
                    : 'border-slate-200 hover:border-pink-300 bg-white shadow-md hover:shadow-lg'
                }`}
              >
                {/* Popular / Best value badge */}
                {pack.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs font-black px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>Más Elegido</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-pink-600 uppercase tracking-wider bg-pink-100 px-3 py-1 rounded-xl">
                      {pack.badge}
                    </span>
                    <span className="text-2xl">🍩</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-2">
                    {pack.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed min-h-[42px]">
                    {pack.description}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-display font-black text-rose-600">
                      {pack.price} €
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Toppings incluidos
                    </span>
                  </div>

                  {/* Included benefits list */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>{pack.count} mini donas esponjosas artesanales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500 shrink-0" />
                      <span className="font-bold text-slate-900">
                        Hasta {pack.maxToppings} toppings incluidos gratis
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>Caja protectora o presentación dulce</span>
                    </li>
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      handleSelectPack(pack);
                      const el = document.getElementById('personalizador-donas');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 px-4 rounded-2xl font-display font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-pink-600 text-white shadow-md shadow-pink-200'
                        : 'bg-pink-50 hover:bg-pink-100 text-pink-700'
                    }`}
                  >
                    <Palette className="w-4 h-4" />
                    <span>Personalizar (Máx. {pack.maxToppings} toppings)</span>
                  </button>

                  <button
                    onClick={() => handleQuickAdd(pack)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir rápido al pedido</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toppings Grid Section */}
        <div className="rounded-3xl bg-gradient-to-br from-amber-50/70 via-pink-50/50 to-purple-50/50 border-2 border-pink-200/80 p-6 sm:p-10 mb-16 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-rose-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Sin coste adicional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                Toppings Disponibles
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                Combina tus sabores y texturas favoritas para crear una experiencia única.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-block bg-white text-pink-700 text-xs sm:text-sm font-black px-4 py-2 rounded-2xl border border-pink-200 shadow-xs">
                🍓 6 Variedades Irresistibles
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {TOPPINGS.map((topping) => (
              <div
                key={topping.id}
                className="bg-white rounded-2xl p-4 border border-pink-100 shadow-xs hover:shadow-md transition-shadow text-center flex flex-col items-center group"
              >
                <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                  {topping.icon}
                </span>
                <h4 className="font-display font-bold text-sm text-slate-800 mb-1">
                  {topping.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  {topping.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories & Presentations Showcase */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
              Categorías & Presentaciones
            </h3>
            <p className="text-sm text-slate-600 font-medium">
              Diseñadas para deleitar a la vista y al paladar en cualquier ocasión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DONUT_PRESENTATIONS.map((cat, idx) => (
              <div
                key={cat.id}
                className="rounded-3xl p-6 bg-white border border-pink-100 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl mb-4 group-hover:rotate-6 transition-transform">
                  {idx === 0 ? '🎨' : idx === 1 ? '🎁' : '🎉'}
                </div>
                <div className="inline-block text-[11px] font-black text-pink-600 uppercase tracking-wider mb-1.5">
                  {cat.badge}
                </div>
                <h4 className="text-xl font-display font-black text-slate-900 mb-2">
                  {cat.title}
                </h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Pack Customizer ("Crea tu Caja Chokopatty") */}
        <div
          id="personalizador-donas"
          className="rounded-3xl border-2 border-pink-300 bg-gradient-to-br from-pink-50/90 via-white to-rose-50/70 p-6 sm:p-10 shadow-xl scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual preview */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <div className="relative rounded-3xl overflow-hidden border-2 border-pink-200 shadow-lg bg-white">
                <img
                  src={donutsArtImg}
                  alt="Personaliza tu caja de mini donas Chokopatty"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-xs font-black text-pink-700 px-3 py-1 rounded-xl shadow-xs">
                  ✨ Personalizador en Vivo
                </div>
              </div>

              <div className="bg-white/90 rounded-2xl p-4 border border-pink-200">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-bold text-slate-700">Tu elección actual:</span>
                  <span className="font-black text-pink-600 text-lg">
                    {selectedPack.price} €
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {selectedPack.title} con{' '}
                  {selectedToppings.length > 0
                    ? selectedToppings.join(', ')
                    : 'toppings a elección'}
                </p>
              </div>
            </div>

            {/* Config Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Paso 1: Tamaño */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-black text-pink-600 uppercase tracking-wider">
                    Paso 1: Selecciona el tamaño de tu pack
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">
                    Límites: 4 y 6 donas (máx. 2) · 12 donas (máx. 4)
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 mt-1">
                  {DONUT_PACKS.map((pack) => (
                    <button
                      key={pack.id}
                      onClick={() => handleSelectPack(pack)}
                      className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        selectedPack.id === pack.id
                          ? 'border-pink-500 bg-pink-100/70 text-pink-900 font-black shadow-xs ring-2 ring-pink-400/20'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-pink-300 font-bold'
                      }`}
                    >
                      <div className="text-sm">{pack.count} Donas</div>
                      <div className="text-lg font-display text-rose-600">{pack.price} €</div>
                      <span className="text-[10px] font-bold text-slate-500 block -mt-0.5">
                        Máx. {pack.maxToppings} toppings
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Toppings Picker with Strict Limits */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-pink-600 uppercase tracking-wider">
                      Paso 2: Elige tus toppings incluidos
                    </span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                      {selectedToppings.length} / {maxToppings} seleccionados
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-bold">¡Sin coste extra!</span>
                </div>

                {/* Helpful contextual rule note */}
                <div className="mb-2.5 px-3 py-1.5 rounded-xl bg-pink-50/80 border border-pink-200/60 text-[11px] text-slate-700 flex items-center justify-between">
                  <span>
                    Pack de <strong>{selectedPack.title}</strong>: permite hasta un <strong>máximo de {maxToppings} toppings</strong> incluidos.
                  </span>
                  {selectedToppings.length >= maxToppings && (
                    <span className="text-rose-600 font-black shrink-0 ml-2">
                      ✓ Máximo alcanzado
                    </span>
                  )}
                </div>

                {/* Limit Warning Banner if user tries to exceed */}
                {toppingAlert && (
                  <div className="mb-2.5 p-2.5 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in shadow-xs">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{toppingAlert}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TOPPINGS.map((t) => {
                    const active = selectedToppings.includes(t.name);
                    const isMaxReached = selectedToppings.length >= maxToppings;
                    return (
                      <button
                        key={t.id}
                        onClick={() => toggleTopping(t.name)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                          active
                            ? 'border-pink-500 bg-pink-500 text-white shadow-xs'
                            : isMaxReached
                            ? 'border-slate-200 bg-slate-50/80 text-slate-400 hover:border-amber-400 hover:bg-amber-50/40'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-pink-300 hover:bg-pink-50/30'
                        }`}
                        title={
                          active
                            ? `Quitar ${t.name}`
                            : isMaxReached
                            ? `Máximo ${maxToppings} toppings permitidos`
                            : `Añadir ${t.name}`
                        }
                      >
                        <span>{t.icon}</span>
                        <span className="truncate">{t.name}</span>
                        {active ? (
                          <Check className="w-3.5 h-3.5 ml-auto shrink-0" />
                        ) : isMaxReached ? (
                          <span className="text-[10px] text-slate-400 ml-auto font-normal">máx.</span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Note / Occasion input */}
              <div>
                <label className="block text-xs font-black text-pink-600 uppercase tracking-wider mb-1.5">
                  Paso 3: Temática, dedicatoria o nota especial (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: Para cumpleaños de Sofía / Cobertura en tono pastel rosa y lila..."
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-pink-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-pink-400 text-slate-800"
                />
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-display font-bold text-base shadow-lg shadow-pink-200 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Añadir al Pedido ({selectedPack.price} €)</span>
                </button>
              </div>

              {addedAlert && (
                <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>¡Pack añadido a tu pedido con éxito! Puedes revisarlo arriba en el carrito.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
