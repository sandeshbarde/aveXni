import {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

import { Toast } from "@/components/UI";

const NotificationContext = createContext(null);

export function NotificationProvider({
  children,
}) {
  const [notification, setNotification] =
    useState({
      open: false,
      type: "success",
      title: "",
      message: "",
      duration: 3000,
    });

  const showNotification = useCallback(
    ({
      type = "success",
      title = "",
      message = "",
      duration = 3000,
    }) => {
      setNotification({
        open: true,
        type,
        title,
        message,
        duration,
      });
    },
    []
  );

  const hideNotification =
    useCallback(() => {
      setNotification((prev) => ({
        ...prev,
        open: false,
      }));
    }, []);

  const success = (
    title,
    message,
    duration = 3000
  ) =>
    showNotification({
      type: "success",
      title,
      message,
      duration,
    });

  const error = (
    title,
    message,
    duration = 3000
  ) =>
    showNotification({
      type: "error",
      title,
      message,
      duration,
    });

  const warning = (
    title,
    message,
    duration = 3000
  ) =>
    showNotification({
      type: "warning",
      title,
      message,
      duration,
    });

  const info = (
    title,
    message,
    duration = 3000
  ) =>
    showNotification({
      type: "info",
      title,
      message,
      duration,
    });

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        hideNotification,
        success,
        error,
        warning,
        info,
      }}
    >
      {children}

      <Toast
        open={notification.open}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        duration={notification.duration}
        onClose={hideNotification}
      />
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(
    NotificationContext
  );

  if (!context) {
    throw new Error(
      "useNotification must be used inside NotificationProvider"
    );
  }

  return context;
}