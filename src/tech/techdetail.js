import React from "react";
import { useParams } from "react-router-dom";
import "./techdetail.css";
import techcardinfoi from "./techdata";
import { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

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
export default Techdetail;
