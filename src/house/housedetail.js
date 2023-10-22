import React from "react";
import { useParams } from "react-router-dom";
import housecardinfoi from "../house/housedata";
import "./housedetail.css";
import { useEffect } from "react";

const Housedetail = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {housecardinfoi
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="houseinfo">
                <div>
                  <img
                    className="housep"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="houseinfo1">
                  <h1 className="housetitle">{product.title}</h1>
                  <hr />
                  <h2 className="houseprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="housedsc">
                <h1>პროდუქტის აღწერა:</h1>
                <hr />
                <p className="">{product.desc}</p>
                <hr />
                <p className="">{product.desc1}</p>
                <p className="">{product.desc2}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Housedetail;
