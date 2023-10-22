import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <MDBFooter className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-center p-4  border-bottom">
          <div className="me-4 d-none d-lg-block">
            <span>ეწვიეთ ჩვენს სოციალურ ქსელებს:</span>
          </div>

          <div className="socialmedia">
            <a
              href="https://www.facebook.com/BidzinaGaluashvili"
              className="me-4 text-reset"
            >
              <MDBIcon color="light" fab icon="facebook-f" />
            </a>
            <a
              href="https://www.tiktok.com/@bidzinagaluashvili"
              className="me-4 text-reset"
            >
              <MDBIcon color="light" fab icon="tiktok" />
            </a>
            <a
              href="https://www.instagram.com/bidzinagaluashvili/"
              className="me-4 text-reset"
            >
              <MDBIcon color="light" fab icon="instagram" />
            </a>
            <a
              href="https://goo.gl/maps/Ws3VkjcTxyfzVYsn9"
              className="me-4 text-reset "
            >
              <MDBIcon color="light" fas icon="map-marked-alt" />
            </a>
          </div>
        </section>

        <section className="footersfooter">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  BG-ყველაფერი ერთ სივრცეში
                </h6>
                <p className="bginfo">
                  ჰიპერმარკეტი "BG-ყველაფერი ერთ სივრცეში" გთავაზობთ
                  ტექნიკის,აქსესუარების,საყოფაცხოვრებო ნივთების,დეკორაციების და
                  სხვა მრავალი პროდუქტის ფართო ასორტიმენტს.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">პროდუქცია</h6>
                <Link to="/tech">
                  <p>
                    <a className="text-reset">ტექნიკა</a>
                  </p>
                </Link>
                <Link to="/house">
                  <p>
                    <a className="text-reset">საყოფაცხოვრებო ნივთები</a>
                  </p>
                </Link>
                <Link to="/plate">
                  <p>
                    <a className="text-reset">ჭუჭრელი</a>
                  </p>
                </Link>
                <Link to="/decor">
                  <p>
                    <a className="text-reset">დეკორაციები</a>
                  </p>
                </Link>
                <Link to="/acces">
                  <p>
                    <a className="text-reset">აქსესუარები</a>
                  </p>
                </Link>
                <Link to="/toy">
                  <p>
                    <a className="text-reset">სათამაშოები</a>
                  </p>
                </Link>
                <Link to="/innovate">
                  <p>
                    <a className="text-reset">ინოვაციური</a>
                  </p>
                </Link>
                <Link to="/mobile">
                  <p>
                    <a className="text-reset">მობილურის აქსესუარები</a>
                  </p>
                </Link>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">კონტაქტი</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  თბილისი,დაბა წყნეთი,რუსთაველის #40
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  BGstore@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  995 557 61 11 44
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <p className="text-reset fw-bold">BGshop.Ge</p>
        </div>
      </MDBFooter>
    </div>
  );
}
