import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./mobile.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import mobilecardinfo from "./mobiledata";

function Mobile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mobile">
      {mobilecardinfo.map((innovate, i) => {
        return (
          <Link key={i} to={`/mobile/${innovate.link}`}>
            <Card className="mobile1">
              <CardActionArea>
                <CardMedia
                  className="mobilep"
                  component="img"
                  image={innovate.image}
                  alt="headest"
                />
                <CardContent>
                  <Typography>{innovate.title}</Typography>
                  <Typography className="mobileprice">
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

export default Mobile;
