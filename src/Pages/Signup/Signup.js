import React, { useState } from "react";
import Images from "../../components/Images/Images";
import { Link } from "react-router-dom";
import SubHeader from "../../components/subHead/SubHeader";
import Title from "../../components/Title/Title";

const Signup = () => {
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState({});
  Title(" | Signup");
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
      values?.username === "" ||
      values?.username === null ||
      values?.username === undefined
    ) {
      errorsObject.username = "Please enter name";
      errorExist = true;
    } else if (!values?.email.trim()) {
      errorsObject.username = "Name is required";
      errorExist = true;
    }
    if (
      values?.email === "" ||
      values?.email === null ||
      values?.email === undefined
    ) {
      errorsObject.email = "Please enter email";
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
    if (
      values?.password === "" ||
      values?.password === null ||
      values?.password === undefined
    ) {
      errorsObject.password = "Please enter password";
      errorExist = true;
    } else if (values?.password.length < 6) {
      errorsObject.password = "Password must be longer then 6 character";
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
            <div className="login_Head"> Register </div>
            <div className="login_subHead">
              Enter your name, email & password to Register
            </div>
            <div className="loginWithGoogle">
              <img src={Images?.google} alt="" className="google_logo" />
              <span> Log in with Google </span>
            </div>
            <div class="sign_in_or">or</div>
            <div className="loginWithFacebook">
              <img src={Images?.face} alt="" className="google_logo" />
              <span> Log in with Facebook </span>
            </div>
            <div className="loginInp">
              <span className="login_inpSvg"></span>
              <input
                type="text"
                placeholder="Enter name"
                name="username"
                value={values?.username}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="login_error"> {errors?.username} </div>
            <div className="loginInp">
              <span className="login_inpSvg">
                <img src={Images?.gmail} alt="" className="google_logo" />
              </span>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={values?.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="login_error"> {errors?.email} </div>
            <div className="loginInp">
              <span className="login_inpSvg">
                <img src={Images?.lock} alt="" className="google_logo" />
              </span>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={values?.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="login_error"> {errors?.password} </div>
            <div className="remberDev">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="remberMe">
                I agree with
                <Link to="/terms"> Terms </Link>
                and
                <Link> Privacy </Link>
              </label>
            </div>
            <div className="log_btn_div">
              <button className="login_btn" onClick={onSubmit}>
                {" "}
                Sign up{" "}
              </button>
            </div>
            <div className="notYet_div">
              <div className="not_yet_text"> Have account? </div>
              <Link to="/signin">
                <div className="sig"> Sign In </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
