import "./Banner.css";
import { Typography } from "@mui/material";
export default function Banner() {
  return (
    <div className="lmj-banner">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        component="div"
      >
        Application de Gestion Intégrée
      </Typography>
    </div>
  );
}
