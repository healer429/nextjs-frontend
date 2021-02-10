import React, {Component} from "react";
import {Form} from "react-bootstrap";
import InputMask from "react-input-mask";

class Communication extends Component {
    render() {
        return (
            <div>
                <h5>Communication</h5>
                <Form.Group controlId="customerPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <InputMask mask="(999) 999-9999" onChange={this.props.onChange} maskChar={null}>
                        {(inputProps) => <Form.Control required type="phone" placeholder="(123) 456-7890"
                                                       pattern=".{14,}"/>}
                    </InputMask>
                    <Form.Control.Feedback type="invalid">
                        You must provide a valid phone number
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="customerEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" onChange={this.props.onChange}/>
                    <Form.Control.Feedback type="invalid">
                        You must provide a valid email address
                    </Form.Control.Feedback>
                </Form.Group>
            </div>
        )
    }
}

export default Communication;