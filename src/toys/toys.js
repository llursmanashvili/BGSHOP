import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./toys.css";
import toycardinfoi from "./toydata";
import { useEffect } from "react";

function Toys() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="toy1">
      {toycardinfoi.map((toy, i) => {
        return (
          <Link key={i} to={`/toy/${toy.link}`}>
            <Card className="toy2">
              <CardActionArea>
                <CardMedia
                  className="toy3"
                  component="img"
                  image={toy.image}
                  alt="headset"
                />
                <CardContent>
                  <Typography>{toy.title}</Typography>
                  <Typography className="toyprice">{toy.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
export default Toys;
