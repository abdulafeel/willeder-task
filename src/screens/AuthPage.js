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
  apiKey: "AIzaSyAQSNe_auAiSV-BovDPpDfEWckECG1TXAs",
  authDomain: "willeder-task-8bf63.firebaseapp.com",
  projectId: "willeder-task-8bf63",
  storageBucket: "willeder-task-8bf63.appspot.com",
  messagingSenderId: "575213679344",
  appId: "1:575213679344:web:897a9abdeb48aa801b4835",
  measurementId: "G-JM0EQ8WQS7",
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
