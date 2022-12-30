import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Images from "../Images/Images";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <Row className="footer_padd">
            <div className="col-lg-12 col-xl-8 col-md-12 row">
              <Col xl={3} md={3}>
                <div className="footer_head">
                  <h3>About enche</h3>
                </div>
                <div>
                  <ul className="footer_ul">
                    <li>
                      <Link to="/">About enche</Link>
                    </li>
                    <li>
                      <Link to="/">About enchepreneur</Link>
                    </li>
                    <li>
                      <Link to="/">About encheffiliate</Link>
                    </li>
                    <li>
                      <Link to="/">Partners With Us</Link>
                    </li>
                    <li>
                      <Link to="/">Read Our Kudos</Link>
                    </li>
                    <li>
                      <Link to="/">CSR Gallery</Link>
                    </li>
                    <li>
                      <Link to="/">Career@enche</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3} md={3}>
                <div className="footer_head">
                  <h3>Term & Conditions</h3>
                </div>
                <div>
                  <ul className="footer_ul">
                    <li>
                      <Link to="/">enche CSR Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Term of Use Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms & Conditions for Merchant</Link>
                    </li>
                    <li>
                      <Link to="/">Intellectual Property Protection</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3} md={3}>
                <div className="footer_head">
                  <h3>Support</h3>
                </div>
                <div>
                  <ul className="footer_ul">
                    <li>
                      <Link to="/help-support">Help Support</Link>
                    </li>
                    <li>
                      <Link to="/">How to Buy</Link>
                    </li>
                    <li>
                      <Link to="/">Shipping & Delivery</Link>
                    </li>
                    <li>
                      <Link to="/">Refund Policy</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ from Merchant</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ from Buyer</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3} md={3}>
                <div className="footer_head">
                  <h3>Connect with Us</h3>
                </div>
                <div>
                  <ul className="footer_ul">
                    <li>
                      <Link to="/">Hotline : +603-76616263</Link>
                    </li>
                    <li>
                      <Link to="/">Email : inquiry@enche.com</Link>
                    </li>
                    <div className="footer_head">
                      <h3>Follow Us</h3>
                    </div>
                    <div className="footer_social">
                      <img src={Images.fb} alt="" />
                      <img src={Images.insta} alt="" />
                      <img src={Images.twitter} alt="" />
                      <img src={Images.youtube} alt="" />
                    </div>
                    {/* <li><Link to="/">Community Standards</Link></li> */}
                  </ul>
                </div>
              </Col>
            </div>
            <div className="col-lg-12 col-xl-4 col-md-12 ">
              <div className="footer_head">
                <h3>Payment Method</h3>
                <div className="footer_payment">
                  <img src={Images.visa} alt="" />
                  <img src={Images.FPX} alt="" />
                  <img src={Images.maybank2u} alt="" />
                  <img src={Images.CIMB} alt="" />
                  <img src={Images.bankislam} alt="" />
                  <img src={Images.connect} alt="" />
                  <img src={Images.amonline} alt="" />
                  <img src={Images.webcash} alt="" />
                  <img src={Images.eleven} alt="" />
                  <img src={Images.esa} alt="" />
                  <img src={Images.RHB} alt="" />
                  <img src={Images.Bcard} alt="" />
                  <img src={Images.paypal} alt="" />
                  <img src={Images.pbank} alt="" />
                </div>
              </div>
            </div>
          </Row>
          <Row className="copy_right_row">
            <div className="copy_right_para">
              Copyright © 2022 enche. All Rights Reserved
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
