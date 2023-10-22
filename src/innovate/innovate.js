import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./innovate.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import innovatecardinfo from "./innovatedata";

function Innovate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="innovate">
      {innovatecardinfo.map((innovate, i) => {
        return (
          <Link key={i} to={`/innovate/${innovate.link}`}>
            <Card className="innovate1">
              <CardActionArea>
                <CardMedia
                  className="innovatep"
                  component="img"
                  image={innovate.image}
                  alt="headest"
                />
                <CardContent>
                  <Typography>{innovate.title}</Typography>
                  <Typography className="innovateprice">
                    {innovate.price}
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

export default Innovate;
