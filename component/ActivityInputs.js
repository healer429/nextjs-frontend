import React from 'react';
import {Form} from "react-bootstrap";


export default function ActivityInputs(props) {
    const [activityPrimaryActivity, setActivityPrimaryActivity] = React.useState("");
    const [activitySpecificProducts, setActivitySpecificProducts] = React.useState("");

    const activityPrimaryActivities = [
        {
            name: 'Please Select',
            value: '',
        }, {
            name: 'Construction',
            value: 'construction',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Carpentry',
                value: 'carpentry',
            }, {
                name: 'Construction',
                value: 'construction',
            }, {
                name: 'Electrical',
                value: 'electrical',
            }, {
                name: 'Handyman',
                value: 'handyman',
            }, {
                name: 'Home improvement',
                value: 'home improvement',
            }, {
                name: 'Labor',
                value: 'labor',
            }, {
                name: 'Painting',
                value: 'painting',
            }, {
                name: 'Plumbing',
                value: 'plumbing',
            }, {
                name: 'Remodeling',
                value: 'remodeling',
            }, {
                name: 'Roofing',
                value: 'roofing',
            }, {
                name: 'Other',
                value: 'Other',
            }],
        }, {
            name: 'Real Estate',
            value: 'real_estate',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Consulting',
                value: 'consulting',
            }, {
                name: 'Real estate',
                value: 'real estate',
            }, {
                name: 'Real estate development',
                value: 'real estate development',
            }, {
                name: 'Real estate holding company',
                value: 'real estate holding company',
            }, {
                name: 'Real estate investment',
                value: 'real estate investment',
            }, {
                name: 'Real estate management',
                value: 'real estate management',
            }, {
                name: 'Real estate services',
                value: 'real estate services',
            }, {
                name: 'Rental property',
                value: 'rental property',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Rental & Leasing',
            value: 'rental_leasing',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Construction',
                value: 'construction',
            }, {
                name: 'Real Estate',
                value: 'real_estate',
            }, {
                name: 'Rental & Leasing',
                value: 'rental_leasing',
            }, {
                name: 'Manufacturing',
                value: 'manufacturing',
            }, {
                name: 'Transportation & warehousing',
                value: 'transportation',
            }, {
                name: 'Finance & Insurance',
                value: 'finance',
            }, {
                name: 'Health Care & Social Assistance',
                value: 'social_assistance',
            }, {
                name: 'Accommodation & Food Service',
                value: 'accommodation',
            }, {
                name: 'Wholesale-agent/Broker',
                value: 'wholesale_agent',
            }, {
                name: 'Wholesale-Other',
                value: 'wholesale_other',
            }, {
                name: 'Retail',
                value: 'retail',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Manufacturing',
            value: 'manufacturing',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Beer',
                value: 'beer',
            }, {
                name: 'Custom furniture',
                value: 'custom furniture',
            }, {
                name: 'Machining',
                value: 'machining',
            }, {
                name: 'Welding services',
                value: 'welding services',
            }, {
                name: 'Wine',
                value: 'wine',
            }, {
                name: 'Wood',
                value: 'wood',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Transportation & warehousing',
            value: 'transportation',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Delivery',
                value: 'delivery',
            }, {
                name: 'Freight',
                value: 'freight',
            }, {
                name: 'Hauling',
                value: 'hauling',
            }, {
                name: 'Transportation',
                value: 'transportation',
            }, {
                name: 'Truck driver',
                value: 'truck driver',
            }, {
                name: 'Trucking',
                value: 'trucking',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Finance & Insurance',
            value: 'finance',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Bookkeeping',
                value: 'bookkeeping',
            }, {
                name: 'Consulting',
                value: 'consulting',
            }, {
                name: 'Insurance',
                value: 'insurance',
            }, {
                name: 'Investment',
                value: 'investment',
            }, {
                name: 'Other financial investment activities',
                value: 'other financial investment activities',
            }, {
                name: 'Public accounting firm',
                value: 'public accounting firm',
            }, {
                name: 'Tax preparation services',
                value: 'tax preparation services',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Health Care & Social Assistance',
            value: 'social_assistance',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Acupuncture',
                value: 'acupuncture',
            }, {
                name: 'Chiropractic',
                value: 'chiropractic',
            }, {
                name: 'Consulting',
                value: 'consulting',
            }, {
                name: 'Counseling',
                value: 'counseling',
            }, {
                name: 'Dentistry',
                value: 'dentistry',
            }, {
                name: 'Healthcare',
                value: 'healthcare',
            }, {
                name: 'Massage therapy',
                value: 'massage therapy',
            }, {
                name: 'Medical devices',
                value: 'medical devices',
            }, {
                name: 'Medical services',
                value: 'medical services',
            }, {
                name: 'Mental health counseling',
                value: 'mental health counseling',
            }, {
                name: 'Mental health services',
                value: 'mental health services',
            }, {
                name: 'Mental health therapy',
                value: 'mental health therapy',
            }, {
                name: 'Pharmacy',
                value: 'pharmacy',
            }, {
                name: 'Psychological services',
                value: 'psychological services',
            }, {
                name: 'Psychotherapy',
                value: 'psychotherapy',
            }, {
                name: 'Therapy',
                value: 'therapy',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Accommodation & Food Service',
            value: 'accommodation',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Airport concessions',
                value: 'airport concessions',
            }, {
                name: 'Catering',
                value: 'catering',
            }, {
                name: 'Coffee',
                value: 'coffee',
            }, {
                name: 'Food and beverage',
                value: 'food and beverage',
            }, {
                name: 'Food service',
                value: 'food service',
            }, {
                name: 'Food truck',
                value: 'food truck',
            }, {
                name: 'Ice cream',
                value: 'ice cream',
            }, {
                name: 'Personal chef',
                value: 'personal chef',
            }, {
                name: 'Restaurant',
                value: 'restaurant',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Wholesale-agent/Broker',
            value: 'wholesale_agent',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Consulting',
                value: 'consulting',
            }, {
                name: 'Local support and customer service',
                value: 'local support and customer service',
            }, {
                name: 'Promotional products',
                value: 'promotional products',
            }, {
                name: 'Social media marketing services',
                value: 'social media marketing services',
            }, {
                name: 'Supplements',
                value: 'supplements',
            }, {
                name: 'Telecommunications goods and services',
                value: 'telecommunications goods and services',
            }, {
                name: 'Wholesale consumer products',
                value: 'wholesale consumer products',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Wholesale-Other',
            value: 'wholesale_other',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Alcoholic beverages',
                value: 'alcoholic beverages',
            }, {
                name: 'Autos',
                value: 'autos',
            }, {
                name: 'Clothing',
                value: 'clothing',
            }, {
                name: 'Consulting',
                value: 'consulting',
            }, {
                name: 'Handbags',
                value: 'handbags',
            }, {
                name: 'Interior design',
                value: 'interior design',
            }, {
                name: 'Jewelry',
                value: 'jewelry',
            }, {
                name: 'Seafood',
                value: 'seafood',
            }, {
                name: 'Vehicles',
                value: 'vehicles',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Retail',
            value: 'retail',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Art',
                value: 'art',
            }, {
                name: 'Books',
                value: 'books',
            }, {
                name: 'Clothing and accessories',
                value: 'clothing and accessories',
            }, {
                name: 'Crafts',
                value: 'crafts',
            }, {
                name: 'Flowers',
                value: 'flowers',
            }, {
                name: 'Food and beverage',
                value: 'food and beverage',
            }, {
                name: 'Hemp products',
                value: 'hemp products',
            }, {
                name: 'Home decor',
                value: 'home decor',
            }, {
                name: 'Jewelry',
                value: 'jewelry',
            }, {
                name: 'Restaurant',
                value: 'restaurant',
            }, {
                name: 'Retail',
                value: 'retail',
            }, {
                name: 'Sporting goods',
                value: 'sporting goods',
            }, {
                name: 'Other',
                value: 'other',
            }],
        }, {
            name: 'Other',
            value: 'other',
            specificProducts: [{
                name: 'Please Select',
                value: '',
            }, {
                name: 'Agriculture',
                value: 'agriculture',
            }, {
                name: 'Child care',
                value: 'child care',
            }, {
                name: 'Cleaning services',
                value: 'cleaning services',
            }, {
                name: 'Consulting',
                value: 'consulting',
            }, {
                name: 'Education',
                value: 'education',
            }, {
                name: 'Entertainment',
                value: 'entertainment',
            }, {
                name: 'Interior design',
                value: 'interior design',
            }, {
                name: 'Investments',
                value: 'investments',
            }, {
                name: 'Landscaping',
                value: 'landscaping',
            }, {
                name: 'Lawn care',
                value: 'lawn care',
            }, {
                name: 'Legal services',
                value: 'legal services',
            }, {
                name: 'Marketing',
                value: 'marketing',
            }, {
                name: 'None',
                value: 'none',
            }, {
                name: 'Painting',
                value: 'painting',
            }, {
                name: 'Photography',
                value: 'photography',
            }, {
                name: 'Restaurant',
                value: 'restaurant',
            }, {
                name: 'Services',
                value: 'services',
            }, {
                name: 'Other',
                value: 'other',
            }],
        },

    ]
    function handleSpecificProductsChange(event) {
        setActivitySpecificProducts(event.target.value);
        props.onChange(event);
    }
    function handlePrimaryChange(event) {
        setActivityPrimaryActivity(event.target.value);
        props.onChange(event);
    }
    const getActiviteSpecificProductsOther = () => {
        return (
            activitySpecificProducts === "other" ? <div>
            <Form.Group controlId="activityProductDescription">
                <Form.Label>Describe Products/Services</Form.Label>
                <Form.Control type="text" placeholder="Describe Products/Services" onChange={props.onChange} required/>
                <Form.Control.Feedback type="invalid">
                    Please describe the products sold or services provided
                </Form.Control.Feedback>
            </Form.Group>
        </div> : null)
    }
    const getActivitySpecificProducts = () => {
        const activityPrimaryActivitie = activityPrimaryActivities.filter(({value}) => value === activityPrimaryActivity)[0]
        return (
            activityPrimaryActivitie.value === "" ? null : <div>
                <Form.Group controlId="activitySpecificProducts">
                    <Form.Label>Specific Products/Services</Form.Label>
                    <Form.Control as="select" required onChange={handleSpecificProductsChange}>
                        {activityPrimaryActivitie.specificProducts.map(m => <option key={m.value}
                                                                                    value={m.value}>{m.name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please describe the products sold or services provided
                    </Form.Control.Feedback>
                </Form.Group>
                {getActiviteSpecificProductsOther()}
            </div>
     )
    }

    return (
        <div>
            <h5>Activity</h5>
            <Form.Group controlId="activityReasonForApplying">
                <Form.Label>Closest reason for applying</Form.Label>
                <Form.Control as="select" required onChange={props.onChange}>
                    <option value="">Please Select</option>
                    <option value="started_business">Started New Business</option>
                    <option value="hired_employees">Hired Employees</option>
                    <option value="banking_purposes">Banking Purposes</option>
                    <option value="changed_organization">Changed Type of Organization</option>
                    <option value="purchased_business">Purchased Business</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    Please provide a reason for applying
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="activityPrimaryActivity">
                <Form.Label>Primary Activity</Form.Label>
                <Form.Control as="select" required onChange={handlePrimaryChange}>
                    {activityPrimaryActivities.map(({name, value}) => <option
                        value={value} key={value}>{name}</option>)}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    Please select the business activity
                </Form.Control.Feedback>
            </Form.Group>
            {getActivitySpecificProducts()}
        </div>
    );
}