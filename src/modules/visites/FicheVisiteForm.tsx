import { Autocomplete, Box, FormControl, TextField } from "@mui/material";
import { prestation } from "@/constants/visitite-module";
import { objetvisite } from "@/constants/visitite-module";
import { personne_a_contacter } from "@/constants/visitite-module";
import { departement } from "@/constants/visitite-module";
import { services } from "@/constants/visitite-module";
import Banner from "../home/Banner";
import { LinearProgress } from "@mui/material";
import { Typography } from "@mui/material";
import { Icon } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

function FicheVisiteForm() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    titre: {
      backgroundColor: "Darkgreen",
      color: "white",
    },
  }));
  const classes = useStyles();
  return (
    <div>
    <Banner />
    <Typography
        className={classes.titre}
        variant="h4"
        align="center"
        gutterBottom
        component="div"
      >
        Créer une visite
      </Typography>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        paddingTop: "5%",
          marginLeft: "20%",
          marginRight: "14%",
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="success"/>
        <br/>
      </Box>
      <FormControl>
      <TextField
          id="filled-search"
          label="Rechercher CIN"
          type="search"
          variant="filled"
        />
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
      <br />
        <br />
        &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp;
        &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp;
        &emsp;&emsp; &emsp;&emsp; &emsp;
        <Button
          type="submit"
          variant="contained"
          color="success"
          className={classes.button}
        >
          Enregistrer <Icon className={classes.rightIcon}>send</Icon>
        </Button>
    </Box>
    </div>
  );
}

export default FicheVisiteForm;
