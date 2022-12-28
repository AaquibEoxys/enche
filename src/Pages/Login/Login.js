import React from "react";
import SubHeader from "../subHead/SubHeader";
import Images from "../../components/Images/Images";
import { Link } from "react-router-dom";

const Login = () => {
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
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="loginInp">
              <span className="login_inpSvg">
                <img src={Images?.lock} alt="" className="google_logo" />
              </span>
              <input type="text" placeholder="Password" />
            </div>
            <div className="remberDev">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="remberMe">
                Remember Me
              </label>
            </div>
            <div className="log_btn_div">
              <button className="login_btn"> Log in </button>
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
