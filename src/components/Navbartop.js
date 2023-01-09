import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo192 from "../images/logo192.png";
import CartWidget from "./CartWidget";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbartop() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src={logo192}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Baby Nudles logo"
              />
            </Navbar.Brand>
          </NavLink>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbartop;
