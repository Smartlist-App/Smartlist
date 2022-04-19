import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Let's get started",
    description: `You haven't connected your bank account with Smartlist. You'll need to connect your bank account for us to view your transactions and help you save money.`
  },
  {
    label: "Connect your bank account",
    description:
      "An ad group contains one or more ads which target a shared set of keywords."
  },
  {
    label: "Set a goal",
    description: `Pick a goal which you want to set`
  },
  {
    label: "Configure notifications",
    caption: "Optional",
    description: `We'll let you know when you overspend.`
  }
];

export default function NoData() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        maxWidth: {
          sm: "400px"
        },
        mt: 2
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                step.caption ? (
                  <Typography variant="caption">{step.caption}</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h6">You're all set!</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Feel free to explore your finance dashboard, goals, and lessons.
            You'll be saving money in no time
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 2, mr: 1 }}>
            Restart setup
          </Button>
          <Button
            onClick={handleReset}
            sx={{ mt: 2, mr: 1 }}
            variant="contained"
          >
            Let's go!
          </Button>
        </Paper>
      )}
    </Box>
  );
}