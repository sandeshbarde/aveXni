import api from "@/utils/api";

const paymentService = {
  /**
   * Create Payment Order
   * (Razorpay / Stripe / PayPal)
   */
  async createOrder(data) {
    return api.post("/payments/create-order", data);
  },

  /**
   * Verify Payment
   */
  async verifyPayment(data) {
    return api.post("/payments/verify", data);
  },

  /**
   * Get Payment Details
   */
  async getPayment(paymentId) {
    return api.get(`/payments/${paymentId}`);
  },

  /**
   * Get All Payments
   */
  async getPayments(params = "") {
    const query = params ? `?${params}` : "";

    return api.get(`/payments${query}`);
  },

  /**
   * Get Payments by Order ID
   */
  async getOrderPayments(orderId) {
    return api.get(
      `/payments/order/${orderId}`
    );
  },

  /**
   * Refund Payment
   */
  async refundPayment(
    paymentId,
    amount = null
  ) {
    return api.post(
      `/payments/${paymentId}/refund`,
      {
        amount,
      }
    );
  },

  /**
   * Cancel Payment
   */
  async cancelPayment(paymentId) {
    return api.patch(
      `/payments/${paymentId}/cancel`,
      {}
    );
  },

  /**
   * Update Payment Status
   */
  async updateStatus(
    paymentId,
    status
  ) {
    return api.patch(
      `/payments/${paymentId}/status`,
      {
        status,
      }
    );
  },

  /**
   * Download Invoice
   */
  async downloadInvoice(orderId) {
    return api.get(
      `/payments/invoice/${orderId}`
    );
  },

  /**
   * Get Dashboard Statistics
   */
  async getStatistics() {
    return api.get(
      "/payments/statistics"
    );
  },

  /**
   * Apply Coupon
   */
  async applyCoupon(code) {
    return api.post(
      "/payments/coupon",
      {
        code,
      }
    );
  },

  /**
   * Validate Coupon
   */
  async validateCoupon(code) {
    return api.get(
      `/payments/coupon/${code}`
    );
  },

  /**
   * Save Payment Method
   */
  async savePaymentMethod(data) {
    return api.post(
      "/payments/method",
      data
    );
  },

  /**
   * Get Saved Payment Methods
   */
  async getPaymentMethods() {
    return api.get(
      "/payments/methods"
    );
  },

  /**
   * Delete Payment Method
   */
  async deletePaymentMethod(id) {
    return api.delete(
      `/payments/method/${id}`
    );
  },
};

export default paymentService;