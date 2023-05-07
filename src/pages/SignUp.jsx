import "./SignUp.css";
import singUpLeftLogo from "../assets/icon/SingInLogo.png";
import singUpRightImg from "../assets/img/signInRightImg.png";
import { useState } from "react";
import credentialsHandler from "../helpers/credentialHandler";
import { signUp } from "../services/authNetwork";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({});

  const navigate = useNavigate();

  const register = async () => {
    const token = await signUp(credentials);
    setToken(token);
    navigate("/confirm");
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
          <input
            onChange={credentialsHandler(setCredentials)}
            type="text"
            name="finCode"
            placeholder="Fin kod"
          />
          <input
            onChange={credentialsHandler(setCredentials)}
            type="number"
            name="serialNumber"
            placeholder="Seria Nömrəsi"
          />
          <input
            onChange={credentialsHandler(setCredentials)}
            type="number"
            name="phoneNumber"
            placeholder="Mobil Nömrə"
            id=""
          />
          <input
            onChange={credentialsHandler(setCredentials)}
            type="password"
            name="password"
            placeholder="Şifrə"
            id=""
          />
          <button onClick={register} className="sigInBtn">
            Davam et
          </button>
        </div>
        <div className="singUpRightImgBox">
          <img className="singUpRightImg" src={singUpRightImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
