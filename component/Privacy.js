import React from "react";
import "../css/terms.css";
import {Link} from "react-router-dom";

function Privacy() {
    return (
        <div className="home about pricing">
            <div className="content">
                <h3 className="mt-4">Privacy Policy</h3>
                <hr/>
                <p><b>PLEASE READ THE PRIVACY POLICY CAREFULLY BEFORE USING THIS WEBSITE. BY USING THIS WEBSITE YOU INDICATE THAT YOU UNDERSTAND THE TERMS OF THE PRIVACY POLICY.</b></p>
                <p>EIN Simplified, hereinafter referred to as ("Provider"), understands that your personal information is sensitive information. Furthermore, Provider has implemented security measures to ensure that by using this website, including all of its features and content, hereinafter referred to as ("Website"), along with creating this Privacy Policy, your personal and financial information will be held in a secure manner. The Privacy Policy covers Provider's treatment of the personal information we obtain from the use of this Website. Moreover, the Privacy Policy describes the options available to you pertaining to Provider's use of your personal information, to include how you can update this information. This Privacy Policy is incorporated into Provider's Terms & Conditions, which governs your use of this Website. By using this Website, you accept the terms of this Privacy Policy. If you have questions or concerns about the Privacy Policy, please contact Customer Support at  or by email via our <Link to="/contactus">contact form</Link>.</p>
                <ol className="terms">
                    <li className="terms">Collection of Information.
                        <p>Provider collects necessary personal information to complete the services you are seeking. In general, the information collected will include your name, mailing address, email address, phone number, and payment information, along with other information, which depends solely on the service requested. However, you may visit this Website without providing any information. Moreover, Provider does not knowingly request or collect any information from persons under 13 years of age, which is in compliance with the requirements of the Childrens Online Privacy Protection Act.</p>
                    </li>
                    <li className="terms">Use of Information.
                        <p>The information collected will be used to improve this Website's offerings based on the information and feedback we receive from you. Furthermore, your information, whether public or private, will not be sold, exchanged, transferred, or given to any third party for any reason whatsoever, without your consent, other than for the express purpose of delivering the service requested. Provider will email you pertinent information and updates regarding your order, or other services that may be of some interest to you.</p>
                    </li>
                    <li>Protection of Information.
                        <p>Provider has implemented a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. Furthermore, Provider offers the use of a secure server. All payment information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into Provider's payment gateway, Provider's database, only to be accessible by those authorized with strict and limited access rights to such systems. Provider's procedural safeguards are in compliance with applicable laws and regulations to protect your personal information from unauthorized or inappropriate access. After a transaction is complete, your private financial information will not be stored on our servers.</p>
                    </li>
                    <li>Cookies.
                        <p>Provider does not use cookies.</p>
                    </li>
                    <li>Unsubscribe.
                        <p>You may unsubscribe from future communications. Please send your request via our <Link to="/contactus">contact form</Link>.</p>
                    </li>
                    <li>Web Links to Third-Party Websites.
                        <p>Provider may have web links to third-party websites, which may request your personal information or use cookies. Provider is not responsible for the security or privacy practices utilized by third parties, though we strive to provide access to third parties that share similar practices.</p>
                    </li>
                    <li>Modifications to the Privacy Policy.
                        <p>Provider reserves the right to modify the Privacy Policy without notice. Please review the Privacy Policy periodically to be informed of any changes.</p>
                    </li>
                    <li>Questions or Concerns.
                        <p>If you have questions or concerns about the Privacy Policy, please contact Customer Support at  or by email via our <Link to="/contactus">contact form</Link>.</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Privacy;
