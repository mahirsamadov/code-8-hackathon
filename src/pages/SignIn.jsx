import React, { useState } from "react";
import "./SignIn.css";
import credentialsHandler from "../helpers/credentialHandler";
import singInLeftLogo from "../assets/icon/SingInLogo.png";
import singInRightImg from "../assets/img/signInRightImg.png";

import { signIn } from "../services/authNetwork";

const SignIn = () => {
  const [credentials, setCredentials] = useState({});

  const login = () => {
    signIn(credentials);
  };

  return (
    <div className="signIn">
      <div className="signIn-container">
        <div className="signInLeft">
          <img className="signInLeftLogo" src={singInLeftLogo} alt="#" />
          <h1 className="signInLeftTitle">Daxil ol</h1>
          <input
            onChange={credentialsHandler(setCredentials)}
            type="tel"
            name="phoneNumber"
            id=""
            placeholder="E-mail"
          />
          <input
            onChange={credentialsHandler(setCredentials)}
            type="password"
            name="password"
            id=""
            placeholder="Şifrə"
          />
          <button className="confirmBtn" onClick={login}>
            Daxil Ol
          </button>
        </div>
        <div className="signInRightImgBox">
          <img className="singUpRightImg" src={singInRightImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
