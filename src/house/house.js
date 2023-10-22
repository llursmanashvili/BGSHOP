import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./house.css";
// import house2 from "./imgshouse/9.jpg";
import { Link } from "react-router-dom";
import housecardinfoi from "./housedata";
import { useEffect } from "react";
// import video1 from "./video.mp4";

function House() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cards3">
      {housecardinfoi.map((house, i) => {
        return (
          <Link key={i} to={`/house/${house.link}`}>
            <Card className="cards4">
              <CardActionArea>
                <CardMedia
                  className="photo2"
                  component="img"
                  image={house.image}
                  alt="headest"
                />
                <CardContent>
                  <Typography>{house.title}</Typography>
                  <Typography className="houseprice">{house.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default House;
