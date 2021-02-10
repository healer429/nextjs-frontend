import React from "react";

import whitecheck from "../img/white-check.png";

function ApplicationProcess() {
  return (
    <React.Fragment>
      <div className="content mb-4 application-process">
        <p>
          The process of applying for an EIN can be confusing and strenuous for
          small business owners and entrepreneurs. Whether you’re a business
          owner, entrepreneur, executor, administrator, or representative of an
          estate, we’ll work with the IRS on your behalf as your third party
          designee.
        </p>
        <p>
          Our team of accountants, tax professionals, and small business experts
          are standing by to process your application. We’ll review all the
          information you provide and advise on anything you may need to add or
          revise in order to get your application accepted. Once your
          application has been thoroughly reviewed by our team, we’ll submit it
          electronically to obtain your EIN. If any additional documents are
          needed, our team will work with the IRS directly to save you time.
        </p>
        <p>
          At any point during the process, you can contact our experts to help.
          Once your application is submitted, you’ll receive an email
          confirmation, as well as an expected delivery date. Once your
          application has been approved, you’ll receive your EIN electronically.
          Most EIN applications are approved. If, for any reason, your
          application is rejected, we will contact you directly for next steps.
        </p>
        <div className="steps-wrapper">
          <div className="step">
            <div>
              <span>
                <img src={whitecheck} alt="" />
              </span>
            </div>
            <h6>Quick, Accurate Filing</h6>
            <p>
              We’ll handle all of the regulations and red tape to ensure the
              whole process is as painless as possible and give you peace of
              mind. We’ll ensure your EIN application is received in a timely
              manner and is completed accurately.
            </p>
          </div>
          <div className="step">
            <div>
              <span>
                <img src={whitecheck} alt="" />
              </span>
            </div>
            <h6>Attentive Service</h6>
            <p>
              Our team of experts has years of experience dealing with Tax ID
              applications and working with the IRS. We’ll inform you of
              anything missing from your application, and how to find it. We’ll
              correct any errors so you don’t have to worry.
            </p>
          </div>
          <div className="step">
            <div>
              <span>
                <img src={whitecheck} alt="" />
              </span>
            </div>
            <h6>Security</h6>
            <p>
              Rest assured that your private information is secure. We guarantee
              your personal information is safe, and secure.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ApplicationProcess;
