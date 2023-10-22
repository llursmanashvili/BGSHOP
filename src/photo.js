import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bg0 from "./photobanner/2.jpeg";
import bg from "./photobanner/3.jpg";
import bg1 from "./photobanner/bg1.jpeg";
import bg2 from "./photobanner/bg2.jpeg";
import bg15 from "./photobanner/bg3.jpeg";
import bg4 from "./photobanner/bg6.jpeg";
import bg5 from "./photobanner/bg7.jpeg";
import bg6 from "./photobanner/bg8.jpeg";
import bg7 from "./photobanner/bg9.jpeg";
import bg8 from "./photobanner/bg10.jpeg";
import bg9 from "./photobanner/bg12.jpeg";
import bg10 from "./photobanner/bg13.jpeg";
import bg11 from "./photobanner/bg16.jpeg";
import bg12 from "./photobanner/bg17.jpeg";
import bg13 from "./photobanner/bg18.jpeg";
import bg14 from "./photobanner/bg19.jpeg";
import bg3 from "./photobanner/bg20.jpeg";
import "./photo.css";

function Photo() {
  const photos = [
    { id: 1, image: bg0 },
    { id: 2, image: bg },
    { id: 3, image: bg3 },
    { id: 4, image: bg4 },
    { id: 5, image: bg5 },
    { id: 6, image: bg6 },
    { id: 7, image: bg7 },
    { id: 8, image: bg8 },
    { id: 9, image: bg9 },
    { id: 10, image: bg10 },
    { id: 11, image: bg11 },
    { id: 12, image: bg12 },
    { id: 13, image: bg13 },
    { id: 14, image: bg14 },
    { id: 15, image: bg15 },
    { id: 16, image: bg1 },
    { id: 17, image: bg2 },
  ];

  return (
    <div className="photosbanner">
      <Carousel>
        {photos.map((photo, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                key={i}
                className="firstphoto"
                src={photo.image}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Photo;
