import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!emailOrPhone) newErrors.emailOrPhone = 'Email or Phone is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Dummy logic: simulate login success
      alert('Login successful! (Dummy)');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card glass">
        <h1>Welcome to RouteMate</h1>
        <p>Sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="emailOrPhone">Email or Phone</label>
            <input
              type="text"
              id="emailOrPhone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className={errors.emailOrPhone ? 'error' : ''}
            />
            {errors.emailOrPhone && <span className="error-text">{errors.emailOrPhone}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>
        <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;