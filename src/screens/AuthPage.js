import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import ResetPasswordPage from "./ResetPasswordPage";

const firebaseConfig = {
  apiKey: "AIzaSyC3HryTiR_-RnfnauBCdaW3brvb_IdOztg",
  authDomain: "willeder-cecfe.firebaseapp.com",
  projectId: "willeder-cecfe",
  storageBucket: "willeder-cecfe.appspot.com",
  messagingSenderId: "870395084946",
  appId: "1:870395084946:web:fa274717f6370182e7a64b",
  measurementId: "G-MTHYJZ1VJD",
};

firebase.initializeApp(firebaseConfig);

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setResetEmailSent(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Router>
      <div>
        <h1>MY AIRLINE</h1>
        <Routes>
          <Route
            path="/signup"
            element={
              <SignUpPage
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSignUp={handleSignUp}
                loggedIn={loggedIn}
                error={error}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <SignInPage
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSignIn={handleSignIn}
                loggedIn={loggedIn}
                error={error}
              />
            }
          />
          <Route
            path="/reset-password"
            element={
              <ResetPasswordPage
                email={email}
                setEmail={setEmail}
                handleResetPassword={handleResetPassword}
                resetEmailSent={resetEmailSent}
                error={error}
              />
            }
          />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AuthPage;
