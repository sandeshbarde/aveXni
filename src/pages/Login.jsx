import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/UI";
import {
  SEO,
  ScrollProgress,
  CursorGlow,
} from "@/components/Common";

import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", form);

    // TODO:
    // Connect your backend API here
  };

  return (
    <>
      <SEO
        title="Login | aveXni"
        description="Login to your aveXni account."
      />

      <ScrollProgress />
      <CursorGlow />

      <Navbar />

      <main className="login-page">
        <div className="container">
          <div className="login-card">

            <h1>Welcome Back</h1>

            <p>Login to your account</p>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <Mail size={20} />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">

                <Lock size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="password-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

              <Button type="submit">
                Login
              </Button>

            </form>

            <p className="login-footer">
              Don't have an account?

              <Link to="/register">
                Register
              </Link>
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}