const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

/**
 * Generic API Request
 */
async function request(
  endpoint,
  options = {}
) {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      config
    );

    const contentType =
      response.headers.get("content-type");

    let data;

    if (
      contentType &&
      contentType.includes(
        "application/json"
      )
    ) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      throw new Error(
        data?.message ||
          `Request failed (${response.status})`
      );
    }

    return data;
  } catch (error) {
    console.error(
      "API Error:",
      error.message
    );
    throw error;
  }
}

/* ===========================
   HTTP METHODS
=========================== */

const api = {
  get(endpoint) {
    return request(endpoint, {
      method: "GET",
    });
  },

  post(endpoint, body) {
    return request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  put(endpoint, body) {
    return request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  },

  patch(endpoint, body) {
    return request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  },

  delete(endpoint) {
    return request(endpoint, {
      method: "DELETE",
    });
  },

  upload(endpoint, formData) {
    const token =
      localStorage.getItem("token");

    return fetch(
      `${BASE_URL}${endpoint}`,
      {
        method: "POST",

        headers: {
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },

        body: formData,
      }
    ).then(async (response) => {
      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Upload failed"
        );
      }

      return data;
    });
  },
};

export default api;