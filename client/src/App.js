import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [view, setView] = useState('login'); // login, signup, forgot, otp, reset
  const [formData, setData] = useState({ email: '', password: '', otp: '' });

  const handleTransition = (newView) => {
    // Simple animation delay simulation
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return (
          <div className="glass-card fade-in">
            <h2 className="brand-logo">RouteMate</h2>
            <h3>Login</h3>
            <input type="text" placeholder="Email or Phone Number" className="glass-input" />
            <input type="password" placeholder="Password" className="glass-input" />
            <button className="primary-btn" onClick={() => alert('Logged in (Demo)')}>LOGIN</button>
            <div className="form-footer">
              <span onClick={() => handleTransition('forgot')}>Forgot Password?</span>
              <span onClick={() => handleTransition('signup')}>New user? Sign Up</span>
            </div>
          </div>
        );

      case 'signup':
        return (
          <div className="glass-card fade-in">
            <h2 className="brand-logo">redBus <span>Clone</span></h2>
            <h3>Join Us</h3>
            <input type="text" placeholder="Full Name" className="glass-input" />
            <input type="text" placeholder="Email/Phone" className="glass-input" />
            <input type="password" placeholder="Create Password" className="glass-input" />
            <button className="primary-btn" onClick={() => handleTransition('login')}>SIGN UP</button>
            <div className="form-footer">
              <span onClick={() => handleTransition('login')}>Already have an account? Login</span>
            </div>
          </div>
        );

      case 'forgot':
        return (
          <div className="glass-card fade-in">
            <h3>Reset Password</h3>
            <p>Enter your registered email to receive an OTP.</p>
            <input type="email" placeholder="Enter Email" className="glass-input" />
            <button className="primary-btn" onClick={() => handleTransition('otp')}>GENERATE OTP</button>
            <div className="form-footer">
              <span onClick={() => handleTransition('login')}>Back to Login</span>
            </div>
          </div>
        );

      case 'otp':
        return (
          <div className="glass-card fade-in">
            <h3>OTP Verification</h3>
            <p>We've sent a code to your email.</p>
            <div className="otp-container">
              {[1, 2, 3, 4].map((i) => (
                <input key={i} type="text" maxLength="1" className="otp-input" />
              ))}
            </div>
            <button className="primary-btn" onClick={() => handleTransition('reset')}>VERIFY</button>
            <div className="form-footer">
              <span>Resend OTP in 30s</span>
            </div>
          </div>
        );

      case 'reset':
        return (
          <div className="glass-card fade-in">
            <h3>New Password</h3>
            <input type="password" placeholder="New Password" className="glass-input" />
            <input type="password" placeholder="Confirm Password" className="glass-input" />
            <button className="primary-btn" onClick={() => handleTransition('login')}>UPDATE PASSWORD</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      {renderView()}
    </div>
  );
};

export default App;