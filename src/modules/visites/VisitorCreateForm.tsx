import { Autocomplete, Box, FormControl, TextField } from "@mui/material";
import { villes } from "@/constants/visitite-module";
import { typevisiteur } from "@/constants/visitite-module";
import Banner from "../home/Banner";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Icon } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@mui/material";

function VisitorCreateForm() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    titre: {
      backgroundColor: "Darkblue",
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
        Ajouter un visiteur
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
        <LinearProgress/>
        <br/>
      </Box>
        <FormControl>
          <TextField
            id="outlined-required"
            label="CIN"
            placeholder="Carte d'identité nationale"
            color="primary"
            name="cin"
            required
          />
          <TextField
            id="outlined-required"
            label="Nom"
            placeholder="Nom de famille"
            color="primary"
            name="nom"
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-required"
            label="Prénom"
            placeholder="Prénom"
            color="primary"
            name="prenom"
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
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-required"
            label="Entreprise"
            placeholder="Entreprise de provenance"
            color="secondary"
            name="entreprise"
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
          color="primary"
          className={classes.button}
        >
          Enregistrer <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </Box>
    </div>
  );
}

export default VisitorCreateForm;
