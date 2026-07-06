import api from "@/utils/api";

const uploadService = {
  /**
   * Upload Single Image
   */
  async uploadImage(file, folder = "uploads") {
    if (!file) {
      throw new Error("No file selected.");
    }

    const formData = new FormData();

    formData.append("image", file);
    formData.append("folder", folder);

    return api.upload("/upload/image", formData);
  },

  /**
   * Upload Multiple Images
   */
  async uploadImages(
    files,
    folder = "uploads"
  ) {
    if (!files || files.length === 0) {
      throw new Error("No files selected.");
    }

    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("images", file);
    });

    formData.append("folder", folder);

    return api.upload(
      "/upload/images",
      formData
    );
  },

  /**
   * Upload Avatar
   */
  async uploadAvatar(file) {
    const formData = new FormData();

    formData.append("avatar", file);

    return api.upload(
      "/upload/avatar",
      formData
    );
  },

  /**
   * Upload Gallery Image
   */
  async uploadGalleryImage(file) {
    const formData = new FormData();

    formData.append("image", file);

    return api.upload(
      "/upload/gallery",
      formData
    );
  },

  /**
   * Upload Order Reference Image
   */
  async uploadOrderImage(file) {
    const formData = new FormData();

    formData.append("image", file);

    return api.upload(
      "/upload/order",
      formData
    );
  },

  /**
   * Upload Profile Cover
   */
  async uploadCover(file) {
    const formData = new FormData();

    formData.append("cover", file);

    return api.upload(
      "/upload/cover",
      formData
    );
  },

  /**
   * Delete Uploaded File
   */
  async deleteFile(fileId) {
    return api.delete(
      `/upload/${fileId}`
    );
  },

  /**
   * Get Uploaded File
   */
  async getFile(fileId) {
    return api.get(
      `/upload/${fileId}`
    );
  },

  /**
   * Compress Image (Backend)
   */
  async compressImage(file) {
    const formData = new FormData();

    formData.append("image", file);

    return api.upload(
      "/upload/compress",
      formData
    );
  },
};

export default uploadService;