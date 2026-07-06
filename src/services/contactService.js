import api from "@/utils/api";

const contactService = {
  /**
   * Send Contact Form
   */
  async sendMessage(data) {
    return api.post("/contact", data);
  },

  /**
   * Get All Contact Messages (Admin)
   */
  async getMessages(params = "") {
    const query = params ? `?${params}` : "";

    return api.get(`/contact${query}`);
  },

  /**
   * Get Single Message
   */
  async getMessage(id) {
    return api.get(`/contact/${id}`);
  },

  /**
   * Reply to Message
   */
  async replyMessage(id, data) {
    return api.post(
      `/contact/${id}/reply`,
      data
    );
  },

  /**
   * Mark Message as Read
   */
  async markAsRead(id) {
    return api.patch(
      `/contact/${id}/read`,
      {
        read: true,
      }
    );
  },

  /**
   * Mark Message as Unread
   */
  async markAsUnread(id) {
    return api.patch(
      `/contact/${id}/read`,
      {
        read: false,
      }
    );
  },

  /**
   * Archive Message
   */
  async archiveMessage(id) {
    return api.patch(
      `/contact/${id}/archive`,
      {}
    );
  },

  /**
   * Delete Message
   */
  async deleteMessage(id) {
    return api.delete(`/contact/${id}`);
  },

  /**
   * Search Messages
   */
  async searchMessages(keyword) {
    return api.get(
      `/contact/search/${encodeURIComponent(
        keyword
      )}`
    );
  },

  /**
   * Contact Statistics
   */
  async getStatistics() {
    return api.get(
      "/contact/statistics"
    );
  },

  /**
   * Export Messages
   */
  async exportMessages(format = "csv") {
    return api.get(
      `/contact/export?format=${format}`
    );
  },

  /**
   * Newsletter Subscription
   */
  async subscribe(email) {
    return api.post(
      "/newsletter/subscribe",
      {
        email,
      }
    );
  },

  /**
   * Newsletter Unsubscribe
   */
  async unsubscribe(email) {
    return api.post(
      "/newsletter/unsubscribe",
      {
        email,
      }
    );
  },
};

export default contactService;