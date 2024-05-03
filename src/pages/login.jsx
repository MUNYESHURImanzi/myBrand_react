import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import leftImage from "../assets/image/munyeshuri-pic.png";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://mybland-backend-c3uv.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        window.location = "/dashboard/dashboard.html";
      } else {
        toast.error("Token not received");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main-container">
      <div className="nav-bar"></div>
      <div className="section-container">
        <div className="section-side section-side-left">
          <img src={leftImage} alt="" />
        </div>
        <div className="section-side section-side-right">
          <h3 className="text-yellow text-center">MMAP</h3>
          <h2 className="text-center">
            Hi, Welcome Back to My Brand. <br />{" "}
            <Link to="/signup" className="link">
              New here!
            </Link>
          </h2>
          <form className="signupform-container" id="loginForm">
            <div className="input-container">
              <p className="normal-text">Email</p>
              <div className="input-content">
                <span className="material-symbols-outlined input-left-icon">
                  mail
                </span>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-container">
              <p className="normal-text">Password</p>
              <div className="input-content">
                <span className="material-symbols-outlined input-left-icon">
                  lock
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="material-symbols-outlined input-right-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "visibility" : "visibility_off"}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogin}
              id="loginButton"
              type="button"
              className="submit-button"
              style={{ backgroundColor: "aquamarine" }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="small-text red-text error" id="signup-form-name-error"></p>
          <p id="success-text" className="success-text"></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
