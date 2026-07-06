import api from "@/utils/api";

const userService = {
  /**
   * Get Current User
   */
  async getProfile() {
    return api.get("/users/profile");
  },

  /**
   * Update Profile
   */
  async updateProfile(data) {
    return api.put("/users/profile", data);
  },

  /**
   * Upload Profile Avatar
   */
  async uploadAvatar(file) {
    const formData = new FormData();

    formData.append("avatar", file);

    return api.upload(
      "/users/avatar",
      formData
    );
  },

  /**
   * Change Password
   */
  async changePassword(data) {
    return api.put(
      "/users/change-password",
      data
    );
  },

  /**
   * Delete Account
   */
  async deleteAccount() {
    return api.delete("/users/profile");
  },

  /**
   * Get All Users (Admin)
   */
  async getUsers(params = "") {
    const query = params ? `?${params}` : "";

    return api.get(`/users${query}`);
  },

  /**
   * Get User By ID
   */
  async getUserById(id) {
    return api.get(`/users/${id}`);
  },

  /**
   * Create User (Admin)
   */
  async createUser(data) {
    return api.post("/users", data);
  },

  /**
   * Update User (Admin)
   */
  async updateUser(id, data) {
    return api.put(`/users/${id}`, data);
  },

  /**
   * Delete User (Admin)
   */
  async deleteUser(id) {
    return api.delete(`/users/${id}`);
  },

  /**
   * Search Users
   */
  async searchUsers(keyword) {
    return api.get(
      `/users/search/${encodeURIComponent(
        keyword
      )}`
    );
  },

  /**
   * Get User Orders
   */
  async getUserOrders(id) {
    return api.get(
      `/users/${id}/orders`
    );
  },

  /**
   * Get User Notifications
   */
  async getNotifications(id) {
    return api.get(
      `/users/${id}/notifications`
    );
  },

  /**
   * Get Wishlist
   */
  async getWishlist() {
    return api.get("/users/wishlist");
  },

  /**
   * Add Wishlist Item
   */
  async addToWishlist(productId) {
    return api.post(
      "/users/wishlist",
      {
        productId,
      }
    );
  },

  /**
   * Remove Wishlist Item
   */
  async removeFromWishlist(
    productId
  ) {
    return api.delete(
      `/users/wishlist/${productId}`
    );
  },

  /**
   * Get User Statistics
   */
  async getStatistics() {
    return api.get(
      "/users/statistics"
    );
  },
};

export default userService;