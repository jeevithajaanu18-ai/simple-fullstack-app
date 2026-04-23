import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OTP.css';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errors, setErrors] = useState({});

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto focus next
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (otp.some(digit => !digit)) newErrors.otp = 'Please enter all 6 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Dummy logic: simulate OTP verification
      alert('OTP verified! (Dummy)');
      // Navigate to reset password
      window.location.href = '/reset-password';
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card glass">
        <h1>Verify OTP</h1>
        <p>Enter the 6-digit code sent to your email/phone</p>
        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                maxLength="1"
                className="otp-digit"
              />
            ))}
          </div>
          {errors.otp && <span className="error-text">{errors.otp}</span>}
          <button type="submit" className="verify-btn">Verify</button>
        </form>
        <Link to="/forgot-password" className="resend-link">Resend OTP</Link>
      </div>
    </div>
  );
};

export default OTP;