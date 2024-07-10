import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { useAuth } from "../../context/AuthContext";

const Products = ({ handleAddToWishlist }) => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));

    fetch(`http://localhost:4000/getCartItems/${user._id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((error) => console.log(error));
  }, [user._id]);

  const handleAddToCart = (productId) => {
    fetch("http://localhost:4000/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user,
        productId,
        quantity: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart([...cart, data]);
      })
      .catch((error) => console.log(error));
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.productId._id === productId);
  };

  return (
    <div>
      <Container>
        <Row>
          {products.map((item) => (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/image/toys/t1.png" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Card.Text>Category: {item.category?.category}</Card.Text>
                  {isProductInCart(item._id) ? (
                    <Button className="btn btn-success mx-2">
                      <MDBIcon fas icon="check" /> In Cart
                    </Button>
                  ) : (
                    <Link to="/ShoppingCart">
                      <Button
                        onClick={() => handleAddToCart(item._id)}
                        className="btn btn-warning mx-2"
                      >
                        <MDBIcon fas icon="cart-plus" /> Add to Cart
                      </Button>
                    </Link>
                  )}
                  <Link to="/wishlist" className="btn mx-1">
                    <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
