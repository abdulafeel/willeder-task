import React from "react";
import { Link, Navigate } from "react-router-dom";

const SignUpPage = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSignUp,
  loggedIn,
  error,
}) => (
  <div>
    <h3>Sign Up</h3>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleSignUp}>Sign Up</button>
    {loggedIn && <Navigate to="/dashboard" />}
    {error && <p>{error}</p>}
    <p>
      Already have an account? <Link to="/signin">Sign In</Link>
    </p>
  </div>
);

export default SignUpPage;
