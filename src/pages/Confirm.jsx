import React from "react";
import "./Confirm.css";
import confirmImg from "../assets/img/singUp.png";
import singUpLeftLogo from "../assets/icon/SingInLogo.png";

const Confirm = () => {
  return (
    <div className="confirm">
      <div className="confirm-container">
        <div className="confirmLeft">
          <img className="confirmLeftLogo" src={singUpLeftLogo} alt="#" />
          <h1 className="confirmLeftTitle">Doğrulama</h1>
          <p className="confirmLeftSubTitle">
            Pleace type theverification code sent to
          </p>
          <p className="confirmLeftNumber">+994 55 456 78 90</p>
          <input type="text" name="fincode" placeholder="OTP kodu daxil edin" />
          <button className="confirmBtn">Davam et</button>
        </div>
        <div className="confirmRightImgBox">
          <img className="confirmRightImg" src={confirmImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
