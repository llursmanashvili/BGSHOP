import React from "react";
import { useParams } from "react-router-dom";
import innovatecardinfo from "./innovatedata";
import "./innovatedetail.css";
import { useEffect } from "react";

const Innovatedetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { link } = useParams();

  return (
    <>
      {innovatecardinfo
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="innovateinfo">
                <div>
                  <img
                    className="innovatepi"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="innovateinfo1">
                  <h1 className="innovatetitle">{product.title}</h1>
                  <hr />
                  <h2 className="innovateprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="innovatedsc">
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

export default Innovatedetail;
