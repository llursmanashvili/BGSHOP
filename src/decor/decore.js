import React from "react";
import "./decore.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import decorecardinfoi from "./decoredata";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Decore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="decor3">
      {decorecardinfoi.map((decore, i) => {
        return (
          <Link key={i} to={`/decor/${decore.link}`}>
            <Card className="decor2">
              <CardActionArea>
                <CardMedia
                  className="decor1"
                  component="img"
                  image={decore.image}
                  alt="headest"
                />
                <CardContent>
                  <Typography>{decore.title}</Typography>
                  <Typography className="decoreprice">
                    {decore.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default Decore;
