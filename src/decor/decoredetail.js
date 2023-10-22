import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import decorecardinfoi from "./decoredata";
import "./decoredetail.css";

const Decoredetail = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {decorecardinfoi
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="decoreinfo">
                <div>
                  <img
                    className="decorep"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="decoreinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr />
                  <h2 className="decoreprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="decoredsc">
                <h1>პროდუქტის აღწერა:</h1>
                <hr />
                <p className="">{product.desc}</p>
                <p className="">{product.desc1}</p>

                <hr />
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Decoredetail;
