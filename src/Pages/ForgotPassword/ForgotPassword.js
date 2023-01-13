import React, { useState } from "react";
import SubHeader from "../../components/subHead/SubHeader";
import Images from "../../components/Images/Images";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState({});
  Title(" | Forgot Password ");

  const handleChange = (e) => {
    if (
      (values?.[e.target.name]?.length === undefined ||
        values?.[e.target.name]?.length === 0) &&
      e.target.value == " "
    ) {
      setValues({ ...values, [e.target.name]: "" });
      setErrors({
        ...errors,
        [e.target.name]: `Field is required`,
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let errorExist = false;
    let errorsObject = {};
    if (
      values?.email === "" ||
      values?.email === null ||
      values?.email === undefined
    ) {
      errorsObject.email = "Please enter username or email";
      errorExist = true;
    } else if (!values?.email.trim()) {
      errorsObject.email = "Email is required";
      errorExist = true;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values?.email)
    ) {
      errorsObject.email = "Please type a valid email address";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
  };
  return (
    <>
      <SubHeader />
      <div className="sign_body">
        <div className="cardBody">
          <div className="card_padd">
            {/* <div className="login_Head"> Forgot Password </div> */}
            <div className="forgot_para">
              Forgot your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </div>
            <div className="field_label"> Username or Email </div>
            <div className="loginInp">
              <span className="login_inpSvg">
                <img src={Images?.gmail} alt="" className="google_logo" />
              </span>
              <input
                type="text"
                placeholder="Enter username or email"
                name="email"
                value={values?.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="login_error"> {errors?.email} </div>
            <div className="reset_button">
              <button className="login_btn" onClick={onSubmit}>
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
