import { motion } from "framer-motion";
import {
  Users,
  ShoppingBag,
  Image,
  DollarSign,
  Package,
  TrendingUp,
} from "lucide-react";

import "./Dashboard.css";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Orders",
      value: "248",
      icon: <ShoppingBag size={30} />,
    },
    {
      title: "Customers",
      value: "186",
      icon: <Users size={30} />,
    },
    {
      title: "Gallery Images",
      value: "520",
      icon: <Image size={30} />,
    },
    {
      title: "Revenue",
      value: "₹1,24,500",
      icon: <DollarSign size={30} />,
    },
  ];

  return (
    <div className="dashboard">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Admin Dashboard</h1>
          <p>Welcome to the aveXni Admin Panel</p>
        </motion.div>

        <div className="dashboard-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="dashboard-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="dashboard-icon">
                {item.icon}
              </div>

              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="dashboard-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Recent Activity</h2>

          <ul>
            <li>
              <Package size={18} />
              Order #AVX1023 received.
            </li>

            <li>
              <Users size={18} />
              New customer registered.
            </li>

            <li>
              <TrendingUp size={18} />
              Revenue increased by 18% this month.
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}