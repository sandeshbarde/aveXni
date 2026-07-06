import api from "@/utils/api";

const dashboardService = {
  /**
   * Dashboard Overview
   */
  async getOverview() {
    return api.get("/dashboard/overview");
  },

  /**
   * Dashboard Statistics
   */
  async getStatistics() {
    return api.get("/dashboard/statistics");
  },

  /**
   * Revenue Analytics
   */
  async getRevenue(period = "monthly") {
    return api.get(
      `/dashboard/revenue?period=${period}`
    );
  },

  /**
   * Sales Analytics
   */
  async getSales(period = "monthly") {
    return api.get(
      `/dashboard/sales?period=${period}`
    );
  },

  /**
   * Order Analytics
   */
  async getOrderAnalytics(
    period = "monthly"
  ) {
    return api.get(
      `/dashboard/orders?period=${period}`
    );
  },

  /**
   * Recent Orders
   */
  async getRecentOrders(limit = 10) {
    return api.get(
      `/dashboard/recent-orders?limit=${limit}`
    );
  },

  /**
   * Recent Customers
   */
  async getRecentCustomers(
    limit = 10
  ) {
    return api.get(
      `/dashboard/recent-customers?limit=${limit}`
    );
  },

  /**
   * Latest Payments
   */
  async getRecentPayments(
    limit = 10
  ) {
    return api.get(
      `/dashboard/recent-payments?limit=${limit}`
    );
  },

  /**
   * Gallery Statistics
   */
  async getGalleryStatistics() {
    return api.get(
      "/dashboard/gallery"
    );
  },

  /**
   * Customer Statistics
   */
  async getCustomerStatistics() {
    return api.get(
      "/dashboard/customers"
    );
  },

  /**
   * Payment Statistics
   */
  async getPaymentStatistics() {
    return api.get(
      "/dashboard/payments"
    );
  },

  /**
   * Notifications
   */
  async getNotifications() {
    return api.get(
      "/dashboard/notifications"
    );
  },

  /**
   * Mark Notification Read
   */
  async markNotificationRead(id) {
    return api.patch(
      `/dashboard/notifications/${id}`,
      {
        read: true,
      }
    );
  },

  /**
   * Delete Notification
   */
  async deleteNotification(id) {
    return api.delete(
      `/dashboard/notifications/${id}`
    );
  },

  /**
   * Dashboard Activity
   */
  async getActivities(limit = 20) {
    return api.get(
      `/dashboard/activities?limit=${limit}`
    );
  },

  /**
   * Admin Profile
   */
  async getProfile() {
    return api.get(
      "/dashboard/profile"
    );
  },

  /**
   * Update Profile
   */
  async updateProfile(data) {
    return api.put(
      "/dashboard/profile",
      data
    );
  },

  /**
   * Dashboard Settings
   */
  async getSettings() {
    return api.get(
      "/dashboard/settings"
    );
  },

  /**
   * Update Settings
   */
  async updateSettings(data) {
    return api.put(
      "/dashboard/settings",
      data
    );
  },
};

export default dashboardService;