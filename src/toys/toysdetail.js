import React from "react";
import { useParams } from "react-router-dom";
import "./toysdetail.css";
import toycardinfoi from "./toydata";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useEffect } from "react";

const Toysdetail = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {toycardinfoi
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="toyinfo">
                <div>
                  <img
                    className="toyp"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="toyinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr />
                  <h2 className="toyprice">ფასი:{product.price}</h2>
                  <hr />
                </div>
              </div>
              <div className="toydesc">
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
export default Toysdetail;
