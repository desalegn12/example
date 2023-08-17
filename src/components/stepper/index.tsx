import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

export type StepType = {
    label: string;
    component: JSX.Element;
    tooltip?: string;
};


type CustomStepperProps = {
    steps: StepType[];
    activeStep?: number;
    setActiveStep: (step: number) => void;
}


const CustomStepper = ({ steps, activeStep = 0, setActiveStep }: CustomStepperProps): JSX.Element => {
    return (
        <Box component="div">
            <Box component="div" width="80%" margin="auto">
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <Tooltip title={step.tooltip || ''} placement="top">
                                <StepLabel
                                    onClick={() => setActiveStep(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {step.label}
                                </StepLabel>
                            </Tooltip>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box component="div" mt={3}>
                {steps[activeStep].component}
            </Box>
        </Box>
    );
}

export default CustomStepper;
