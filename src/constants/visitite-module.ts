import { initialValues } from "./initialValues";
import { createContext } from "react";
export const villes = [
    { label: "AGADIR" },
    { label: "AL HOCEÏMA" },
    { label: "AMIZMIZ" },
    { label: "AZEMMOUR" },
    { label: "AZROU" },
    { label: "BENI MELLAL" },
    { label: "BOUJDOUR" },
    { label: "BOULEMANE DADÈS" },
    { label: "CASABLANCA" },
    { label: "ESSAOUIRA" },
    { label: "FES" },
    { label: "GUERCIF" },
    { label: "INEZGANE" },
    { label: "JEBHA" },
    { label: "KHENIFRA" },
    { label: "LARACHE" },
    { label: "MARRAKECH" },
    { label: "MOHAMMÉDIA" },
    { label: "MOULAY DRISS ZERHOUN" },
    { label: "NADOR" },
    { label: "OUARZAZATE" },
    { label: "OUJDA" },
    { label: "OULMÈS" },
    { label: "RABAT" },
    { label: "SAFI" },
    { label: "SALÉ" },
    { label: "SÉFROU" },
    { label: "SKOURA" },
    { label: "TANGER" },
    { label: "TAOURIRT" },
    { label: "TARFAYA" },
    { label: "TAROUDANT" },
    { label: "TAZA" },
    { label: "TÉTOUAN" },
    { label: "TÉMARA" },
  ];

  export const typevisiteur = [
    { label: "ADHERENT" },
    { label: "ASSOCIATIONS PROFESSIONNELLE" },
    { label: "AUTO-ENTREPRENEUR" },
    { label: "AUTRES" },
    { label: "CHEF D'ENTREPRISE" },
    { label: "COMMERÇANT" },
    { label: "CREATEUR D'ENTREPRISE" },
    { label: "ETUDIANT" },
    { label: "FOURNISSEUR/PRESTATAIRE" },
    { label: "INVESTISSEUR" },
    { label: "MEMBRES" },
    { label: "PARTENAIRES" },
    { label: "PRESSE" },
  ];

  export const prestation = [
    { label: "ACCOMPAGNEMENT" },
    { label: "BUREAU D'ORDRE" },
    { label: "COMPTABILITÉ" },
    { label: "DIRECTEUR" },
    { label: "DOCUMENTS ADMINISTRATIFS" },
    { label: "ESPACES/SALLES" },
    { label: "EVENEMENTS" },
    { label: "FORMATION" },
    { label: "GUICHETS" },
    { label: "INFORMATIONS" },
    { label: "PERSONNEL" },
    { label: "PRESIDENT" },
    { label: "RECLAMATIONS" },
    { label: "REUNIONS" },
    { label: "VICE PRESIDENT" },
  ];

  export const objetvisite = [
    { label: "ATTESTATION + CARTE" },
    { label: "ATTESTATION DE STAGE" },
    { label: "ATTESTATION PROFESSIONNELLE" },
    { label: "CARTE ADHESION" },
    { label: "CERTIFICAT D'ORIGINE" },
  ];

  export const personne_a_contacter = [
    { label: "SAID KHALDI" },
    { label: "KHADIJA NAIRI" },
    { label: "MOHAMED ALMOTIA" },
    { label: "ABDELGHANI YATRIBI" },
    { label: "RKIA ALILECH" },
    { label: "ALI DAMNATI" },
    { label: "RABYA AQEL" },
    { label: "MHANED AOUBID" },
    { label: "MOHAMED DIKER" },
    { label: "SOUMIA JALANI" },
    { label: "SOUMIA MRABET" },
  ];

  export const departement = [
    { label: "Service aux ressortissants" },
    { label: "Appui et promotion" },
    { label: "Administratif, financier et suivi de gestion" },
    { label: "Stratégie et partenariat" },
  ];

  export const services = [
    { label: "Information et communication" },
    { label: "Prestation de proximité" },
    { label: "Formation et Networking" },
    { label: "Promotion et développement" },
    { label: "Ressources financières et SI" },
    { label: "Stratégie et relations institutionnelles" },
    { label: "Partenariat et diplomatie économique" },
  ];

  export declare type ValidationSchema = Record<
  string,
  {
    value?: any
    error?: string
    required?: boolean
    validate?:
      | 'text'
      | 'number'
      | 'email'
      | 'phone'
      | 'zip'
      | 'checkbox'
      | 'select'
    minLength?: number
    maxLength?: number
    helperText?: string
  }
>
  type ContextProps = {
    activeStep: number
    formValues: ValidationSchema
    handleChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      checked?: boolean
    ) => void
    handleNext: () => void
    handleBack: () => void
    variant: 'outlined' | 'standard' | 'filled'
    margin: 'dense' | 'normal' | 'none'
  }
const variant = 'standard'
const margin = 'normal'
  export const AppContext = createContext<ContextProps>({
    activeStep: 0,
    formValues: initialValues,
    handleChange() {},
    handleNext() {},
    handleBack() {},
    variant,
    margin
  })

  