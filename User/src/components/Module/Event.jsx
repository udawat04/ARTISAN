// src/components/Products.jsx
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const Event = ({ handleAddToWishlist }) => {
  const items = [
    {
      id: 1,
      product_name: "Ajrakh Sarees",
      price: 95555,
      image: "/image/Ajrakh/k6.png",
    },
    {
      id: 2,
      product_name: "Madhubani Sarees",
      price: 99999,
      image: "/image/madhubani/m4.png",
    },
    {
      id: 3,
      product_name: "Chikankari Sarees",
      price: 955,
      image: "/image/chikankari/ck3.png",
    },
    {
      id: 3,
      product_name: "PHOOL BADRINATH CHANDAN INCENSE STICKS",
      price: 300,
      image: "/image/sticks/s1.png",
    },
    {
      id: 3,
      product_name: "PHOOL BADRINATH KESAR CHANDAN INCENSE STICKS",
      price: 825,
      image: "/image/sticks/s2.png",
    },
    {
      id: 3,
      product_name: "PHOOL AYODHYA SOUMYA CHANDAN INCENSE STICKS",
      price: 955,
      image: "/image/sticks/s3.png",
    },
    
  ];

  return (
    <>
      <div className="p-0 position-relative  mx-5 my-3 z-index-2" style={{width:"50%", left:"23%"}}>
        <div
          className="event py-3 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          <h5 className="text-center text-white" style={{ fontWeight: "bold", fontFamily: "DM Serif Display", fontSize: "30px", fontStyle: "italic" }}>
            Popular Product
          </h5>
        </div>
      </div>
      <Container style={{maxWidth: "1050px"}}>
        <Row className="d-flex justify-content-center">
          {items.map((elem) => (
            <Col key={elem.id} sm={12} md={6} lg={4} xl={4} className="mb-4">
              <Link to="/ProductDetail">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + elem.image}
                />
                <Card.Body>
                  <Card.Title>{elem.product_name}</Card.Title>
                  <Card.Text>${elem.price}</Card.Text>
                  <Link to="/ShoppingCart" className="btn btn-warning mx-2">
                  <MDBIcon fas icon="cart-plus" />
                  </Link>
                  <Link to="/wishlist" class="btn mx-1">
                    <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
                  </Link>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Event;
