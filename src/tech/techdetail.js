import React from "react";
import { useParams } from "react-router-dom";
import "./techdetail.css";
import techcardinfoi from "./techdata";
import { useEffect } from "react";

const Techdetail = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {techcardinfoi
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="techinfo">
                <div>
                  <img
                    className="techp"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="techinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr />
                  <h2 className="techprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="techdesc">
                <h1>პროდუქტის აღწერა:</h1>
                <hr />
                <p>{product.desc}</p>
                <p>{product.desc1}</p>
                <p>{product.desc2}</p>
                <p>{product.desc3}</p>
                <hr />
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Techdetail;
