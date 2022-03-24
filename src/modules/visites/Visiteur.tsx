import Banner from "../home/Banner";
import "./Visiteur.css";
import { Button, Step, StepButton, Stepper, Typography } from "@mui/material";

import { useState } from "react";
import { Box } from "@mui/system";
import { handleSteps } from "./form-steps-handler";
import { steps, useStepper } from "@/hooks/useStepper";

const Visiteur = () => {
  const {
    completed,
    activeStep,
    handleBack,
    handleComplete,
    handleNext,
    handleReset,
    handleStep,
    completedSteps,
    totalSteps,
  } = useStepper();
  return (
    <div>
      <Banner />
      <Typography
        className="titre"
        variant="h4"
        align="center"
        gutterBottom
        component="div"
      >
        Gestion des visiteurs
      </Typography>
      <div className="paper">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {handleSteps(activeStep)}
          <Typography sx={{ mt: 2, mb: 1 }}>Etape {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Retour
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Suivant
            </Button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" sx={{ display: "inline-block" }}>
                  Etape {activeStep + 1} complété
                </Typography>
              ) : (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? "Terminé"
                    : "Étape complète"}
                </Button>
              ))}
          </Box>
        </div>
      </div>
    </div>
  );
};
export default Visiteur;
