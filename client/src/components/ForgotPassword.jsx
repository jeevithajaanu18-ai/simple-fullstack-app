import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!emailOrPhone) newErrors.emailOrPhone = 'Email or Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Dummy logic: simulate sending OTP
      alert('OTP sent! (Dummy)');
      // Navigate to OTP page
      window.location.href = '/otp';
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card glass">
        <h1>Forgot Password</h1>
        <p>Enter your email or phone to receive OTP</p>
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
          <button type="submit" className="send-btn">Send OTP</button>
        </form>
        <Link to="/" className="back-link">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;