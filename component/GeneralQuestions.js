import React from "react";
import Fieldset from "./Fieldset";
import {Form} from "react-bootstrap";
import InputMask from "react-input-mask";
import Dates from "./Dates";

export default function GeneralQuestions(props) {
    return (
        <>
            <div className="radio">
                <h5>General questions</h5>
                {!props.only2 ? (<>
                        <Fieldset id="questionsHighway" label="Does your business own a highway motor vehicle weighing 55,000 pounds or
                                    more?" questionValue={props.state.questionsHighway} onChange={props.onChange}/>
                        <Fieldset id="questionsGambling" label="Does your business involve gambling?"
                                  questionValue={props.state.questionsGambling} onChange={props.onChange}/>
                        <Fieldset id="questionsATF"
                                  label="Does your business sell or manufacture alcohol, tobacco, or firearms?"
                                  questionValue={props.state.questionsATF} onChange={props.onChange}/>
                        <Fieldset id="questionsExcise" label="Does your business pay federal excise taxes?"
                                  questionValue={props.state.questionsExcise} onChange={props.onChange}/></>
                ) : null}
                <Fieldset id="questionsAppliedBefore" label={props.applyBeforeLabel ? props.applyBeforeLabel : "Has this LLC ever received or applied for an EIN before?"}
                          questionValue={props.state.questionsAppliedBefore} onChange={props.onChange}/>
            </div>
            {props.state.questionsAppliedBefore === "false" ? null : (
                <>
                    <Form.Group controlId="previousEINNumberFirst2">
                        <Form.Label>Previous EIN number, first 2 digits</Form.Label>
                        <InputMask mask="99" onChange={props.onChange} maskChar={null}>
                            {(inputProps) => <Form.Control required type="text" placeholder="XX"
                                                           pattern=".{2,}"/>}
                        </InputMask>
                        <Form.Control.Feedback type="invalid">
                            Please specify the previous EIN
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="previousEINNumberLast7">
                        <Form.Label>Previous EIN number, last 7 digits</Form.Label>
                        <InputMask mask="9999999" onChange={props.onChange} maskChar={null}>
                            {(inputProps) => <Form.Control required type="text" placeholder="XXXXXXX"
                                                           pattern=".{7,}"/>}
                        </InputMask>
                        <Form.Control.Feedback type="invalid">
                            Please specify the previous EIN
                        </Form.Control.Feedback>
                    </Form.Group>
                </>
            )
            }
            <div className="radio">
                <Fieldset id="questionsHire" label="Do you currently have, or plan to hire employees within the next year (not including
                                    owners)?" questionValue={props.state.questionsHire} onChange={props.onChange}/>
            </div>
            {props.state.questionsHire === "false" ? null : (
                <>
                    <div className="radio">
                        <Fieldset id="payLessThan4k" questionValue={props.state.payLessThan4k}
                                  label="Do you expect to pay less than $4000 in salary this year?"
                                  onChange={props.onChange}/>
                        {props.state.payLessThan4k === "true" ? (
                            <Fieldset id="annualTaxes" questionValue={props.state.annualTaxes}
                                      label="Do you want to file employment tax annually instead of quarterly?"
                                      onChange={props.onChange}/>) : null}
                    </div>
                    <Form.Group controlId="numberOfAgricultureEmployees">
                        <Form.Label>Number of Agricultural Employees</Form.Label>
                        <Form.Control required type="text" onChange={props.onChange} value={props.state.numberOfAgricultureEmployees}/>
                        <Form.Control.Feedback type="invalid">
                            Please specify a number
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="numberOfHouseholdeEmployees">
                        <Form.Label>Number of Household Employees</Form.Label>
                        <Form.Control required type="text" onChange={props.onChange} value={props.state.numberOfHouseholdeEmployees}/>
                        <Form.Control.Feedback type="invalid">
                            Please specify a number
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="numberOfOtherEmployees">
                        <Form.Label>Number of Other Employees</Form.Label>
                        <Form.Control required type="text" onChange={props.onChange} value={props.state.numberOfOtherEmployees}/>
                        <Form.Control.Feedback type="invalid">
                            Please specify a number
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Dates id="firstDateWages" label="First date wages or annuities were or will be paid"
                           month={props.state.firstDateWagesMonth}
                           day={props.state.firstDateWagesDay}
                           year={props.state.firstDateWagesYear}
                           onChange={props.onChange}/>
                </>
            )}
        </>
    )
}
