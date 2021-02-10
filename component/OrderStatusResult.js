import React from "react";
import {Container, Form} from "react-bootstrap";

export default function OrderStatusResult(props, state) {
    return (
        <div className="home ">
            <div className="content">
                <h3>Order Status</h3>
                <hr/>
                <Container fluid className="Form contact">
                    <Form>
                        <Form.Group controlId="header">
                            <Form.Label className="mb-5">
                            </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="orderNumber">
                            <Form.Label>Order number</Form.Label>
                            <Form.Control type="text" defaultValue={state.orderNumber} readOnly/>
                        </Form.Group>
                        <Form.Group controlId="einStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" defaultValue={props.order.einStatus} readOnly/>
                        </Form.Group>
                        <Form.Group controlId="statusDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" defaultValue={props.order.statusDescription} readOnly/>
                        </Form.Group>
                        {(props.order.einnumber ?
                            <Form.Group controlId="einnumber">
                                <Form.Label>EIN</Form.Label>
                                <Form.Control type="text" defaultValue={props.order.einnumber} readOnly/>
                            </Form.Group> : null)}

                    </Form>
                </Container>
            </div>
        </div>
    )
}
