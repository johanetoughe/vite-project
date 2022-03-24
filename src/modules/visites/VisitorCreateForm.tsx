import { Autocomplete, Box, FormControl, TextField } from "@mui/material";
import { villes } from "@/constants/visitite-module";
import { typevisiteur } from "@/constants/visitite-module";
import { initialValues } from "@/constants/initialValues";


function VisitorCreateForm() {
  const { cin, nom, prenom, adresse, entreprise } = initialValues

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        padding: "32px",
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <TextField
          id="outlined-required"
          label="CIN"
          placeholder="Carte d'identité nationale"
          color="primary"
          name="cin"
          value={cin.value}
          error={!!cin.error}
          helperText={cin.error}
          required
        />
        <TextField
          id="outlined-required"
          label="Nom"
          placeholder="Nom de famille"
          color="primary"
          name="nom"
          value={nom.value}
          error={!!nom.error}
          helperText={nom.error}
          required={nom.required}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-required"
          label="Prénom"
          placeholder="Prénom"
          color="primary"
          name="prenom"
          value={prenom.value}
          error={!!prenom.error}
          helperText={prenom.error}
          required={prenom.required}
        />
        <Autocomplete
          id="combo-box-demo"
          options={villes}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Ville" />}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-required"
          label="Addresse"
          placeholder="Adresse du domicile"
          color="primary"
          name="adresse"
          value={adresse.value}
          error={!!adresse.error}
          helperText={adresse.error}
          required={adresse.required}
        />
        <Autocomplete
          aria-required
          disablePortal
          id="combo-box-demo"
          options={typevisiteur}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Type visiteur" />
          )}
        />
         <TextField
          id="outlined-required"
          label="Entreprise"
          placeholder="Entreprise de provenance"
          color="secondary"
          name="entreprise"
          value={entreprise.value}
          error={!!entreprise.error}
          helperText={entreprise.error}
          required={entreprise.required}
        />
      </FormControl>
    </Box>
  );
}

export default VisitorCreateForm;
