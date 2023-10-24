import React from "react";
import { useParams } from "react-router-dom";
import innovatecardinfo from "./innovatedata";
import "./innovatedetail.css";
import { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

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
                <MDBAccordion initialActive={1}>
                  <MDBAccordionItem
                    collapseId={1}
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

export default Innovatedetail;
