import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import InputMask from "react-input-mask";
import Names from "../component/Names";
import Fieldset from "../component/Fieldset";
import axios from "axios";
class ContactUs extends Component {
  state = {
    customerEmail: null,
    customerFirstName: null,
    customerLastName: null,
    customerMiddleName: null,
    customerPhone: null,
    validated: false,
    questionsOrder: "true",
    orderId: null,
    message: null,
    error: null,
    isSended: null,
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
      console.log(this.state);
      const contactus = {
        name:
          this.state.customerFirstName +
          " " +
          this.state.customerMiddleName +
          " " +
          this.state.customerLastName,
        email: this.state.customerEmail,
        message: this.state.message,
        orderId: this.state.orderId,
        phone: this.state.customerPhone,
      };
      axios
        .post(process.env.REACT_APP_API + "/contact-us", contactus, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.setState({ isSended: true });
        })
        .catch((error) => {
          this.setState({ error: true });
        });
    }
    this.setState({ validated: true });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="content">
          <h3>Contact Us</h3>
          <hr />
          <h2 style={{ textAlign: "center" }}>Error</h2>
        </div>
      );
    } else if (this.state.isSended) {
      return (
        <div className="home ">
          <div className="content">
            <h3>Contact Us</h3>
            <hr />
            <h2 style={{ textAlign: "center" }}>
              Thank you. Your request succesfully sended.
            </h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="home ">
          <div className="content">
            <h3>Contact Us</h3>
            <hr />
            <Container fluid className="Form contact">
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Group controlId="header">
                  <Form.Label className="mb-5">
                    Our support e-mail{" "}
                    <a href="mailto:Support@USA-TaxID.com?subject=Mail from Contact Us USA Taxid Site">
                      Support@USA-TaxID.com
                    </a>
                    <br />
                    Our support phone is:{" "}
                    <a href="tel:1-800-317-5781"> 1-800-317-5781</a>
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="header">
                  <Form.Label className="mb-5">
                    If you have any questions about getting started or the order
                    you placed please fill out for the below.
                  </Form.Label>
                </Form.Group>
                <Names id="customer" onChange={this.handleChange} />
                <Form.Group controlId="customerPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <InputMask
                    mask="(999) 999-9999"
                    onChange={this.handleChange}
                    maskChar={null}
                  >
                    {(inputProps) => (
                      <Form.Control
                        required
                        type="phone"
                        placeholder="(123) 456-7890"
                        pattern=".{14,}"
                      />
                    )}
                  </InputMask>
                  <Form.Control.Feedback type="invalid">
                    You must provide a valid phone number
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="customerEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Enter email"
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    You must provide a valid email address
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="radio">
                  <Fieldset
                    id="questionsOrder"
                    label="Have you placed and order with us?"
                    questionValue={this.state.questionsOrder}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.questionsOrder === "false" ? null : (
                  <>
                    <Form.Group controlId="orderId">
                      <Form.Label>Order number</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        placeholder="Order Number"
                        onChange={this.handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter order number
                      </Form.Control.Feedback>
                    </Form.Group>
                  </>
                )}
                <Form.Group controlId="message">
                  <Form.Label>How can we help you?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    placeholder="Type here..."
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    You must provide how can we help you?
                  </Form.Control.Feedback>
                </Form.Group>

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
}

export default ContactUs;
