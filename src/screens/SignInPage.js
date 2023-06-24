import React from "react";
import { Link, Navigate } from "react-router-dom";

const SignInPage = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSignIn,
  loggedIn,
  error,
}) => (
  <div>
    <h3>Sign In</h3>
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
    <button onClick={handleSignIn}>Sign In</button>
    {loggedIn && <Navigate to="/dashboard" />}
    {error && <p>{error}</p>}
    <p>
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </p>
    <p>
      Forgot your password? <Link to="/reset-password">Reset Password</Link>
    </p>
  </div>
);

export default SignInPage;
