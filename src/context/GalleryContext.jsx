import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const GalleryContext = createContext(null);

export function GalleryProvider({ children }) {
  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem("gallery");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "gallery",
      JSON.stringify(gallery)
    );
  }, [gallery]);

  // Add Image

  const addImage = (image) => {
    const newImage = {
      id: Date.now().toString(),
      title: image.title || "Untitled",
      category: image.category || "Portrait",
      image: image.image || "",
      description:
        image.description || "",
      featured: image.featured || false,
      createdAt: new Date().toISOString(),
    };

    setGallery((prev) => [
      newImage,
      ...prev,
    ]);

    return newImage;
  };

  // Update Image

  const updateImage = (id, updates) => {
    setGallery((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updates,
            }
          : item
      )
    );
  };

  // Delete Image

  const deleteImage = (id) => {
    setGallery((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  // Find Image

  const getImage = (id) => {
    return gallery.find(
      (item) => item.id === id
    );
  };

  // Filter By Category

  const getImagesByCategory = (
    category
  ) => {
    if (
      !category ||
      category === "All"
    ) {
      return gallery;
    }

    return gallery.filter(
      (item) =>
        item.category === category
    );
  };

  // Toggle Featured

  const toggleFeatured = (id) => {
    setGallery((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              featured:
                !item.featured,
            }
          : item
      )
    );
  };

  // Clear Gallery

  const clearGallery = () => {
    setGallery([]);
  };

  const totalImages = useMemo(
    () => gallery.length,
    [gallery]
  );

  const featuredImages = useMemo(
    () =>
      gallery.filter(
        (item) => item.featured
      ),
    [gallery]
  );

  return (
    <GalleryContext.Provider
      value={{
        gallery,
        addImage,
        updateImage,
        deleteImage,
        getImage,
        getImagesByCategory,
        toggleFeatured,
        clearGallery,
        totalImages,
        featuredImages,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context =
    useContext(GalleryContext);

  if (!context) {
    throw new Error(
      "useGallery must be used inside GalleryProvider"
    );
  }

  return context;
}