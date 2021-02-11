import React from "react";
import Navbarr from "./Navbar";
import { withRouter } from "next/router";

const Header = (props) => {
  console.log(props.router.search)
  return (
    <div className="header-wrapper">
      <div className="header">
        <Navbarr />
      </div>
    </div>
  );
};

export default withRouter(Header);
