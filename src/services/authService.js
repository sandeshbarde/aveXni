import api from "@/utils/api";

const authService = {
  /**
   * Login
   */
  async login(credentials) {
    return api.post("/auth/login", credentials);
  },

  /**
   * Register
   */
  async register(userData) {
    return api.post("/auth/register", userData);
  },

  /**
   * Logout
   */
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  /**
   * Get Current User
   */
  async getCurrentUser() {
    return api.get("/auth/me");
  },

  /**
   * Update Profile
   */
  async updateProfile(data) {
    return api.put("/auth/profile", data);
  },

  /**
   * Change Password
   */
  async changePassword(data) {
    return api.put("/auth/change-password", data);
  },

  /**
   * Forgot Password
   */
  async forgotPassword(email) {
    return api.post("/auth/forgot-password", {
      email,
    });
  },

  /**
   * Reset Password
   */
  async resetPassword(token, password) {
    return api.post("/auth/reset-password", {
      token,
      password,
    });
  },

  /**
   * Verify Email
   */
  async verifyEmail(token) {
    return api.post("/auth/verify-email", {
      token,
    });
  },

  /**
   * Refresh Token
   */
  async refreshToken() {
    return api.post("/auth/refresh-token");
  },

  /**
   * Save Authentication
   */
  saveAuth(user, token) {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    localStorage.setItem("token", token);
  },

  /**
   * Get Token
   */
  getToken() {
    return localStorage.getItem("token");
  },

  /**
   * Get Stored User
   */
  getUser() {
    const user =
      localStorage.getItem("user");

    return user
      ? JSON.parse(user)
      : null;
  },

  /**
   * Check Login
   */
  isAuthenticated() {
    return !!localStorage.getItem(
      "token"
    );
  },
};

export default authService;