import React, { createContext, useContext, useState, useEffect } from 'react';

export interface OrderItem {
  id: string;
  title: string;
  type: 'donas' | 'regalo';
  price: number;
  quantity: number;
  toppings?: string[];
  notes?: string;
  recipientName?: string;
  customMessage?: string;
}

interface CartContextType {
  items: OrderItem[];
  addItem: (item: Omit<OrderItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  generateWhatsAppUrl: (clientName?: string, zone?: string, address?: string, clientNote?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<OrderItem[]>(() => {
    try {
      const saved = localStorage.getItem('chokopatty_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('chokopatty_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (newItem: Omit<OrderItem, 'id'>) => {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setItems((prev) => [...prev, { ...newItem, id }]);
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppUrl = (
    clientName = '',
    zone = 'Gerindote / Torrijos',
    address = '',
    clientNote = ''
  ) => {
    let msg = `¡Hola Chokopatty! 🍩✨ Me gustaría realizar el siguiente pedido:\n\n`;
    
    if (clientName) {
      msg += `👤 *Nombre:* ${clientName}\n`;
    }
    if (zone) {
      msg += `📍 *Zona de entrega:* ${zone}\n`;
    }
    if (address) {
      msg += `🏠 *Dirección:* ${address}\n`;
    }
    
    msg += `\n📦 *DETALLE DEL PEDIDO:*\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.title}* (x${item.quantity}) - ${item.price * item.quantity} €\n`;
      if (item.toppings && item.toppings.length > 0) {
        msg += `   • Toppings: ${item.toppings.join(', ')}\n`;
      }
      if (item.recipientName) {
        msg += `   • Para: ${item.recipientName}\n`;
      }
      if (item.customMessage) {
        msg += `   • Mensaje/Dedicatoria: "${item.customMessage}"\n`;
      }
      if (item.notes) {
        msg += `   • Nota especial: ${item.notes}\n`;
      }
    });

    msg += `\n💰 *Total a pagar:* ${totalPrice} €`;
    msg += `\n💵 *Método de pago:* Efectivo al recibir en mi domicilio`;
    
    if (clientNote) {
      msg += `\n📝 *Observaciones adicionales:* ${clientNote}`;
    }

    msg += `\n\n¡Muchas gracias! Espero su confirmación. 💕`;

    return `https://wa.me/34666119849?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalPrice,
        totalCount,
        isCartOpen,
        setIsCartOpen,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
