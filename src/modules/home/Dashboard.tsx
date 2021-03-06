import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import "@/modules/home/Dashboard.css";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import "./Dashboard.css";

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
export default function CSSGrid() {
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/1747/1747119.png"
                width="100px"
                height="100px"
              />
              <Typography variant="h5" gutterBottom component="div">
                Gestion des visiteurs
              </Typography>

              <Link to="/modules/visites/Gestionvidash">Continuer</Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <img
                src="https://www.nicepng.com/png/full/806-8066161_download-for-free-at-icons8-meeting-people-icon.png"
                width="100px"
                height="100px"
              />
              <Typography variant="h5" gutterBottom component="div">
                Gestion des adhérents
              </Typography>

              <Link to="">Continuer</Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1982/1982945.png"
                width="100px"
                height="100px"
              />
              <Typography variant="h5" gutterBottom component="div">
                Gestion du courier
              </Typography>

              <Link to="">Continuer</Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2720/2720795.png"
                width="100px"
                height="100px"
              />
              <Typography variant="h5" gutterBottom component="div">
                Indicateurs de performance
              </Typography>

              <Link to="">Continuer</Link>
            </Item>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
