import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <Row className="footer_border footer_padd">
            <div className="col-lg-9 d-flex">
              <Col lg={3}>
                <div className="footer-head"><h3>About enche</h3></div>
                <div>
                  <ul className="footer_ul">
                    <li><Link to="/">About enche</Link></li>
                    <li><Link to="/">About enchepreneur</Link></li>
                    <li><Link to="/">About encheffiliate</Link></li>
                    <li><Link to="/">Partners With Us</Link></li>
                    <li><Link to="/">Read Our Kudos</Link></li>
                    <li><Link to="/">CSR Gallery</Link></li>
                    <li><Link to="/">Career@enche</Link></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3}>
                <div className="footer-head"><h3>Term & Conditions</h3></div>
                <div>
                  <ul className="footer_ul">
                    <li><Link to="/">enche CSR Policy</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Term of Use Policy</Link></li>
                    <li><Link to="/">Terms & Conditions for Merchant</Link></li>
                    <li><Link to="/">Intellectual Property Protection</Link></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3}>
                <div className="footer-head"><h3>Support</h3></div>
                <div>
                  <ul className="footer_ul">
                    <li><Link to="/help-support">Help Support</Link></li>
                    <li><Link to="/">How to Buy</Link></li>
                    <li><Link to="/">Shipping & Delivery</Link></li>
                    <li><Link to="/">Refund Policy</Link></li>
                    <li><Link to="/">FAQ from Merchant</Link></li>
                    <li><Link to="/">FAQ from Buyer</Link></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3}>
                <div className="footer-head"><h3>Connect with Us</h3></div>
                <div>
                  <ul className="footer_ul">
                    <li><Link to="/">Hotline : +603-76616263</Link></li>
                    <li><Link to="/">Email : inquiry@enche.com</Link></li>
                    <div className="footer-head"><h3>Follow Us</h3></div>
                    {/* <li><Link to="/">Community Standards</Link></li> */}

                  </ul>
                </div>
              </Col>
            </div>
            <div className="col-lg-3">
              <div className="footer-head"><h3>Payment Method</h3></div>
            </div>
          </Row>
          <Row className="copy_right_row">
            <div className="copy_right_para">Copyright © 2022 enche. All Rights Reserved</div>
          </Row>
        </div>
      </div>
    </>);
};

export default Footer;
