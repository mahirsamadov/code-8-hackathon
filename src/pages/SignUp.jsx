import "./SignUp.css";
import singUpLeftLogo from "../assets/icon/SingInLogo.png";
import singUpRightImg from "../assets/img/signInRightImg.png";
import { useState } from "react";
import credentialsHandler from "../helpers/credentialHandler";
import { signUp } from "../services/authNetwork";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState(null);
    const [error, setError] = useState(false)

    function checkObjectValuesNotEmpty(obj) {
        for (let key in obj) {
          if (obj.hasOwnProperty(key) && obj[key] === '') {
            return false;
          }
        }
        return true;
      }
      

      function isEmptyObject(obj) {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      }

  const navigate = useNavigate();

  const register = async () => {
   if(!checkObjectValuesNotEmpty(credentials) || credentials !== null || !isEmptyObject(credentials)){
    const token = await signUp(credentials);
    setToken(token);
    navigate("/confirm");
    setError(false)
   }
   else{
       setError("Zəhmət olmasa formu doldurun") 
   }
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
          <input required style={ !checkObjectValuesNotEmpty(credentials) || error ? { border: "1px solid red"} : null}
            onChange={credentialsHandler(setCredentials)}
            type="text"
            name="finCode"
            placeholder="Fin kod"
          />
          <input required style={ !checkObjectValuesNotEmpty(credentials) || error ? { border: "1px solid red"} : null}
            onChange={credentialsHandler(setCredentials)}
            type="number"
            name="serialNumber"
            placeholder="Seria Nömrəsi"
          />
          <input required style={!checkObjectValuesNotEmpty(credentials) || error ? { border: "1px solid red"} : null}
            onChange={credentialsHandler(setCredentials)}
            type="number"
            name="phoneNumber"
            placeholder="Mobil Nömrə"
            id=""
          />
          <input required style={ !checkObjectValuesNotEmpty(credentials) || error ? { border: "1px solid red"} : null}
            onChange={credentialsHandler(setCredentials)}
            type="password"
            name="password"
            placeholder="Şifrə"
            id=""
          />
          <button type="submit" onClick={register} className="sigInBtn">
            Davam et
          </button>
          <span style={{color: "red", marginTop: "1rem"}}> 
            {error}
          </span>
          <Link to="/signin">Sign in</Link>
        </div>
        <div className="singUpRightImgBox">
          <img className="singUpRightImg" src={singUpRightImg} alt="image" />
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
