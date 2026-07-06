import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [language, setLanguage] =
    useState("en");

  const [currency, setCurrency] =
    useState("INR");

  const [notifications, setNotifications] =
    useState(true);

  // App Loading

  const startLoading = () =>
    setLoading(true);

  const stopLoading = () =>
    setLoading(false);

  // Sidebar

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Search

  const clearSearch = () => {
    setSearch("");
  };

  // Reset App

  const resetApp = () => {
    setLoading(false);
    setSidebarOpen(false);
    setSearch("");
    setLanguage("en");
    setCurrency("INR");
    setNotifications(true);
  };

  // Save Preferences

  useEffect(() => {
    localStorage.setItem(
      "app_settings",
      JSON.stringify({
        language,
        currency,
        notifications,
      })
    );
  }, [
    language,
    currency,
    notifications,
  ]);

  // Load Preferences

  useEffect(() => {
    const saved = localStorage.getItem(
      "app_settings"
    );

    if (!saved) return;

    try {
      const settings = JSON.parse(saved);

      setLanguage(
        settings.language || "en"
      );

      setCurrency(
        settings.currency || "INR"
      );

      setNotifications(
        settings.notifications ??
          true
      );
    } catch (error) {
      console.error(error);
    }
  }, []);

  const value = useMemo(
    () => ({
      loading,
      startLoading,
      stopLoading,

      sidebarOpen,
      toggleSidebar,
      openSidebar,
      closeSidebar,

      search,
      setSearch,
      clearSearch,

      language,
      setLanguage,

      currency,
      setCurrency,

      notifications,
      setNotifications,

      resetApp,
    }),
    [
      loading,
      sidebarOpen,
      search,
      language,
      currency,
      notifications,
    ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider."
    );
  }

  return context;
}