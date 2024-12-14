import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Address', 'Payment', 'Confirmation'];

const DeliveryPage = () => {
  return (
    <Stepper activeStep={1}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default DeliveryPage;
