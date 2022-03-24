import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import '@/modules/home/Dashboard.css';

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
    <Box className="interfaceui"  sx={{ width: 1 }} paddingTop="50px" paddingBottom="32px">
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
        <Box gridColumn="span 4">
          <Item>
            <Avatar>GV</Avatar>
            <Typography noWrap>Edition d'une fiche visiteur et d'une fiche visite</Typography>
            <Button
          variant="contained"
          color="success"
          size="large"
          href="./modules/visites/Visiteur"
        >
          Gestion des visiteurs
        </Button>
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
            <Avatar>GC</Avatar>
            <Typography noWrap>Reception, Edition et transfert de courier</Typography>
            <Button variant="contained" color="primary" size="large" href="">
          Gestion du courier
        </Button>
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
          <Avatar>GA</Avatar>
          <Typography noWrap>Ajout, modification et suppression des adhérents</Typography>
          <Button variant="contained" color="warning" size="large" href="">
          Gestion des adhérents
        </Button>
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
          <Avatar>I</Avatar>
          <Typography noWrap>Consulter les Indicateurs de Performances</Typography>
          <Button variant="contained" color="info" size="large" href="">
          Indicateurs Performances
        </Button>
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
