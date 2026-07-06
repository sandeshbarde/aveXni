import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Image,
  Package,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      title: "Orders",
      icon: ShoppingBag,
      path: "/admin/orders",
    },
    {
      title: "Customers",
      icon: Users,
      path: "/admin/customers",
    },
    {
      title: "Gallery",
      icon: Image,
      path: "/admin/gallery",
    },
    {
      title: "Products",
      icon: Package,
      path: "/admin/products",
    },
    {
      title: "Reviews",
      icon: MessageSquare,
      path: "/admin/reviews",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <h2>

          ave<span>X</span>ni

        </h2>

        <p>Admin Panel</p>

      </div>

      {/* Navigation */}

      <nav className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <Icon size={22} />

              <span>{item.title}</span>

            </NavLink>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="sidebar-footer">

        <button
          type="button"
          className="logout-btn"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}