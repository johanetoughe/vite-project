import { ValidationSchema } from "@/constants/visitite-module";

export const initialValues: ValidationSchema = {
  cin: {
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
    helperText: "Custom error message",
  },
  nom: {
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  prenom: {
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  adresse: {
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 100,
  },
  entreprise: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20,
  },
};
