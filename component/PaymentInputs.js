import React from "react";
import { usePaymentInputs } from "react-payment-inputs";
import { Button, Form } from "react-bootstrap";
import Fieldset from "./Fieldset";
import Address from "./Address";
import CustomLabel from "./CustomLabel";
import card from "../img/Credit-Card-Visa-And-Master-Card.png";
import "../css/payment.css";
import axios from "axios";

export default function PaymentInputs(props) {
  const [beforeSubmit, setBeforeSubmit] = React.useState(true);
  const [validated, setValidated] = React.useState(false);
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;
  const [lastName, setLastName] = React.useState(props.state.lastName);
  const [firstName, setFirstName] = React.useState(props.state.firstName);
  const [cardNumber, setCardNumber] = React.useState(props.state.cardNumber);
  const [expiryDate, setExpiryDate] = React.useState(props.state.expiryDate);
  const [cvc, setCVC] = React.useState(props.state.cvc);
    const [standard, setStandard] = React.useState("");
    const [rush, setRush] = React.useState("");
    axios
        .get(process.env.REACT_APP_API + "/products/prices?productCodes=EIN_SoleProp")
        .then((response) =>
            response.data.forEach((product) => {
                switch(product.option) {
                    case "RUSH":
                        setRush(product.price)
                        break;
                    case "STANDARD":
                        setStandard(product.price)
                        break;
                    default:
                }
            })
        );
  function handleFirstChange(event) {
    setFirstName(event.target.value);
    props.onChange(event);
  }

  function handleLastChange(event) {
    setLastName(event.target.value);
    props.onChange(event);
  }

  function handleCardNumber(event) {
    setCardNumber(event.target.value);
    props.onChange(event);
  }

  function handleExpiryDate(event) {
    setExpiryDate(event.target.value);
    props.onChange(event);
  }

  function handleCVC(event) {
    setCVC(event.target.value);
    props.onChange(event);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBeforeSubmit(false);
    const section1 = document.querySelector(".is-invalid");
    if (section1 != null)
      section1.scrollIntoView({ behavior: "smooth", block: "start" });

    if (
      (typeof meta.erroredInputs.cardNumber === "undefined" ||
        cardNumber === "0000000000000000") &&
      typeof meta.erroredInputs.expiryDate === "undefined" &&
      typeof meta.erroredInputs.cvc === "undefined" &&
      lastName.length !== 0 &&
      firstName.length !== 0
    ) {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        const section = document.querySelector(".form-control:invalid");
        if (section != null)
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        props.onSubmit();
      }
      setValidated(true);
    }
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h5>Processing Option</h5>
      <fieldset className="border-check">
        <Form.Group>
          <Form.Check
            type="radio"
            label={
              <CustomLabel
                name="EIN Number/Tax ID - Rush Delivery"
                description="Your EIN/Tax ID will be delivered within 24 hours"
                price={rush}
              />
            }
            name="processingOption"
            id="processingOption2"
            value={"RUSH"}
            checked={props.state.processingOption === "RUSH"}
            onChange={props.onChange}
          />
          <Form.Check
            type="radio"
            label={
              <CustomLabel
                name="EIN Number/Tax ID - Standard Delivery"
                description="Your EIN/Tax ID will be delivered in 1-2 business days"
                price={standard}
              />
            }
            name="processingOption"
            id="processingOption1"
            value={"STANDARD"}
            checked={props.state.processingOption === "STANDARD"}
            onChange={props.onChange}
          />
        </Form.Group>
      </fieldset>
      <hr />
      <h5>Credit Card Information</h5>
      <Form.Group controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First name"
          defaultValue={props.state.firstName}
          onKeyPress={(event) => {
            if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
          }}
          required
          isInvalid={firstName.length === 0 && !beforeSubmit}
          onChange={handleFirstChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last name"
          defaultValue={props.state.lastName}
          onKeyPress={(event) => {
            if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
          }}
          required
          isInvalid={lastName.length === 0 && !beforeSubmit}
          onChange={handleLastChange}
        />

        <Form.Control.Feedback type="invalid">
          Please provide a valid name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="cardNumber">Card number</Form.Label>
        <img alt="" src={card} id="cardsImg" />
        <Form.Control
          required
          defaultValue={props.state.cardNumber}
          {...getCardNumberProps({ onChange: handleCardNumber })}
          isInvalid={
            cardNumber !== "0000000000000000" &&
            ((touchedInputs.cardNumber && erroredInputs.cardNumber) ||
              (cardNumber.length === 0 && !beforeSubmit))
          }
          placeholder="0000 0000 0000 0000"
        />

        <Form.Control.Feedback type="invalid">
          {erroredInputs.cardNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Expiry date</Form.Label>
        <Form.Control
          required
          defaultValue={props.state.expiryDate}
          {...getExpiryDateProps({ onChange: handleExpiryDate })}
          isInvalid={
            (touchedInputs.expiryDate && erroredInputs.expiryDate) ||
            (expiryDate.length === 0 && !beforeSubmit)
          }
        />
        <Form.Control.Feedback type="invalid">
          {erroredInputs.expiryDate}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>CVC</Form.Label>
        <Form.Control
          required
          defaultValue={props.state.cvc}
          {...getCVCProps({ onChange: handleCVC })}
          isInvalid={
            (touchedInputs.cvc && erroredInputs.cvc) ||
            (cvc.length === 0 && !beforeSubmit)
          }
          placeholder="CVC"
          pattern="\d{3,4}"
        />
        <Form.Control.Feedback type="invalid">
          {erroredInputs.cvc}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="inline-check-wrapper mt-4 billing-address">
        <Fieldset
          id="billingAddress"
          label="My billing address is different"
          questionValue={props.state.billingAddress}
          onChange={props.onChange}
        />
        {props.state.billingAddress === "true" ? (
          <Address
            id="billingAddress"
            state={props.state}
            noCounty={true}
            onChange={props.onChange}
            beforeSubmit={beforeSubmit}
          />
        ) : null}
      </div>
      <div className="invalid-feedback d-block mt-0 mb-2">
        {props.error ? props.error.message : null}
      </div>
      <Button variant="primary" type="submit" className="mt-4">
        Submit Application
      </Button>
    </Form>
  );
}
