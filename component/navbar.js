import React, { Component } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Navbarr extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" variant="dark">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                href="/"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/status"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Order status
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/pricing"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contactus"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbarr;
