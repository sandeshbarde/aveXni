import api from "@/utils/api";

const galleryService = {
  /**
   * Get All Gallery Images
   */
  async getGallery(params = "") {
    const query = params ? `?${params}` : "";

    return api.get(`/gallery${query}`);
  },

  /**
   * Get Featured Images
   */
  async getFeatured() {
    return api.get("/gallery/featured");
  },

  /**
   * Get Image By ID
   */
  async getImageById(id) {
    return api.get(`/gallery/${id}`);
  },

  /**
   * Get Images By Category
   */
  async getByCategory(category) {
    return api.get(
      `/gallery/category/${encodeURIComponent(category)}`
    );
  },

  /**
   * Search Images
   */
  async search(keyword) {
    return api.get(
      `/gallery/search/${encodeURIComponent(keyword)}`
    );
  },

  /**
   * Add Image
   */
  async createImage(data) {
    return api.post("/gallery", data);
  },

  /**
   * Update Image
   */
  async updateImage(id, data) {
    return api.put(`/gallery/${id}`, data);
  },

  /**
   * Delete Image
   */
  async deleteImage(id) {
    return api.delete(`/gallery/${id}`);
  },

  /**
   * Upload Gallery Image
   */
  async uploadImage(file) {
    const formData = new FormData();

    formData.append("image", file);

    return api.upload(
      "/gallery/upload",
      formData
    );
  },

  /**
   * Toggle Featured
   */
  async toggleFeatured(id) {
    return api.patch(
      `/gallery/${id}/featured`,
      {}
    );
  },

  /**
   * Like Image
   */
  async likeImage(id) {
    return api.patch(
      `/gallery/${id}/like`,
      {}
    );
  },

  /**
   * Get Gallery Statistics
   */
  async getStatistics() {
    return api.get("/gallery/statistics");
  },
};

export default galleryService;