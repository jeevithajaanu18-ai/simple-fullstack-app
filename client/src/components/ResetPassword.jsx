import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!newPassword) newErrors.newPassword = 'New password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    if (newPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Dummy logic: simulate password reset
      alert('Password reset successful! (Dummy)');
      // Navigate to login
      window.location.href = '/';
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card glass">
        <h1>Reset Password</h1>
        <p>Enter your new password</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={errors.newPassword ? 'error' : ''}
            />
            {errors.newPassword && <span className="error-text">{errors.newPassword}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>
          <button type="submit" className="reset-btn">Reset Password</button>
        </form>
        <Link to="/" className="back-link">Back to Login</Link>
      </div>
    </div>
  );
};

export default ResetPassword;