import React, { Component } from "react";
import Logo from "./Logo";
import Link from 'next/link'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="navbar-brand">
          <Logo />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
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
        </div>
      </nav>
    );
  }
}

export default Navbar;
