import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Add Item

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(
        (product) => product.id === item.id
      );

      if (existing) {
        return prev.map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity:
                  product.quantity +
                  (item.quantity || 1),
              }
            : product
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: item.quantity || 1,
        },
      ];
    });
  };

  // Remove Item

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter(
        (product) => product.id !== id
      )
    );
  };

  // Update Quantity

  const updateQuantity = (
    id,
    quantity
  ) => {
    if (quantity < 1) return;

    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity,
            }
          : product
      )
    );
  };

  // Clear Cart

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}