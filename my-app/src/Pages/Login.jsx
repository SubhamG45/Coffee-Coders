import React from "react";
import "./Login.css"; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🌾 Agri Market Login</h1>
        <p>Access your account to Buy & Sell Crops</p>

        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
