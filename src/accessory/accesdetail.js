import React from "react";
import { useParams } from "react-router-dom";
import accescardinfoi from "./accesdata";
import "./accesdetail.css";
import { useEffect } from "react";

const Accesdetail = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {accescardinfoi
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="accesinfo">
                <div>
                  <img
                    className="accesp"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="accesinfo1">
                  <h1 className="accestitle">{product.title}</h1>
                  <hr />
                  <h2 className="accesprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="accesdsc">
                <h1>პროდუქტის აღწერა:</h1>
                <hr />
                <p>{product.decs2}</p>

                <p>{product.desc}</p>
                <p>{product.desc1}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Accesdetail;
