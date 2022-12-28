import React, { useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./header.scss";
import "../../assets/css/style.css";

const Header = () => {
  const [value, setValue] = useState({ currency: "usd" });
  const currencyList = [
    {
      value: "USD",
    },
    {
      value: "INR",
    },
    {
      value: "DHR",
    },
    {
      value: "KD",
    },
  ];
  const langaugeList = [
    { name: "English" },
    { name: "Hindi" },
    { name: "Arabic" },
    { name: "French" },
  ];
  return (
    <>
      <div className="navbar_ui col-lg-12 col-md-12">
        <div className="container">
          <div className="navbar_align">
            <Link to="/" className="navigation_link">
              <div> DOWNLOAD ENCHE APPS </div>
            </Link>
            <div className="nav_right">
              <select
                value={value?.currency}
                name="currency"
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                className="curreny_option navigation_link"
              >
                {currencyList?.map((item, key) => (
                  <option
                    value={item?.value}
                    key={key}
                    className="curencyOption"
                  >
                    {item.value}
                  </option>
                ))}
              </select>
              <select
                className="curreny_option navigation_link"
                name="level"
                // value={data.level}
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
              >
                <option defaultValue="English" hidden>
                  English
                </option>
                {langaugeList.map((item, key) => (
                  <option value={item.name} className="curencyOption" key={key}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                className="curreny_option navigation_link"
                name="level"
                // value={data.level}
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
              >
                <option defaultValue="Join As" hidden>
                  Join As
                </option>
                <option value="abc" className="curencyOption">
                  Buyer
                </option>
                <option value="abc" className="curencyOption">
                  Seller
                </option>
              </select>
              <Link to="/signup" className="navigation_link nav_signIn">
                <span>Sign Up</span>
              </Link>
              {/* <div className="sign_divider"> | </div> */}
              <Link to="/signin" className="navigation_link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <>
        {/* <Navbar className="navbar_ui" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                DOWNLOAD ENCHE APPS
              </Link>
            </Nav>
            <Nav>
              <select
                value={value?.currency}
                name="currency"
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                className="curreny_option nav-link"
              >
                {currencyList?.map((item, key) => (
                  <option
                    value={item?.value}
                    key={key}
                    className="curencyOption"
                  >
                    {item.value}
                  </option>
                ))}
              </select>
              <NavDropdown
                title="English"
                id="basic-nav-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item href="#action/3.4">Arabic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Hindi</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Join As"
                id="basic-nav-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      </>
    </>
  );
};

export default Header;
