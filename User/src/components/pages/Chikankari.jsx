// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { useParams } from "react-router-dom";

const Chikankari = ({ handleAddToWishlist }) => {

   let { id } = useParams();
    const [items, setItems] = useState([]);
   console.log(id);
   useEffect(() => {
     debugger;
     fetch(`http://localhost:4000/sub/${id}`, {
       method: "GET",
     })
       .then((res) => res.json())
       .then((data) => {
         setItems(data);
         console.log(data);
       })
       .catch((error) => console.log(error));
   }, [id]);
 
  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/image/shop-bg.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px 0", // Optional: Adjust padding for better spacing
      }}
    >
      <div className="p-3 position-relative mt-n4 mx-5 z-index-2">
        <div
          className="contact py-4 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          {items.length > 0 && (
            <h5
              className="text-center text-white"
              style={{ fontWeight: "bold", fontFamily: "DM Serif Display" }}
            >
              {items[0].category?.category}
            </h5>
          )}
        </div>
      </div>
      <Container>
        <Row>
          {items.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Link to={`/subcat/products/${item.id}`}>
                <Card>
                  <Card.Img variant="top" src={item.subimage} />
                  <Card.Body>
                    <Card.Title>{item.subcategory}</Card.Title>
                    <Card.Title>{item.category?.category}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Link to="/ProductDetail" className="btn btn-primary mx-4">
                      View details
                    </Link>
                    <Link to="/wishlist" className="btn mx-4">
                      <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
                    </Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Chikankari;
