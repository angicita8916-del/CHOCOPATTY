export interface DonutPack {
  id: string;
  count: number;
  price: number;
  title: string;
  badge?: string;
  description: string;
  popular?: boolean;
  maxToppings: number;
}

export interface Topping {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface GiftItem {
  id: string;
  title: string;
  category: 'detalles_30' | 'frascos_cajas_15';
  price: number;
  subtitle: string;
  description: string;
  features: string[];
  tag: string;
  accentColor: string;
}

export const DONUT_PACKS: DonutPack[] = [
  {
    id: 'pack-4',
    count: 4,
    price: 2,
    title: '4 Mini Donas',
    badge: 'Pack Dulce Antojo',
    description: 'Ideales para un capricho personal o una merienda dulce y tierna.',
    popular: false,
    maxToppings: 2,
  },
  {
    id: 'pack-6',
    count: 6,
    price: 5,
    title: '6 Mini Donas',
    badge: 'Pack Favorito',
    description: 'Perfectas para compartir con esa persona especial con los toppings más ricos.',
    popular: true,
    maxToppings: 2,
  },
  {
    id: 'pack-12',
    count: 12,
    price: 8,
    title: '12 Mini Donas',
    badge: 'Pack Fiesta & Celebración',
    description: 'Caja completa surtida para cumpleaños, reuniones y momentos mágicos.',
    popular: false,
    maxToppings: 4,
  },
];

export const TOPPINGS: Topping[] = [
  { id: 'fresas', name: 'Fresas', icon: '🍓', color: 'bg-rose-100 text-rose-700 border-rose-300', description: 'Toque frutal fresco y delicioso' },
  { id: 'chispitas', name: 'Chispitas de colores', icon: '✨', color: 'bg-amber-100 text-amber-700 border-amber-300', description: 'Lluvia mágica de arcoíris crujiente' },
  { id: 'bolitas', name: 'Bolitas de colores', icon: '🍬', color: 'bg-pink-100 text-pink-700 border-pink-300', description: 'Perlitas dulces divertidas y festivas' },
  { id: 'oreo', name: 'Oreo', icon: '🍪', color: 'bg-zinc-100 text-zinc-800 border-zinc-300', description: 'Crujiente galleta de cacao triturada' },
  { id: 'nuez', name: 'Nuez', icon: '🥜', color: 'bg-amber-100 text-amber-800 border-amber-300', description: 'Fruto seco tostado de sabor irresistible' },
  { id: 'mym', name: 'M&M', icon: '🍫', color: 'bg-blue-100 text-blue-700 border-blue-300', description: 'Chocolates confitados con puro color' },
];

export const DONUT_PRESENTATIONS = [
  {
    id: 'decoradas',
    title: 'Mini Donas Decoradas',
    description: 'Diseños coloridos y personalizados con coberturas suaves, glaseados pastel y detalles tiernos anime.',
    badge: 'Arte en cada bocado',
  },
  {
    id: 'cajas',
    title: 'Cajas de Mini Donas',
    description: 'Cajas con visor o cerradas con lazos listos para regalar, compartir en familia o sorprender.',
    badge: 'Listas para regalar',
  },
  {
    id: 'especiales',
    title: 'Ocasiones Especiales',
    description: 'Cumpleaños, aniversarios, celebraciones y eventos. Se pueden personalizar con temáticas y mensajes.',
    badge: '100% Personalizables',
  },
];

export const GIFTS_30: GiftItem[] = [
  {
    id: 'regalo-mama',
    title: 'Para Mamá',
    category: 'detalles_30',
    price: 30,
    subtitle: 'El homenaje más dulce para la reina de la casa',
    description: 'Caja personalizada + dulces seleccionados + mensaje dedicado con mucho cariño.',
    features: ['Caja de madera o kraft decorada', 'Surtido de chocolates y chuches', 'Dedicatoria y mensaje exclusivo'],
    tag: 'Día de la Madre / Cumpleaños',
    accentColor: 'from-pink-500 to-rose-400',
  },
  {
    id: 'regalo-pareja',
    title: 'Para mi Pareja',
    category: 'detalles_30',
    price: 30,
    subtitle: 'Romance, dulzura y complicidad',
    description: 'Caja sorpresa + chocolates + mensaje romántico que llegará directo al corazón.',
    features: ['Caja sorpresa con lazo de satén', 'Chocolates finos y golosinas', 'Globo o detalle temático con carta de amor'],
    tag: 'Aniversario / San Valentín',
    accentColor: 'from-rose-500 to-red-400',
  },
  {
    id: 'regalo-amiga',
    title: 'Para una Amiga',
    category: 'detalles_30',
    price: 30,
    subtitle: 'Alegría y complicidad en cada detalle',
    description: 'Mini caja + dulces + detalle personalizado para celebrar esa amistad incondicional.',
    features: ['Decoración alegre y divertida', 'Chuches y galletitas favoritas', 'Tarjeta de dedicatoria amistosa'],
    tag: 'Amistad / Felicidades',
    accentColor: 'from-purple-500 to-pink-400',
  },
  {
    id: 'regalo-sorprender',
    title: 'Para Sorprender',
    category: 'detalles_30',
    price: 30,
    subtitle: 'Un momento inolvidable sin previo aviso',
    description: 'Frasco de golosinas + decoración festiva que despierta sonrisas al instante.',
    features: ['Frasco temático reutilizable', 'Decoración festiva con confeti y lazo', 'Dulces irresistibles'],
    tag: 'Cualquier día es especial',
    accentColor: 'from-amber-500 to-orange-400',
  },
  {
    id: 'regalo-ocasion',
    title: 'Para Cualquier Ocasión',
    category: 'detalles_30',
    price: 30,
    subtitle: 'Tu combinación a medida',
    description: 'Elige tu combinación y personalízala: cuéntanos la ocasión y nosotros creamos la magia.',
    features: ['Adaptado a tus preferencias', 'Mix de productos a tu gusto', 'Mensaje totalmente a medida'],
    tag: 'Personalizado Total',
    accentColor: 'from-teal-500 to-emerald-400',
  },
];

export const GIFTS_15: GiftItem[] = [
  {
    id: 'frascos-chuches',
    title: 'Frascos con Chuches Personalizados',
    category: 'frascos_cajas_15',
    price: 15,
    subtitle: 'Divertidos, coloridos y llenos de sabor',
    description: 'Frascos de cristal o acrílico decorados con golosinas variadas, lazos y detalle personalizado.',
    features: ['Frasco decorado con temáticas tiernas', 'Selección de chuches y caramelos', 'Etiqueta personalizada con nombre o fecha'],
    tag: 'Detalle Exprés',
    accentColor: 'from-sky-500 to-blue-400',
  },
  {
    id: 'cajas-chuches',
    title: 'Cajas con Chuches Personalizadas',
    category: 'frascos_cajas_15',
    price: 15,
    subtitle: 'Con tu foto y mensaje especial',
    description: 'Cajas con chuches personalizadas con foto y mensaje para convertir un regalo en un recuerdo.',
    features: ['Impresión de foto especial incluida', 'Mensaje dedicado en la tapa o interior', 'Relleno de golosinas y chocolates'],
    tag: 'Foto + Mensaje',
    accentColor: 'from-violet-500 to-fuchsia-400',
  },
];

export const CONTACT_INFO = {
  brandName: 'ChocoPatty',
  brandNameAlt: 'Chokopatty',
  tagline: 'Chocolates que alegran el corazón',
  slogan: 'Detalles llenos de amor y mucha magia que hacen sonreír',
  phone: '666119849',
  phoneDisplay: '666 11 98 49',
  email: 'angicita8916@gmail.com',
  whatsappUrl: 'https://wa.me/34666119849',
  deliveryZones: ['Gerindote', 'Torrijos'],
  paymentMethod: 'Exclusivamente PAGO EN EFECTIVO al recibir el pedido a domicilio',
  deliveryPolicyShort: 'Repartos a domicilio en Gerindote y Torrijos. Pago en efectivo al momento de la entrega.',
  logoUrl: '/chokoPatty.png',
  videoUrl: '/chokoPatty-video.mp4',
  videoTranscription: '¡Hola! Bienvenidos a ChocoPatty. Estamos aquí para endulzar tus momentos con productos deliciosos y llenos de sabor. Descubre nuestros productos y déjate sorprender.',
};
