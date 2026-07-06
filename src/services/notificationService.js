import api from "@/utils/api";

const notificationService = {
  /**
   * Get All Notifications
   */
  async getNotifications(params = "") {
    const query = params ? `?${params}` : "";

    return api.get(`/notifications${query}`);
  },

  /**
   * Get Notification By ID
   */
  async getNotification(id) {
    return api.get(`/notifications/${id}`);
  },

  /**
   * Create Notification
   */
  async createNotification(data) {
    return api.post("/notifications", data);
  },

  /**
   * Update Notification
   */
  async updateNotification(id, data) {
    return api.put(`/notifications/${id}`, data);
  },

  /**
   * Delete Notification
   */
  async deleteNotification(id) {
    return api.delete(`/notifications/${id}`);
  },

  /**
   * Mark as Read
   */
  async markAsRead(id) {
    return api.patch(
      `/notifications/${id}/read`,
      {}
    );
  },

  /**
   * Mark All as Read
   */
  async markAllAsRead() {
    return api.patch(
      "/notifications/read-all",
      {}
    );
  },

  /**
   * Mark as Unread
   */
  async markAsUnread(id) {
    return api.patch(
      `/notifications/${id}/unread`,
      {}
    );
  },

  /**
   * Clear All Notifications
   */
  async clearAll() {
    return api.delete(
      "/notifications/clear"
    );
  },

  /**
   * Get Unread Count
   */
  async getUnreadCount() {
    return api.get(
      "/notifications/unread-count"
    );
  },

  /**
   * Send Push Notification
   */
  async sendPush(data) {
    return api.post(
      "/notifications/push",
      data
    );
  },

  /**
   * Send Email Notification
   */
  async sendEmail(data) {
    return api.post(
      "/notifications/email",
      data
    );
  },

  /**
   * Send SMS Notification
   */
  async sendSMS(data) {
    return api.post(
      "/notifications/sms",
      data
    );
  },

  /**
   * Subscribe Device
   */
  async subscribe(data) {
    return api.post(
      "/notifications/subscribe",
      data
    );
  },

  /**
   * Unsubscribe Device
   */
  async unsubscribe(data) {
    return api.post(
      "/notifications/unsubscribe",
      data
    );
  },

  /**
   * Notification Settings
   */
  async getSettings() {
    return api.get(
      "/notifications/settings"
    );
  },

  /**
   * Update Notification Settings
   */
  async updateSettings(data) {
    return api.put(
      "/notifications/settings",
      data
    );
  },

  /**
   * Notification Statistics
   */
  async getStatistics() {
    return api.get(
      "/notifications/statistics"
    );
  },
};

export default notificationService;