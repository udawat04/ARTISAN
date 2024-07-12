import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { MDBIcon } from "mdbreact"; // Import MDBIcon component
import "../../App.css"; // Import custom CSS file
import { NavDropdown } from "react-bootstrap";
import Navebar from "./Navebar"; // import Navebar component
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticate, logout } = useAuth();
  

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="navbar-top">
        <div className="marquee">
          <div className="marquee-content">
            <p>
              NOW LIVE | Get Free Cotton Tote Bag On Order Above ₹ 2100 | Free
              Shipping On All Orders Above ₹ 350
            </p>
          </div>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">➔</button>
        </div>

        <div className="logo-container">
          <img
            className="d-block logo-image"
            src={process.env.PUBLIC_URL + "/image/logo1.png"}
            alt="LOGO"
          />
        </div>

        <div>
          <Nav className="ml-auto">
            <LinkContainer to="/wishlist">
              <Nav.Link>
                <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ShoppingCart">
              <Nav.Link>
                <MDBIcon
                  className="me mdn-icon"
                  icon="cart-arrow-down"
                  size="lg"
                />
              </Nav.Link>
            </LinkContainer>
            {isAuthenticate ? (
              <Nav.Link onClick={handleLogout}>
                <MDBIcon
                  className="me-2 mdb-icon"
                  icon="sign-in-alt"
                  size="lg"
                />
              </Nav.Link>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <MDBIcon className="me-2 mdb-icon" icon="user" size="lg" />
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </div>
      </div>
      <NavDropdown.Divider />
      <Navebar />
    </>
  );
}

export default Header;
