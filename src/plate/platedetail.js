import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import platecardinfoi from "./platedata";
import "./platedetail.css";

const Platedetail = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {platecardinfoi
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="plateinfo">
                <div>
                  <img
                    className="platep"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="plateinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr />
                  <h2 className="plateprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="platedsc">
                <h1>პროდუქტის აღწერა:</h1>
                <hr />
                <p className="">{product.desc}</p>
                <hr />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Platedetail;
