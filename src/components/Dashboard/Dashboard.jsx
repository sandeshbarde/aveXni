import { motion } from "framer-motion";
import {
  ShoppingBag,
  Users,
  Package,
  IndianRupee,
  Clock,
  CheckCircle,
} from "lucide-react";

import "./Dashboard.css";

const stats = [
  {
    id: 1,
    title: "Total Orders",
    value: "1,284",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Customers",
    value: "968",
    icon: Users,
  },
  {
    id: 3,
    title: "Pending Orders",
    value: "32",
    icon: Clock,
  },
  {
    id: 4,
    title: "Completed",
    value: "1,252",
    icon: CheckCircle,
  },
];

const recentOrders = [
  {
    id: "#AVX1021",
    customer: "Rahul Sharma",
    size: "A3",
    status: "In Progress",
    amount: "₹2,999",
  },
  {
    id: "#AVX1022",
    customer: "Priya Patel",
    size: "A2",
    status: "Completed",
    amount: "₹4,999",
  },
  {
    id: "#AVX1023",
    customer: "Amit Verma",
    size: "A4",
    status: "Shipped",
    amount: "₹1,999",
  },
  {
    id: "#AVX1024",
    customer: "Sneha Joshi",
    size: "A1",
    status: "Pending",
    amount: "₹6,999",
  },
];

export default function Dashboard() {
  return (
    <section className="dashboard">

      <div className="dashboard-header">

        <h1>Admin Dashboard</h1>

        <p>
          Welcome back! Here's today's overview.
        </p>

      </div>

      {/* Statistics */}

      <div className="dashboard-stats">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              className="stat-card"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >

              <div className="stat-icon">

                <Icon size={30} />

              </div>

              <div>

                <h3>{item.value}</h3>

                <p>{item.title}</p>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Revenue */}

      <motion.div
        className="revenue-card"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      >

        <IndianRupee size={36} />

        <div>

          <h2>₹2,48,500</h2>

          <p>Total Revenue This Month</p>

        </div>

      </motion.div>

      {/* Orders Table */}

      <div className="orders-table">

        <div className="table-header">

          <h2>

            <Package size={24} />

            Recent Orders

          </h2>

        </div>

        <table>

          <thead>

            <tr>

              <th>Order ID</th>
              <th>Customer</th>
              <th>Size</th>
              <th>Status</th>
              <th>Amount</th>

            </tr>

          </thead>

          <tbody>

            {recentOrders.map((order) => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.size}</td>

                <td>

                  <span
                    className={`status ${order.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {order.status}
                  </span>

                </td>

                <td>{order.amount}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}