import React from "react";

import formabusiness from "../public/img/form-a-business.png";
import createatrust from "../public/img/create-a-trust.png";
import addnewemployees from "../public/img/add-new-employees.png";

function HowItWorks() {
  return (
    <div>
      <div className="content mb-4">
        <div className="left-pan">
          <h6>
            Here’s
            <br />
            How It Works:
          </h6>
          <ul>
            <li>
              <div>
                <span>1</span>
              </div>
              <p>Complete and submit your EIN Application</p>
            </li>
            <li>
              <div>
                <span>2</span>
              </div>
              <p>IRS Compliance Review</p>
            </li>
            <li>
              <div>
                <span>3</span>
              </div>
              <p>Receive your EIN paperwork in your email inbox as a PDF</p>
            </li>
          </ul>
        </div>
        <div className="right-pan">
          <div>
            <div className="icon-wrapper">
              <img src={formabusiness} alt="Form a Business" />
            </div>
            <h6>Form a Business</h6>
          </div>
          <div>
            <div className="icon-wrapper">
              <img src={createatrust} alt="Form a Business" />
            </div>
            <h6>Create a Trust</h6>
          </div>
          <div>
            <div className="icon-wrapper">
              <img src={addnewemployees} alt="Form a Business" />
            </div>
            <h6>Add New Employees</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
