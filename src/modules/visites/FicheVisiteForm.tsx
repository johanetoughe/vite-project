import { Autocomplete, Box, FormControl, TextField } from "@mui/material";
import { prestation } from "@/constants/visitite-module";
import { objetvisite } from "@/constants/visitite-module";
import { personne_a_contacter } from "@/constants/visitite-module";
import { departement } from "@/constants/visitite-module";
import { services } from "@/constants/visitite-module";

function FicheVisiteForm() {
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
        <Autocomplete
          aria-required
          disablePortal
          id="combo-box-demo"
          options={prestation}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Prestation" />}
        />
        <Autocomplete
          aria-required
          disablePortal
          id="combo-box-demo"
          options={objetvisite}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Objet de la visite" />
          )}
        />
      </FormControl>
      <FormControl>
        <Autocomplete
          aria-required
          disablePortal
          id="combo-box-demo"
          options={personne_a_contacter}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Personne à contacter" />
          )}
        />
        <Autocomplete
          aria-required
          disablePortal
          id="combo-box-demo"
          options={departement}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Departement" />
          )}
        />
      </FormControl>
      <FormControl>
        <Autocomplete
          aria-required
          disablePortal
          id="combo-box-demo"
          options={services}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Service" />}
        />
        <TextField
          required
          id="time"
          label="Heure de la visite"
          type="time"
          defaultValue="09:30"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          required
          id="date"
          label="Date de la visite"
          type="date"
          InputLabelProps={{
            shrink: true
          }}
        />
      </FormControl>
    </Box>
  );
}

export default FicheVisiteForm;
