import React, { useState } from "react";
import firebaseAuthService from "../FirebaseAuthService";

const LoginForm = ({ existingUser }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebaseAuthService.loginUser(userName, userPassword);
      setUserName("");
      setUserPassWord("");
    } catch (error) {
      alert(error.message);
    }
  };
  const registerUser = async () => {
    try {
      firebaseAuthService.registerUser(userName, userPassword);
    } catch (error) {}
  };
  const loginWithGoogle = async () => {
    try {
      await firebaseAuthService.loginwithGoogle();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  const handleResetPasswordEmail = async () => {
    if (!userName) {
      alert("Missing UserName");
      return;
    }
    try {
      await firebaseAuthService.sendPasswordResetEmail(userName);
      alert("Send The Password Reset Email");
    } catch (error) {
      alert(error.message);
    }
  };
  const HandleLogout = () => {
    firebaseAuthService.LogoutUser();
  };
  return (
    <div className="login-form-container">
      {existingUser ? (
        <div className="row">
          <h3>Welcome, {existingUser.email}</h3>
          <button
            type="button"
            className="primary-button"
            onClick={HandleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="login-form">
          <label className="input-label login-label">
            User (Email):
            <input
              className="input-text"
              type="email"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </label>

          <label className="input-label login-label">
            Password:
            <input
              className="input-text"
              type="password"
              required
              value={userPassword}
              onChange={(e) => {
                setUserPassWord(e.target.value);
              }}
            />
          </label>
          <div className="button-box">
            <button className="primary-button" onClick={handleSubmit}>
              Login
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={handleResetPasswordEmail}
            >
              Reset Password
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={loginWithGoogle}
            >
              Login with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
