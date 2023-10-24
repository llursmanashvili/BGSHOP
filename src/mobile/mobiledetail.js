import React from "react";
import { useParams } from "react-router-dom";
import mobilecardinfo from "./mobiledata";
import "./mobiledetail.css";
import { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

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

export default Mobiledetail;
