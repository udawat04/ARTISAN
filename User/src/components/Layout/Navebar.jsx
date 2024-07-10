import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { MDBIcon } from "mdbreact";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import "../Layout/Navbar.css"; // Ensure to create and use a custom CSS file

const Navebar = () => {
  const [category, setCategory] = useState([]);

   
  useEffect(() => {
    fetch("http://localhost:4000/category/sub", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("first", data);
        setCategory(data);
      })

      .catch((error) => console.log(error));
  }, []);

   
  
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <NavDropdown.Divider />
      <Navbar
        expand="lg"
        className="custom-navbar"
        variant="light"
        style={{ fontFamily: "DM Serif Display", fontSize: "20px" }}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ background: "transparant" }}
          >
            {" "}
            <MDBIcon fas icon="align-justify" />{" "}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <LinkContainer to="/">
                <Nav.Link>
                  <b>Home</b>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/products">
                <Nav.Link>
                  <b>All Products</b>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>
                  <b>About</b>
                </Nav.Link>
              </LinkContainer>

              <div
                className="nav-links"
                onClick={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link>
                  <b>Category</b>
                </Nav.Link>
              </div>
              {showDropdown && (
                <div
                  to="/"
                  className="navbar-dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleDropdown}
                >
                  {category.map((item) => (
                    <div className="dropdown-section" key={item.id}>
                      <h3>{item.category}</h3>
                      <ul>
                        {item.subcategories.map((prod) => (
                          <LinkContainer to={`/subcat/products/${prod._id}`}>
                            <Nav.Link>
                              <li>{prod.subcategory}</li>
                            </Nav.Link>
                          </LinkContainer>
                        ))}

                        {/* <LinkContainer to="/Madhubani">
                          <Nav.Link>
                            <li>Madhubani</li>
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Ajrakh">
                          <Nav.Link>
                            <li>Ajrakh</li>
                          </Nav.Link>
                        </LinkContainer> */}
                      </ul>
                    </div>
                  ))}

                  {/* <div className="dropdown-section">
                    <h3>Religious items</h3>
                    <ul>
                      <LinkContainer to="/IncenseSticks">
                        <Nav.Link>
                          <li>Incense Sticks</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/IncenseSticks">
                        <Nav.Link>
                          <li>Essential Oil</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/IncenseSticks">
                        <Nav.Link>
                          <li>Incense cones</li>
                        </Nav.Link>
                      </LinkContainer>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <LinkContainer to="/ajrakh">
                      <Nav.Link>Home and living</Nav.Link>
                    </LinkContainer>
                  </div>
                  <div className="dropdown-section">
                    <LinkContainer to="/ajrakh">
                      <Nav.Link>Bags</Nav.Link>
                    </LinkContainer>
                  </div>
                  <div className="dropdown-section">
                    <LinkContainer to="/ajrakh">
                      <Nav.Link>Toys</Nav.Link>
                    </LinkContainer>
                  </div> */}
                  <div className="dropdown-images d-flex justify-content-center">
                    <div className="image-card">
                      <img
                        className="d-block my-4 sale-image"
                        src={process.env.PUBLIC_URL + "/image/footer/a2.png"}
                        alt="Sale 2"
                      />
                      <p>New Arrivals</p>
                      <a href="/new-arrivals">Shop now</a>
                    </div>
                    <div className="image-card">
                      <img
                        className="d-block my-4 sale-image"
                        src={process.env.PUBLIC_URL + "/image/footer/a1.png"}
                        alt="Sale 1"
                      />
                      <p>Basic Tees</p>
                      <a href="/basic-tees">Shop now</a>
                    </div>
                  </div>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navebar;
