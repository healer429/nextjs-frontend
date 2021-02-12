import React from "react";
import {Col, Spinner} from "react-bootstrap";
import { connect } from "react-redux";
import ty from "../img/thank-you.png";
import "../css/thank-you.css";
import _withFormWrapper from "./FormWrapper";
import StepProgress from "./StepProgress";

class ThankYou extends React.Component {
  render() {
    if (!this.props.order) return <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}><Spinner animation="border"/></div>;
    return (
      <div className="thank-you">
        <StepProgress step={2} />
        <img alt="thank you" src={ty} style={{marginTop:"50px"}} />
        <Col sm={12}>
          <h2>Thank you</h2>
          <h3>For Your Order</h3>
          <div style={{border:"1px solid #9a9a9a", padding:"10px"}}>
          <p>We have received your Order for a New Tax ID / Employer Identification Number.</p>
            <p>What can you expect?</p>
          <ol>
            <li>Our Expert Advisors will review your submission and check for errors/inconsistencies.</li>
            <li>If there are any issues with your submission, we will contact you.</li>
            <li>Your application will be filed and EIN confirmation will be generated.</li>
            <li>Documentation for your EIN will be e-mailed to you.</li>
          </ol>
            <p>If you selected same day service, your EIN will be e-mailed to you within the business day. If you selected standard processing, it will be sent to you within 2-3 business days. If you need to rush your order, please contact us at <a href="mailto:Support@USA-TaxID.com?subject=Mail from Thank you USA Taxid Site">Support@USA-TaxID.com</a></p>
            <p>Once you have received your EIN via E-mail, you may begin using it immediately.</p>
            <p><b>IMPORTANT:</b> Please be sure to check your spam folder for the EIN delivery email.</p>
            <p>Questions? Please e-mail us at: <a href="mailto:Support@USA-TaxID.com?subject=Mail from Thank you USA Taxid Site">Support@USA-TaxID.com</a> and reference your Order Number below.</p>
            <p><b>Your Order ID: {this.props.order.order.crmOrderId}</b></p>
          </div>
          {/*<p>You order for a {this.props.order.product.code.customerName} {this.props.order.order.processingOption} has been received</p>*/}
          {/*<p>Your transaction ID: {this.props.order.order.crmOrderId}</p>*/}
          {/*<p>First Name: {this.props.order.order.paymentDetails.firstName}</p>*/}
          {/*<p>Last Name: {this.props.order.order.paymentDetails.lastName}</p>*/}
          {/*<p>Phone number: {this.props.order.customer.phone}</p>*/}
          {/*<p>Email address: {this.props.order.customer.email}</p>*/}
        </Col>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.order.loading,
    order: state.order.order,
  };
};
export default _withFormWrapper(connect(mapStateToProps)(ThankYou));
