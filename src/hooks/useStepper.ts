import { useState } from "react";

export const steps = [
  "Informations Personnelles",
  "Informations Visite",
  "Confirmation",
];
export const useStepper = () => {
  const [activeStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setCurrentStep(newActiveStep);
  };

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setCurrentStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCompleted({});
  };

  return {
    completed,
    activeStep,
    handleBack,
    handleComplete,
    handleNext,
    handleReset,
    handleStep,
    completedSteps, totalSteps
  };
};
