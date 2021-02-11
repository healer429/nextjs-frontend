import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Col, Container, Form, Button} from 'react-bootstrap';
import * as actionCreater from "../../store/actions/productActions";
import { withRouter } from "next/router";
import Dates from "../../component/Dates";
import Communication from "../../component/Communication";
import CorporateAddress from "../../component/CorporateAddress";
import _withFormWrapper from "../../component/FormWrapper";
import GeneralQuestions from "../../component/GeneralQuestions";
import Names from "../../component/Names";
import StepProgress from "../../component/StepProgress";
import SSN from "../../component/SSN";

class EINTrust extends Component {
    state = {
        dbaname: null,
        legalName: null,
        trustType: null,
        createrFirstName: null,
        createrMiddleName: null,
        createrLastName: null,
        createrSSN: null,
        createrSuffixName: null,
        trusteeFirstName: null,
        trusteeMiddleName: null,
        trusteeLastName: null,
        trusteeTitle: null,
        trusteeAddressAddress1: null,
        trusteeAddressAddress2: null,
        trusteeAddressCity: null,
        trusteeAddressState: "",
        trusteeAddressCountry: "US",
        trusteeAddressZip: null,
        trusteeAddressCounty: null,
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
        questionsAppliedBefore: 'false',
        questionsHire: 'false',
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
                this.props.orderEINTrustStandardProduct(productInfo, this.props.router);
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
                <h3>2021 Trusts Tax ID / SS-4 Form</h3>
                <Col sm={12}>
                    <Form noValidate validated={this.state.validated} onSubmit={handleSubmit}>
                        <h5>Legal information</h5>
                        <Form.Group controlId="legalName">
                            <Form.Label>Trust name</Form.Label>
                            <Form.Control type="text" required placeholder="Name" onChange={this.handleChange}/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid trust name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="trustType">
                            <Form.Label>Type of Trust</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange} required>
                                <option value="">Select type of Trust</option>
                                <option value="BankruptcyEstate">Bankruptcy Estate (Individual)</option>
                                <option value="CharitableLeadAnnuityTrust">Charitable Lead Annuity Trust</option>
                                <option value="CharitableLeadUnitTrust">Charitable Lead Unitrust</option>
                                <option value="CharitableRemainderAnnuityTrust">Charitable Remainder Annuity Trust
                                </option>
                                <option value="CharitableRemainderUnitrust">Charitable Remainder Unitrust</option>
                                <option value="Conservatorship">Conservatorship</option>
                                <option value="Custodianship">Custodianship</option>
                                <option value="Escrow">Escrow</option>
                                <option value="FNMA">FNMA (Fannie Mae)</option>
                                <option value="GNMA">GNMA (Ginnie Mae)</option>
                                <option value="Guardianship">Guardianship</option>
                                <option value="IrrevocableTrust">Irrevocable Trust</option>
                                <option value="PooledIncomeFund">Pooled Income Fund</option>
                                <option value="QualifiedFuneralTrust">Qualified Funeral Trust</option>
                                <option value="Receivership">Receivership</option>
                                <option value="RevocableTrust">Revocable Trust</option>
                                <option value="SettlementFund">Settlement Fund</option>
                                <option value="Trust">Trust (All Others)</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid trust type
                            </Form.Control.Feedback>
                        </Form.Group>
                        <hr/>
                        <h5>Creator/Grantor Information</h5>
                        <Names id="creater" onChange={this.handleChange}/>
                        <Form.Group controlId="createrSuffixName">
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
                        <SSN id="creater" state={this.state}
                             onChange={this.handleChange} />
                        <hr/>
                        <h5>Trustee Information</h5>
                        <Names id="trustee" onChange={this.handleChange}/>
                        <Form.Group controlId="trusteeTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required as="select" onChange={this.handleChange}>
                                <option value="">Please Select</option>
                                <option value="trustee">Trustee</option>
                                <option value="co-trustee">Co-trustee</option>
                                <option value="successor trustee">Successor Trustee</option>
                                <option value="executor">Executor</option>
                                <option value="other">Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select a valid title
                            </Form.Control.Feedback>
                        </Form.Group>
                        <hr/>
                        <GeneralQuestions onChange={this.handleChange} state={this.state} only2={true} applyBeforeLabel="Has this trust ever received or applied for an EIN before?"/>
                        <hr/>
                        <CorporateAddress id="trusteeAddress" header="Trustee Address (PO Boxes are not authorized)"
                                 state={this.state}
                                 onChange={this.handleChange}/>
                        <hr/>
                        <Dates id="startDate" label="Date the Trust was started or acquired"
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
        orderEINTrustStandardProduct: (productInfo, history) => {
            dispatch(actionCreater.trustEinOrder(productInfo, history));
        },
        getProducts: () => {
            dispatch(actionCreater.getProducts());
        }
    };
};

const mapStateToProps = (state) => ({products: state.products})

export default _withFormWrapper(connect(mapStateToProps, mapDispatchToProps)(withRouter(EINTrust)))
