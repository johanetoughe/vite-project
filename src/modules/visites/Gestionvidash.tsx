import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import "@/modules/home/Dashboard.css";
import Banner from "../home/Banner";
import { Link } from "react-router-dom";
import '../home/Dashboard.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function Gestionvidash() {
  return (
    <div>
      <Banner />
      <Box
        className="interfaceui"
        sx={{ width: 1 }}
        paddingTop="50px"
        paddingBottom="32px"
      >
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
          <Box gridColumn="span 4">
            <Item>
              <img src="https://cdn-icons-png.flaticon.com/512/4599/4599811.png" width='100px' height='100px'/>
              <Typography variant="h5" gutterBottom component="div">
                Consulter la liste des visiteurs
              </Typography>
              <Link to="">Continuer</Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
            <img src="https://cdn.icon-icons.com/icons2/37/PNG/512/adduser_a%C3%B1adir_3553.png" width='100px' height='100px'/>
              <Typography variant="h5" gutterBottom component="div">
                Ajouter un visiteur
              </Typography>
              <Link to="/modules/visites/VisitorCreateForm">Continuer</Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
            <img src="https://cdn.icon-icons.com/icons2/38/PNG/512/contactcard_contactcard_tarjetadecontacto_4815.png" width='100px' height='100px'/>
              <Typography variant="h5" gutterBottom component="div">
                Créer une visite
              </Typography>
              <Link to="/modules/visites/FicheVisiteForm">Continuer</Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
            <img src="https://cdn-icons.flaticon.com/png/512/4644/premium/4644301.png?token=exp=1648247375~hmac=becff53a5735e2e301b3a3c5a1842c4b" width='100px' height='100px'/>
              <Typography variant="h5" gutterBottom component="div">
                Rediriger un visiteur
              </Typography>
              <Link to="">Continuer</Link>
            </Item>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
