import api from "@/utils/api";

const trackingService = {
  /**
   * Track Order
   */
  async trackOrder(orderId) {
    return api.get(
      `/tracking/${encodeURIComponent(orderId)}`
    );
  },

  /**
   * Get Tracking Timeline
   */
  async getTimeline(orderId) {
    return api.get(
      `/tracking/${encodeURIComponent(orderId)}/timeline`
    );
  },

  /**
   * Update Tracking Status (Admin)
   */
  async updateStatus(orderId, status) {
    return api.patch(
      `/tracking/${encodeURIComponent(orderId)}`,
      {
        status,
      }
    );
  },

  /**
   * Add Timeline Event (Admin)
   */
  async addTimelineEvent(orderId, data) {
    return api.post(
      `/tracking/${encodeURIComponent(orderId)}/timeline`,
      data
    );
  },

  /**
   * Delete Timeline Event (Admin)
   */
  async deleteTimelineEvent(
    orderId,
    eventId
  ) {
    return api.delete(
      `/tracking/${encodeURIComponent(orderId)}/timeline/${eventId}`
    );
  },

  /**
   * Mark Order as Shipped
   */
  async markShipped(orderId, courier) {
    return api.patch(
      `/tracking/${encodeURIComponent(orderId)}/ship`,
      courier
    );
  },

  /**
   * Mark Order as Delivered
   */
  async markDelivered(orderId) {
    return api.patch(
      `/tracking/${encodeURIComponent(orderId)}/deliver`,
      {}
    );
  },

  /**
   * Cancel Order
   */
  async cancelOrder(orderId, reason = "") {
    return api.patch(
      `/tracking/${encodeURIComponent(orderId)}/cancel`,
      {
        reason,
      }
    );
  },

  /**
   * Get Courier Details
   */
  async getCourier(orderId) {
    return api.get(
      `/tracking/${encodeURIComponent(orderId)}/courier`
    );
  },

  /**
   * Update Courier Details
   */
  async updateCourier(
    orderId,
    courierData
  ) {
    return api.put(
      `/tracking/${encodeURIComponent(orderId)}/courier`,
      courierData
    );
  },

  /**
   * Get Estimated Delivery Date
   */
  async getEstimatedDelivery(orderId) {
    return api.get(
      `/tracking/${encodeURIComponent(orderId)}/estimated-delivery`
    );
  },

  /**
   * Tracking Statistics
   */
  async getStatistics() {
    return api.get(
      "/tracking/statistics"
    );
  },
};

export default trackingService;