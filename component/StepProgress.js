import Stepper from "react-stepper-horizontal";

export default function StepProgress(props) {
    return (
        <>
            <div style={{marginTop:"-40px",marginBottom:"20px"}}>
                <Stepper activeColor="#101661" completeColor="#101661" defaultColor="#757575" defaultBarColor="#757575" completeBarColor="#101661" steps={ [{title: 'Application Information'}, {title: 'Application Submission'}, {title: 'Receive EIN'}] } activeStep={ props.step } />
            </div>
        </>
    )
}