import React from "react";
import { useParams } from "react-router-dom";
import housecardinfoi from "../house/housedata";
import "./housedetail.css";
import { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

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
                <MDBAccordion initialActive={1}>
                  <MDBAccordionItem
                    collapseId={0}
                    headerTitle="პროდუქტის აღწერა"
                  >
                    {product.desc}
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Housedetail;
