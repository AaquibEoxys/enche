import React, { useState } from "react";
import SubHeader from "../../components/subHead/SubHeader";
import Images from "../../components/Images/Images";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./login.scss";

const Login = () => {
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState({});
  Title(" | My Account ");

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

    // Validations("email", values?.email, setErrors, errors, "email")
    //   Validations("password", values?.password, setErrors, errors, "password")
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
  console.log(" email", errors);

  return (
    <>
      <SubHeader />
      <div className="sign_body">
        <div className="cardBody">
          <div className="card_padd">
            <div className="login_Head"> Log in </div>
            <div className="login_subHead">
              Enter your username & password to login
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
              <span className="login_inpSvg">
                <img src={Images?.gmail} alt="" className="google_logo" />
              </span>
              <input
                type="text"
                placeholder="Enter username"
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
                type="password"
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
                Remember Me
              </label>
            </div>
            <div>
              <button className="login_btn" onClick={onSubmit}>
                {" "}
                Log in{" "}
              </button>
            </div>
            <div className="notYet_div">
              <div className="not_yet_text"> Not member yet? </div>
              <Link to="/signup">
                <div className="sig"> Create an account </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
