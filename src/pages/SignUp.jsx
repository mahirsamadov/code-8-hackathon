import React, { useState } from "react";
import "./SignUp.css";
import singUpLeftLogo from "../assets/icon/SingInLogo.png";
import singUpRightImg from "../assets/img/signInRightImg.png";

const SignUp = () => {
  const [credentials, setCredentials] = useState({});

  const register = async () => {
    const token = await signUp(credentials);
    setToken(token);
  };

  console.log(credentials);

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <div className="singUpLeft">
          <img className="singUpLeftLogo" src={singUpLeftLogo} alt="#" />
          <h1 className="singUpLeftTitle">Qeydiyyat</h1>
          <p className="singUpLeftSubTitle">
            Qeydiyyat prosesinə xoş gelmisiniz!
          </p>
          <input type="text" name="fincode" placeholder="Fin kod" />
          <input
            type="number"
            name="serialNumber"
            placeholder="Seria Nömrəsi"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Mobil Nömrə"
            id=""
          />
          <input type="password" name="password" placeholder="Şifrə" id="" />
          <button className="sigInBtn">Davam et</button>
        </div>
        <div className="singUpRightImgBox">
          <img className="singUpRightImg" src={singUpRightImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
