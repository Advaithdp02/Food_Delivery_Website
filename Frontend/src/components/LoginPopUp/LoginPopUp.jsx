import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="loginpopup">
      <form className="login-pop-up-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close"
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign up" && <input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Email Id" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <label htmlFor="terms">
            <input type="checkbox" id="terms" required />
           By Clicking this, you agree to the terms and conditions stated by us.
          </label>
        </div>

        {currentState === "Login" ? (
          <p>
            Create An Account{' '}
            <span onClick={() => setCurrentState("Sign up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already Have an Account?{' '}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
