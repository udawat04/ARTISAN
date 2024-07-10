// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import './Category.css'; // Import the CSS file

const Category = () => {
  const [items , setItems] = useState([])
   useEffect(() => {
     fetch("http://localhost:4000/category", {
       method: "GET",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log("first", data);
         setItems(data);
       })

       .catch((error) => console.log(error));
   }, []);

  return (
    <>
      <div
        className="p-0 position-relative  mx-5 my-3 z-index-2"
        style={{ width: "50%", left: "23%" }}
      >
        <div
          className="event py-3 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          <h5
            className="text-center text-white"
            style={{
              fontWeight: "bold",
              fontFamily: "DM Serif Display",
              fontSize: "30px",
              fontStyle: "italic",
            }}
          >
            Category
          </h5>
        </div>
      </div>
      <Container style={{ maxWidth: "1050px" }}>
        <Row className="d-flex justify-content-center">
          {items.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={4} className="mb-4">
              <Link to={`/Chikankari/${item.id}`}>
                <Card className="product-card">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="product-image"
                  />
                  <Card.Body className="product-card-body">
                    <Card.Title>{item.category}</Card.Title>
                    {/* <Card.Text>${elem.price}</Card.Text> */}
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

export default Category;
