import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Col, Container, Form, Button} from 'react-bootstrap';
import * as actionCreater from "../store/actions/productActions";
import InputMask from 'react-input-mask';
import { withRouter } from "next/router";
import GeneralQuestions from "./GeneralQuestions";
import Dates from "./Dates";
import Communication from "./Communication";
import ActivityInputs from "./ActivityInputs";
import CorporateAddress from "./CorporateAddress";
import _withFormWrapper from "./FormWrapper";
import Names from "./Names";
import StepProgress from "./StepProgress";
import SSN from "./SSN";

class EINNonProfit extends Component {
    state = {
        legalName: null,
        dbaname: null,
        nonProfitType: null,
        responsiblePartyFirstName: null,
        responsiblePartyMiddleName: null,
        responsiblePartyLastName: null,
        responsiblePartySSN: null,
        responsiblePartySuffixName: null,
        responsiblePartyTitle: null,
        activityReasonForApplying: null,
        activityPrimaryActivity: null,
        activitySpecificProducts: null,
        activityProductDescription : null,
        questionsAppliedBefore: "false",
        questionsHire: "false",
        questionsExcise: "false",
        questionsATF: "false",
        questionsGambling: "false",
        questionsHighway: "false",
        payLessThan4k: "false",
        annualTaxes: "false",
        previousEINNumberFirst2: null,
        previousEINNumberLast7: null,
        numberOfAgricultureEmployees: "0",
        numberOfHouseholdeEmployees: "0",
        numberOfOtherEmployees: "0",
        firstDateWagesMonth: "1",
        firstDateWagesDay: "1",
        firstDateWagesYear: "1996",
        corpAddressAddress1: null,
        corpAddressAddress2: null,
        corpAddressCity: null,
        corpAddressState: "",
        corpAddressCountry: "US",
        corpAddressZip: null,
        corpAddressCounty: null,
        altAddress: "false",
        altAddressAddress1: null,
        altAddressAddress2: null,
        altAddressCity: null,
        altAddressState: "",
        altAddressCountry: "US",
        altAddressZip: null,
        altAddressCounty: null,
        customerPhone: null,
        customerEmail: null,
        closingMonth: "12",
        startDateYear: new Date().getFullYear(),
        startDateDay: new Date().getDate(),
        startDateMonth: new Date().getMonth()+1,
        loading: true,
        validated: false
    };

    componentDidMount() {
        this.props.getProducts();
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });


    };

    render() {
        const {products} = this.props.products;
        const product = products.filter(u => u.code.replace("_", "").includes(this.props.location.pathname.substring(10)))[0];
        const handleSubmit = e => {
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
                const section = document.querySelector( '.form-control:invalid' );
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            } else {
                e.preventDefault();
                const productInfo = {
                    ...this.state,
                    customerName: product.customerName,
                    code: product.code,
                };
                this.props.orderEINNonProfitStandardProduct(productInfo, this.props.router);
            }
            this.setState({validated: true});
        };
        if (!product) {
            return <Container fluid>Loading</Container>
        }
        return (
            <Container fluid className="Form non-profit">
                <StepProgress step={0} />
                <h2>Step 1: Complete Our Simplified Form</h2>
                <h3>2021 Nonprofit Organization Tax ID / SS-4 Form</h3>
                <Col sm={12}>
                    <Form noValidate validated={this.state.validated} onSubmit={handleSubmit}>
                        <h5>Non-profit Organization</h5>
                        <Form.Group controlId="legalName">
                            <Form.Label>Legal Name of the Non-profit Organization</Form.Label>
                            <Form.Control type="text" required placeholder="Name" onChange={this.handleChange}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid organization name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="dbaname">
                            <Form.Label>DBA of the Non-Profit</Form.Label>
                            <Form.Control type="text" placeholder="Optional" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="nonProfitType">
                            <Form.Label>Type of Non-Profit</Form.Label>
                            <Form.Control type="text" placeholder="Example: Educational" onChange={this.handleChange}/>
                            <Form.Control.Feedback type="invalid">
                                Please specify the type of organization
                            </Form.Control.Feedback>
                        </Form.Group>
                        <hr/>
                        <h5>Responsible Party Information</h5>
                        <Names id="responsibleParty" onChange={this.handleChange}/>
                        <Form.Group controlId="responsiblePartySuffixName">
                            <Form.Label>Suffix Name (optional)</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange}>
                                <option value="">Please Select</option>
                                <option value="DDS">DDS</option>
                                <option value="MD">MD</option>
                                <option value="PhD">PhD</option>
                                <option value="JR">JR</option>
                                <option value="SR">SR</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="responsiblePartyTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required as="select" onChange={this.handleChange}>
                                <option value="">Please Select</option>
                                <option value="ceo">CEO</option>
                                <option value="executor">Executor</option>
                                <option value="owner">Owner</option>
                                <option value="managing member">Managing Member</option>
                                <option value="managing member/owner">Managing Member/Owner</option>
                                <option value="president">President</option>
                                <option value="other">Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select a valid title
                            </Form.Control.Feedback>
                        </Form.Group>
                        <SSN id="responsibleParty" state={this.state}
                             onChange={this.handleChange} />
                        <hr/>
                        <ActivityInputs onChange={this.handleChange}/>
                        <hr/>
                        <GeneralQuestions onChange={this.handleChange} state={this.state} applyBeforeLabel="Has this non-profit ever received or applied for an EIN before?"/>
                        <hr/>
                        <CorporateAddress header="Corporate Address (PO Boxes are not authorized)" id="corpAddress"
                                          state={this.state}
                                          onChange={this.handleChange}/>
                        <hr/>
                        <Dates id="startDate" label="Date entity was started or acquired"
                               month={this.state.startDateMonth}
                               day={this.state.startDateDay}
                               year={this.state.startDateYear} closingMonth={this.state.closingMonth}
                               onChange={this.handleChange}/>
                        <hr/>
                        <Communication onChange={this.handleChange}/>

                        <Button variant="primary" type="submit" className="mt-4">
                            Submit Application
                        </Button>
                    </Form>
                </Col>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        orderEINNonProfitStandardProduct: (productInfo, history) => {
            dispatch(actionCreater.nonProfitEinOrder(productInfo, history));
        },
        getProducts: () => {
            dispatch(actionCreater.getProducts());
        }
    };
};

const mapStateToProps = (state) => ({products: state.products})

export default _withFormWrapper(connect(mapStateToProps, mapDispatchToProps)(withRouter(EINNonProfit)))