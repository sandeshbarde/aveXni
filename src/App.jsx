import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import {
  ThemeProvider,
  AuthProvider,
  CartProvider,
  OrderProvider,
  GalleryProvider,
  NotificationProvider,
  AppProvider,
} from "./context";

import "./assets/styles/variables.css";
import "./assets/styles/globals.css";
import "./assets/styles/animations.css";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <OrderProvider>
              <GalleryProvider>
                <NotificationProvider>
                  <AppProvider>
                    <AppRoutes />
                  </AppProvider>
                </NotificationProvider>
              </GalleryProvider>
            </OrderProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}