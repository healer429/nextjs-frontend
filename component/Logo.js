import React from "react";
import Link from "next/link";
import logo from "../public/img/usa-taxid-logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img alt="Logo" src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
