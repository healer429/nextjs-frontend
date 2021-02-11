import React from "react";
import { Container, Spinner } from "react-bootstrap";
import PaymentInputs from "../component/PaymentInputs";
import * as actionCreater from "../store/actions/orderActions";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import _withFormWrapper from "../component/FormWrapper";
import StepProgress from "../component/StepProgress";

class Payment extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    processingOption: "RUSH",
    billingAddress: "false",
    billingAddressCountry: "US",
    billingAddressState: "",
    billingAddressAddress1: null,
    billingAddressAddress2: null,
    billingAddressCity: null,
    billingAddressZip: null,
  };
  handleChange = (e) => {
    if (e.target.name === "processingOption")
      this.setState({
        [e.target.name]: e.target.value,
      });
    else
      this.setState({
        [e.target.id]: e.target.value,
      });
  };
  handleSubmit = (e) => {
    const paymentInfo = {
      ...this.state,
      orderId: this.props.order.id,
    };
    this.props.orderPayment(paymentInfo, this.props.router);
  };

  componentDidMount() {
    this.props.clearError();
  }

  render() {
    if (!this.props.order)
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      );
    if (this.props.loading)
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      );
    return (
      <Container fluid className="Form payment">
        <StepProgress step={1} />
        <h2>Submit Your EIN Application</h2>
        <PaymentInputs
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          error={this.props.error}
          state={this.state}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderPayment: (productInfo, history) => {
      dispatch(actionCreater.orderPayment(productInfo, history));
    },
    clearError: () => {
      dispatch(actionCreater.clearErrorMessage());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    error: state.order.error,
    loading: state.order.loading,
    order: state.products.order,
  };
};
export default _withFormWrapper(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))
);
