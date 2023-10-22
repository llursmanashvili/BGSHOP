import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import platecardinfoi from "./platedata";
import "./plate.css";
import { useEffect } from "react";

function Plates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="plate">
      {platecardinfoi.map((plate, i) => {
        return (
          <Link key={i} to={`/plate/${plate.link}`}>
            <Card className="plate1">
              <CardActionArea>
                <CardMedia
                  className="plate2"
                  component="img"
                  image={plate.image}
                  alt="headset"
                />
                <CardContent>
                  <Typography>{plate.title}</Typography>
                  <Typography className="plateprice">{plate.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
export default Plates;
