import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./card.css";
import decoration from "./imgscard/decoration.jpg";
import tech from "./imgscard/tech.jpg";
import acces from "./imgscard/accesory.jpg";
import house from "./imgscard/house.jpg";
import plate from "./imgscard/plate.png";
import toy from "./imgscard/toy.jpg";
import innovate from "./imgscard/innovate.jpg";
import mobile from "./imgscard/mobile.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Cards() {
  const cardinfo = [
    {
      image: tech,
      title: "ტექნიკა",
      link: "/tech",
    },
    {
      image: innovate,
      title: "ინოვაციური",
      link: "/innovate",
    },
    {
      image: mobile,
      title: "მობილურის აქსესუარები",
      link: "/mobile",
    },
    {
      image: house,
      title: "საყოფაცხოვრებო",
      link: "/house",
    },
    {
      image: plate,
      title: "ჭურჭელი",
      link: "/plate",
    },
    {
      image: decoration,
      title: "დეკორი",
      link: "/decor",
    },
    {
      image: acces,
      title: "აქსესუარები",
      link: "/acces",
    },
    {
      image: toy,
      title: "სათამაშოები",
      link: "/toy",
    },
  ];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="cards">
      {loading ? (
        <ClipLoader
          color="#f2ff00"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="cards1">
          {cardinfo.map((card, index) => {
            return (
              <Link key={index} to={card.link}>
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      className="photo"
                      component="img"
                      image={card.image}
                      alt="photo"
                    />
                    <CardContent>
                      <Typography>{card.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
