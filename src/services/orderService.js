import api from "@/utils/api";

const orderService = {
  /**
   * Create Order
   */
  async createOrder(orderData) {
    return api.post("/orders", orderData);
  },

  /**
   * Get All Orders
   */
  async getOrders(params = "") {
    const query = params ? `?${params}` : "";

    return api.get(`/orders${query}`);
  },

  /**
   * Get Single Order
   */
  async getOrderById(orderId) {
    return api.get(`/orders/${orderId}`);
  },

  /**
   * Track Order
   */
  async trackOrder(orderId) {
    return api.get(`/orders/track/${orderId}`);
  },

  /**
   * Update Order
   */
  async updateOrder(orderId, data) {
    return api.put(`/orders/${orderId}`, data);
  },

  /**
   * Update Order Status
   */
  async updateStatus(orderId, status) {
    return api.patch(
      `/orders/${orderId}/status`,
      {
        status,
      }
    );
  },

  /**
   * Update Payment Status
   */
  async updatePaymentStatus(
    orderId,
    paymentStatus
  ) {
    return api.patch(
      `/orders/${orderId}/payment`,
      {
        paymentStatus,
      }
    );
  },

  /**
   * Delete Order
   */
  async deleteOrder(orderId) {
    return api.delete(`/orders/${orderId}`);
  },

  /**
   * Search Orders
   */
  async searchOrders(keyword) {
    return api.get(
      `/orders/search/${encodeURIComponent(
        keyword
      )}`
    );
  },

  /**
   * Get Orders By Customer
   */
  async getCustomerOrders(customerId) {
    return api.get(
      `/orders/customer/${customerId}`
    );
  },

  /**
   * Get Dashboard Statistics
   */
  async getStatistics() {
    return api.get("/orders/statistics");
  },

  /**
   * Upload Order Image
   */
  async uploadOrderImage(file) {
    const formData = new FormData();

    formData.append("image", file);

    return api.upload(
      "/orders/upload",
      formData
    );
  },

  /**
   * Download Invoice
   */
  async downloadInvoice(orderId) {
    return api.get(
      `/orders/${orderId}/invoice`
    );
  },

  /**
   * Cancel Order
   */
  async cancelOrder(orderId) {
    return api.patch(
      `/orders/${orderId}/cancel`,
      {}
    );
  },
};

export default orderService;