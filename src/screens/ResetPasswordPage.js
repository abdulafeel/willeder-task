import React from "react";
import { Link } from "react-router-dom";

const ResetPasswordPage = ({
  email,
  setEmail,
  handleResetPassword,
  resetEmailSent,
  error,
}) => (
  <div>
    <h3>Reset Password</h3>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button onClick={handleResetPassword}>Send Reset Email</button>
    {resetEmailSent && <p>Password reset email sent.</p>}
    {error && <p>{error}</p>}
    <p>
      Remembered your password? <Link to="/signin">Sign In</Link>
    </p>
  </div>
);

export default ResetPasswordPage;
