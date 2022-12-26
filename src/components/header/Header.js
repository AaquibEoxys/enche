import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const Header = () => {
  const [value, setValue] = useState({ currency: "usd" });
  const currencyList = [
    {
      value: "usd",
    },
    {
      value: "inr",
    },
    {
      value: "dhr",
    },
    {
      value: "kd",
    },
  ];
  return (
    <>
      <Navbar className="navbar_ui" expand="lg">
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
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Link to="/signin" className="nav-link">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
