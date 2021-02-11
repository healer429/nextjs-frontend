import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Col, Container, Form, Button} from 'react-bootstrap';
import * as actionCreater from "../../store/actions/productActions";
import { withRouter } from "next/router";
import Communication from "../../component/Communication";
import Dates from "../../component/Dates";
import CorporateAddress from "../../component/CorporateAddress";
import _withFormWrapper from "../../component/FormWrapper";
import Names from "../../component/Names";
import StepProgress from "../../component/StepProgress";
import SSN from "../../component/SSN";

class EINEstate extends Component {
    state = {
        dbaname: null,
        deceasedFirstName: null,
        deceasedMiddleName: null,
        deceasedLastName: null,
        deceasedSSN: null,
        deceasedSuffixName: null,
        representativeFirstName: null,
        representativeMiddleName: null,
        representativeLastName: null,
        representativeSSN: null,
        representativeSuffixName: null,
        representativeTitle: null,
        representativeAddressAddress1: null,
        representativeAddressAddress2: null,
        representativeAddressCity: null,
        representativeAddressState: "",
        representativeAddressCountry: "US",
        representativeAddressZip: null,
        representativeAddressCounty: null,
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
        dateOfDeathYear: new Date().getFullYear(),
        dateOfDeathDay: new Date().getDate(),
        dateOfDeathMonth: new Date().getMonth()+1,
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
        const product = products.filter(u => u.code.replace("_", "").includes(this.props.router.pathname.substring(10)))[0];
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
                    code: product.code
                };
                this.props.orderEINEstateStandardProduct(productInfo, this.props.router);
            }
            this.setState({validated: true});
        };
        if (!product) {
            return <Container fluid>Loading</Container>
        }
        return (
            <Container fluid className="Form">
                <StepProgress step={0} />
                <h2>Step 1: Complete Our Simplified Form</h2>
                <h3>2021 Estate Tax ID / SS-4 Form</h3>
                <Col sm={12}>
                    <Form noValidate validated={this.state.validated} onSubmit={handleSubmit}>

                        <h5>Deceased individual</h5>
                        <Names id="deceased" onChange={this.handleChange}/>
                        <Form.Group controlId="deceasedSuffixName">
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
                        <SSN id="deceased" state={this.state}
                             onChange={this.handleChange} />
                        <hr />
                        <h5>Representative/Executor</h5>
                        <Names id="representative" onChange={this.handleChange}/>
                        <Form.Group controlId="representativeSuffixName">
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
                        <Form.Group controlId="representativeTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required as="select" onChange={this.handleChange}>
                                <option value="executor">Executor</option>
                                <option value="administrator">Administrator</option>
                                <option value="personal_representative">Personal Representative</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select a valid title
                            </Form.Control.Feedback>
                        </Form.Group>
                        <SSN id="representative" state={this.state}
                             onChange={this.handleChange} />
                        <hr />
                        <CorporateAddress header="Executor/Legal personal representative address (PO Boxes are not authorized)"
                                 id="representativeAddress" state={this.state}
                                 onChange={this.handleChange}/>
                        <hr />
                        <Dates id="dateOfDeath" label="Date estate created/funded" month={this.state.dateOfDeathMonth}
                               day={this.state.dateOfDeathDay}
                               year={this.state.dateOfDeathYear} closingMonth={this.state.closingMonth}
                               onChange={this.handleChange}/>
                        <hr />
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
        orderEINEstateStandardProduct: (productInfo, history) => {
            dispatch(actionCreater.estateEinOrder(productInfo, history));
        },
        getProducts: () => {
            dispatch(actionCreater.getProducts());
        }
    };
};

const mapStateToProps = (state) => ({products: state.products})

export default _withFormWrapper(connect(mapStateToProps, mapDispatchToProps)(withRouter(EINEstate)))