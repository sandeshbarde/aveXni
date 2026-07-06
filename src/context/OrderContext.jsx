import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  // Create Order

  const createOrder = (order) => {
    const newOrder = {
      id: `AVX-${Date.now()}`,
      customer: order.customer || "",
      phone: order.phone || "",
      email: order.email || "",
      portraitType:
        order.portraitType || "Custom",
      size: order.size || "A4",
      quantity: order.quantity || 1,
      price: order.price || 0,
      paymentStatus:
        order.paymentStatus || "Pending",
      status:
        order.status || "Order Received",
      image: order.image || "",
      notes: order.notes || "",
      createdAt: new Date().toISOString(),
    };

    setOrders((prev) => [
      newOrder,
      ...prev,
    ]);

    return newOrder;
  };

  // Update Order

  const updateOrder = (id, updates) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              ...updates,
            }
          : order
      )
    );
  };

  // Delete Order

  const deleteOrder = (id) => {
    setOrders((prev) =>
      prev.filter(
        (order) => order.id !== id
      )
    );
  };

  // Find Order

  const getOrder = (id) => {
    return orders.find(
      (order) => order.id === id
    );
  };

  // Clear Orders

  const clearOrders = () => {
    setOrders([]);
  };

  // Dashboard Stats

  const totalOrders = useMemo(
    () => orders.length,
    [orders]
  );

  const completedOrders = useMemo(
    () =>
      orders.filter(
        (o) =>
          o.status === "Delivered"
      ).length,
    [orders]
  );

  const pendingOrders = useMemo(
    () =>
      orders.filter(
        (o) =>
          o.status !== "Delivered"
      ).length,
    [orders]
  );

  const totalRevenue = useMemo(
    () =>
      orders.reduce(
        (sum, order) =>
          sum + Number(order.price || 0),
        0
      ),
    [orders]
  );

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        updateOrder,
        deleteOrder,
        getOrder,
        clearOrders,
        totalOrders,
        completedOrders,
        pendingOrders,
        totalRevenue,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context =
    useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrders must be used inside OrderProvider"
    );
  }

  return context;
}