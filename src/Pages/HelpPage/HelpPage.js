import React from "react";
import Images from "../../components/Images/Images";
import "./HelpPage.scss";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

const HelpPage = () => {
  return (
    <div>
      <div>
        <Navbar className="navbar-pro">
          <img src={Images?.logo} alt="" className="logo-image" />
          <Navbar.Brand href="#home"></Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <img src={Images?.user} alt="" className="user-image" />
            <Navbar.Text style={{ marginRight: "11px" }}>Anisah </Navbar.Text>
            <img src={Images?.profile} alt="" className="profile-img" />
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="how-title">
        <h1 className="hi-titl">Hi,How can we help ?</h1>
        <div>
          <div>
            <Form className="d-flex" style={{ position: "relative" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
          <div>
            <svg
              className="search-svg "
              style={{ position: "absolute" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="cate-div">
        <h1 className="cate-name">Categories</h1>
        <div className="card-1">
          <div className="card-shp">
            <div>
              <img src={Images?.shop} alt="" className="card-shop-img" />
            </div>
            <div> Shop with Enche </div>
          </div>
          <div className="card-shp">
            <div>
              <img src={Images?.Payments} alt="" className="card-pay-img" />
            </div>
            <div> payments </div>
          </div>
          <div className="card-shp">
            <div>
              <img src={Images?.Returns} alt="" className="card-ret-img" />
            </div>
            <div> Returns & Refunds </div>
          </div>
          <div className="card-shp">
            <div>
              <img src={Images?.General} alt="" className="card-gern-img" />
            </div>
            <div> General </div>
          </div>
        </div>
        <div className="card-2">
          <div className="card-shp">
            <div>
              <img src={Images?.Deals} alt="" className="card-deals-img" />
            </div>
            <div> Deals & Rewards</div>
          </div>
          <div className="card-shp">
            <div>
              <img src={Images?.General} alt="" className="card-orders-img" />
            </div>
            <div> Orders & shipping </div>
          </div>
          <div className="card-shp">
            <div>
              <img src={Images?.Sellers} alt="" className="card-sellers-img" />
            </div>
            <div> Sellers & Partners</div>
          </div>
          <div className="card-shp">
            <div>
              <img src={Images?.Food} alt="" className="card-food-img" />
            </div>
            <div> Food </div>
          </div>
        </div>
      </div>
      <div className="hot-quest">
        <h1 className="hot-qst-h1">Hot Questions</h1>
        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [My Account] Why did i not receive my verification code/one-time
          password(OTP) via SMS
        </h5>
        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [Order Cancellation] How will i get my refund for cancelled orders?
        </h5>
        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [Order Tracking]How do i check the status of my order?
        </h5>
        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [My Account] Why did i not receive my verification code/one-Time
          password (OPT) via SMS?
        </h5>
        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [Free Shipping] Why can't i get free shipping?
        </h5>

        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [Order Tracking] How do i check the status of my orders?
        </h5>
        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [Return Refund] when and how can i apply for a return & refund?
        </h5>
        <hr className="hr-tag" />
        <h5 className="h5-tag">
          [My Account] why did i not receive my verification code/one-Time
          password(OTP) via SMS
        </h5>
      </div>
    </div>
  );
};

export default HelpPage;
