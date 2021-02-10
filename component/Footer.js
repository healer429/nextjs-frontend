import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="copyright">
          <p>© 2020 USA TAXID</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="text">
          <h5>DISCLAIMER:</h5>
          <p>
            USA Tax ID is a Third Party firm that assists its customers with
            document preparation and filing services. It does not provide legal,
            financial, or professional advice. This website is not affiliated
            with the Internal Revenue Service or any governmental organization.
            You are able to obtain an EIN number yourself by working directly
            with the IRS, but they will not be able to assist you with the
            process or provide e-mail support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
