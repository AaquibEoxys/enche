import React from "react";
import Images from "../../components/Images/Images";
import { Link } from "react-router-dom";
import SubHeader from "../subHead/SubHeader";

const Signup = () => {
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
              <input type="text" placeholder="Enter name" />
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
                I agree with
                <Link> Terms </Link>
                and
                <Link> Privacy </Link>
              </label>
            </div>
            <div className="log_btn_div">
              <button className="login_btn"> Log in </button>
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
