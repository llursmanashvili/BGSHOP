import React from "react";
import { useParams } from "react-router-dom";
import mobilecardinfo from "./mobiledata";
import "./mobiledetail.css";
import { useEffect } from "react";

const Mobiledetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { link } = useParams();

  return (
    <>
      {mobilecardinfo
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="mobileinfo">
                <div>
                  <img
                    className="mobilepi"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="mobileinfo1">
                  <h1 className="mobiletitle">{product.title}</h1>
                  <hr />
                  <h2 className="mobileprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="mobiledsc">
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

export default Mobiledetail;
