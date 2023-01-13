import React, { useState } from "react";
import "./signup.scss";
import Images from "../../components/Images/Images";
import { Link } from "react-router-dom";
import SubHeader from "../../components/subHead/SubHeader";
import Title from "../../components/Title/Title";

const Signup = () => {
  const [values, setValues] = useState({ agree_terms: 0 });
  const [errors, setErrors] = useState({});
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  Title(" | Signup");
  const handleChange = (e) => {
    if (e.target.name === "agree_terms") {
      setErrors({ ...errors, [e.target.name]: false });
      e.target.checked
        ? setValues({ ...values, [e.target.name]: 1 })
        : setValues({ ...values, [e.target.name]: 0 });
    } else if (
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
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
        values?.password
      )
    ) {
      errorsObject.password =
        "Password must be at least 8 characters with Alphanumeric and Special Character  ";
      errorExist = true;
    }
    if (
      values?.confirmPassword === "" ||
      values?.confirmPassword === null ||
      values?.confirmPassword === undefined
    ) {
      errorsObject.confirmPassword = "Please enter confirm password";
      errorExist = true;
    } else if (values?.password !== values?.confirmPassword) {
      errorsObject.confirmPassword =
        "The confirm password is not matching with password";
      errorExist = true;
    }
    if (values?.agree_terms == 0) {
      errorsObject.agree_terms = "Please Agree Terms and Privacy";
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
            <div className="sign_in_or">or</div>
            <div className="loginWithFacebook">
              <img src={Images?.face} alt="" className="google_logo" />
              <span> Log in with Facebook </span>
            </div>
            <div className="loginInp">
              <span className="login_inpSvg">
                <img src={Images.user} alt="" className="google_logo" />
              </span>
              <input
                type="text"
                placeholder="Type your name"
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
                placeholder="Enter your email"
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
                // type="text"
                placeholder="Password"
                name="password"
                value={values?.password}
                onChange={(e) => handleChange(e)}
                type={hidePass ? "password" : "text"}
              />
              {hidePass ? (
                <>
                  <div
                    className="show_password"
                    onClick={() => setHidePass(!hidePass)}
                  >
                    <img src={Images.eyeClose} alt="" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="show_password"
                    onClick={() => setHidePass(!hidePass)}
                  >
                    <img src={Images.eyeOpen} alt="" />
                  </div>
                </>
              )}
            </div>
            <div className="login_error"> {errors?.password} </div>
            <div className="loginInp">
              <span className="login_inpSvg">
                <img src={Images?.lock} alt="" className="google_logo" />
              </span>
              <input
                type={hideConfirmPass ? "password" : "text"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values?.confirmPassword}
                onChange={(e) => handleChange(e)}
              />
              {hideConfirmPass ? (
                <>
                  <div
                    className="show_password"
                    onClick={() => setHideConfirmPass(!hideConfirmPass)}
                  >
                    <img src={Images.eyeClose} alt="" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="show_password"
                    onClick={() => setHideConfirmPass(!hideConfirmPass)}
                  >
                    <img src={Images.eyeOpen} alt="" />
                  </div>
                </>
              )}
            </div>
            <div className="login_error"> {errors?.confirmPassword} </div>
            <div className="checkTerms">
              <input
                type="checkbox"
                name="agree_terms"
                value={values?.agree_terms}
                onChange={(e) => handleChange(e)}
                id="rememberMe"
              />
              <label htmlFor="rememberMe" className="remberMe">
                I agree with
                <Link to="/terms"> Terms </Link>
                and
                <Link> Privacy </Link>
              </label>
            </div>
            <div className="login_error mb-2">{errors?.agree_terms}</div>
            <div className="log_btn_div">
              <button className="login_btn" onClick={onSubmit}>
                Sign up
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
