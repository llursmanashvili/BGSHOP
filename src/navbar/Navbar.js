import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useState } from "react";
import item from "./f.ico";
import { Link } from "react-router-dom";
import "./Navbars.css";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" bgColor="primary">
      <MDBContainer fluid>
        <Link to="/">
          <MDBNavbarBrand>
            <img src={item} alt="logo" />
          </MDBNavbarBrand>
        </Link>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 ">
            <Link to="/contact">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  კონტაქტი
                </MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/aboutus">
              <MDBNavbarItem>
                <MDBNavbarLink>ჩვენ შესახებ</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  პროდუქცია
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <Link to="/tech">
                    <MDBDropdownItem link>ტექნიკა</MDBDropdownItem>
                  </Link>
                  <Link to="/house">
                    <MDBDropdownItem link>საყოფაცხოვრებო</MDBDropdownItem>
                  </Link>
                  <Link to="/plate">
                    <MDBDropdownItem link>ჭურჭელი</MDBDropdownItem>
                  </Link>
                  <Link to="/decor">
                    <MDBDropdownItem link>დეკორი</MDBDropdownItem>
                  </Link>
                  <Link to="/acces">
                    <MDBDropdownItem link>აქსესუარები</MDBDropdownItem>
                  </Link>
                  <Link to="/toy">
                    <MDBDropdownItem link>სათამაშოები</MDBDropdownItem>
                  </Link>
                  <Link to="/innovate">
                    <MDBDropdownItem link>ინოვაციური</MDBDropdownItem>
                  </Link>
                  <Link to="/mobile">
                    <MDBDropdownItem link>
                      მობილურის აქსესუარები
                    </MDBDropdownItem>
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
