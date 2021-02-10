import React from "react";
import {Col, Form} from "react-bootstrap";

export default function ActivityInputs(props) {
        return (
            <fieldset>
                <Form.Group>
                    <Form.Label>
                        {props.label}</Form.Label>
                    <Col>
                        <Form.Check inline
                                    type="radio"
                                    label="No"
                                    name={props.id}
                                    id={props.id}
                                    checked={props.questionValue === 'false'}
                                    value={'false'}
                                    onChange={props.onChange}
                        />
                        <Form.Check inline
                                    type="radio"
                                    label="Yes"
                                    name={props.id}
                                    id={props.id}
                                    checked={props.questionValue === 'true'}
                                    value={'true'}
                                    onChange={props.onChange}
                        />
                    </Col>
                </Form.Group>
            </fieldset>
        );
    }
