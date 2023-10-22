import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Tech.css";
import techcardinfoi from "./techdata";
import { useEffect } from "react";

function Tech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cards1">
      {techcardinfoi.map((tech, i) => {
        return (
          <Link key={i} to={`/tech/${tech.link}`}>
            <Card className="cards2">
              <CardActionArea>
                <CardMedia
                  className="photo1"
                  component="img"
                  image={tech.image}
                  alt="headset"
                />
                <CardContent>
                  <Typography className="techtitle">{tech.title}</Typography>
                  <Typography className="techprice">{tech.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default Tech;
