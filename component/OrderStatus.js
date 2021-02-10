import React, { Component } from "react";
import {Button, Container, Form, Spinner} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import * as actionCreater from "../store/actions/orderActions";
import {connect} from "react-redux";
import OrderStatusResult from "./OrderStatusResult";

class OrderStatus extends Component {
  state = {
    orderNumber: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      const section = document.querySelector(".form-control:invalid");
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      e.preventDefault();
      this.props.orderCheck(this.state.orderNumber, this.props.history);
    }
    this.setState({ validated: true });
  };


componentDidMount() {
  this.props.clearError();
  this.setState({
    orderNumber: null
  });
}

  render() {
    if (this.props.loading) return <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}><Spinner animation="border"/></div>;
    if (this.props.order) return OrderStatusResult(this.props, this.state)
    return (
      <div className="home ">
        <div className="content">
          <h3>Enter order number used in your application</h3>
          <hr />
          <Container fluid className="Form contact">
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
            >
              <Form.Group controlId="header">
                <Form.Label className="mb-5">
                  Please enter your order number to check the status of your application or receive your EIN/Tax ID Number.
                </Form.Label>
              </Form.Group>
              <Form.Group controlId="orderNumber">
                <Form.Label>Order number *</Form.Label>
                <Form.Control type="text" required placeholder="Order Number" onChange={this.handleChange} defaultValue={this.state.orderNumber}/>
                <Form.Control.Feedback type="invalid">
                  Please enter order number
                </Form.Control.Feedback>
              </Form.Group>
              <div className="invalid-feedback d-block mt-0 mb-2">
                {this.props.error ? this.props.error.message : null}
              </div>
              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    orderCheck: (orderId, history) => {
      dispatch(actionCreater.checkOrder(orderId, history));
    },
    clearError: () => {
      dispatch(actionCreater.clearOrder());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    error: state.order.error,
    loading: state.order.loading,
    order: state.order.order,
  };
};
export default
    connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderStatus)
);
