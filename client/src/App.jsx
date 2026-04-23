import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [view, setView] = useState('login'); // login, signup, forgot, otp, reset
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({});

  const handleTransition = (newView) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView(newView);
      setIsTransitioning(false);
      setErrors({});
    }, 300); // match CSS animation duration
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({ form: 'Please fill in all fields' });
      return;
    }
    // Dummy logic
    alert('Login successful! (Demo)');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setErrors({ form: 'Please fill in all required fields' });
      return;
    }
    // Dummy logic
    alert('Signup successful! Please login. (Demo)');
    handleTransition('login');
  };

  const handleForgot = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors({ form: 'Please enter your email/phone' });
      return;
    }
    handleTransition('otp');
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    handleTransition('reset');
  };

  const handleReset = (e) => {
    e.preventDefault();
    alert('Password reset successfully! (Demo)');
    handleTransition('login');
  };

  const autoFocusNext = (e) => {
    if (e.target.value.length === 1) {
      const nextSibling = e.target.nextElementSibling;
      if (nextSibling) {
        nextSibling.focus();
      }
    }
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return (
          <form className="glass-form" onSubmit={handleLogin}>
            <h2>Welcome Back</h2>
            <p className="subtitle">Sign in to book your next journey.</p>
            {errors.form && <div className="error-msg">{errors.form}</div>}
            
            <div className="input-group">
              <label>Email or Mobile Number</label>
              <input 
                type="text" 
                placeholder="Enter email or mobile" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            
            <div className="form-actions">
              <span className="text-link" onClick={() => handleTransition('forgot')}>Forgot Password?</span>
            </div>
            
            <button type="submit" className="primary-btn">Sign In</button>
            
            <div className="form-footer">
              <p>Don't have an account? <span className="text-link" onClick={() => handleTransition('signup')}>Sign up</span></p>
            </div>
          </form>
        );

      case 'signup':
        return (
          <form className="glass-form" onSubmit={handleSignup}>
            <h2>Create Account</h2>
            <p className="subtitle">Join us and start traveling.</p>
            {errors.form && <div className="error-msg">{errors.form}</div>}

            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="input-group">
              <label>Email or Mobile Number</label>
              <input 
                type="text" 
                placeholder="Enter email or mobile" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Create a strong password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            
            <button type="submit" className="primary-btn">Sign Up</button>
            
            <div className="form-footer">
              <p>Already have an account? <span className="text-link" onClick={() => handleTransition('login')}>Sign in</span></p>
            </div>
          </form>
        );

      case 'forgot':
        return (
          <form className="glass-form" onSubmit={handleForgot}>
            <h2>Reset Password</h2>
            <p className="subtitle">Enter your registered email or mobile to receive an OTP.</p>
            {errors.form && <div className="error-msg">{errors.form}</div>}
            
            <div className="input-group">
              <label>Email or Mobile Number</label>
              <input 
                type="text" 
                placeholder="Enter email or mobile" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <button type="submit" className="primary-btn">Send OTP</button>
            
            <div className="form-footer">
              <span className="text-link" onClick={() => handleTransition('login')}>Back to Sign In</span>
            </div>
          </form>
        );

      case 'otp':
        return (
          <form className="glass-form" onSubmit={handleVerifyOTP}>
            <h2>Enter OTP</h2>
            <p className="subtitle">We've sent a 4-digit code to your contact.</p>
            
            <div className="otp-inputs">
              {[1, 2, 3, 4].map((i) => (
                <input 
                  key={i} 
                  type="text" 
                  maxLength="1" 
                  className="otp-digit"
                  onChange={autoFocusNext}
                  required
                />
              ))}
            </div>
            
            <button type="submit" className="primary-btn">Verify OTP</button>
            
            <div className="form-footer">
              <p>Didn't receive the code? <span className="text-link">Resend OTP</span></p>
              <span className="text-link" onClick={() => handleTransition('login')}>Cancel</span>
            </div>
          </form>
        );

      case 'reset':
        return (
          <form className="glass-form" onSubmit={handleReset}>
            <h2>Create New Password</h2>
            <p className="subtitle">Enter your new password below.</p>
            
            <div className="input-group">
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" required />
            </div>
            
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm new password" required />
            </div>
            
            <button type="submit" className="primary-btn">Update Password</button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper">
      <div className="background-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="bus-icon bus-1">
          <svg viewBox="0 0 24 24" width="200" height="200" stroke="currentColor" strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.1">
            <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            <circle cx="6" cy="18" r="2"></circle>
            <circle cx="18" cy="18" r="2"></circle>
            <path d="M2 10h20"></path>
            <path d="M6 6v4"></path>
            <path d="M10 6v4"></path>
            <path d="M14 6v4"></path>
            <path d="M18 6v4"></path>
          </svg>
        </div>
        <div className="bus-icon bus-2">
          <svg viewBox="0 0 24 24" width="150" height="150" stroke="currentColor" strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.08">
            <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            <circle cx="6" cy="18" r="2"></circle>
            <circle cx="18" cy="18" r="2"></circle>
            <path d="M2 10h20"></path>
            <path d="M6 6v4"></path>
            <path d="M10 6v4"></path>
            <path d="M14 6v4"></path>
            <path d="M18 6v4"></path>
          </svg>
        </div>
        <div className="bus-icon bus-3">
          <svg viewBox="0 0 24 24" width="120" height="120" stroke="currentColor" strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.06">
            <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            <circle cx="6" cy="18" r="2"></circle>
            <circle cx="18" cy="18" r="2"></circle>
            <path d="M2 10h20"></path>
            <path d="M6 6v4"></path>
            <path d="M10 6v4"></path>
            <path d="M14 6v4"></path>
            <path d="M18 6v4"></path>
          </svg>
        </div>
      </div>
      
      <div className="glass-container">
        <div className="brand-section">
          <div className="logo">
            <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
              <circle cx="6" cy="18" r="2"></circle>
              <circle cx="18" cy="18" r="2"></circle>
              <path d="M2 10h20"></path>
              <path d="M6 6v4"></path>
              <path d="M10 6v4"></path>
              <path d="M14 6v4"></path>
              <path d="M18 6v4"></path>
            </svg>
            <h1>Route<span>Mate</span></h1>
          </div>
          <p>The smartest way to book your bus tickets online. Enjoy seamless travel experience with us.</p>
        </div>
        
        <div className={`form-section ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {renderView()}
        </div>
      </div>
    </div>
  );
};

export default App;