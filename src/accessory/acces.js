import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";
import "./acces.css";
import accescardinfoi from "./accesdata";
import { useEffect } from "react";

function Acces() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="acce3">
      {accescardinfoi.map((acces, i) => {
        return (
          <Link key={i} to={`/acces/${acces.link}`}>
            <Card className="acce2">
              <CardActionArea>
                <CardMedia
                  className="acce1"
                  component="img"
                  image={acces.image}
                  alt="headest"
                />
                <CardContent>
                  <Typography>{acces.title}</Typography>
                  <Typography className="accesprice">{acces.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default Acces;
