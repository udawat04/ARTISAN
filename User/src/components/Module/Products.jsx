import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { useAuth } from "../../context/AuthContext";

const Products = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    console.log(user, 'user');
     fetch("http://localhost:4000/products", {
       method: "GET",
     })
       .then((res) => res.json())
       .then((data) => setProducts(data))
       .catch((error) => console.log(error));
    if (user && user?._id) {
     

      fetch(`http://localhost:4000/getCartItems/${user._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCart(data))
        .catch((error) => console.log(error));

      fetch(`http://localhost:4000/getWishlist/${user._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setWishlist(data))
        .catch((error) => console.log(error));
    }
  }, [user]);

   const handleAddToCart = (productId) => {
     if (user && user._id) {
       fetch("http://localhost:4000/addToCart", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           userId: user._id,
           productId,
           quantity: 1,
         }),
       })
         .then((res) => res.json())
         .then((data) => {
           setCart([...cart, data]);
         })
         .catch((error) => console.log(error));
     }
   };

  const handleAddToWishlist = (productId) => {
    if (user && user._id) {
      fetch("http://localhost:4000/addToWishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          productId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setWishlist([...wishlist, data]);
        })
        .catch((error) => console.log(error));
    }
  };

    const handleRemoveFromWishlist = (productId) => {
      if (user && user._id) {
        fetch("http://localhost:4000/removeFromWishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
            productId,
          }),
        })
          .then((res) => res.json())
          .then(() => {
            setWishlist(
              wishlist.filter((item) => item.productId._id !== productId)
            );
          })
          .catch((error) => console.log(error));
      }
    };
  const isProductInCart = (productId) => {
    return cart.some((item) => item.productId._id === productId);
  };

  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.productId._id === productId);
  };

  return (
    <div>
      <Container>
        <Row>
          {products.map((item) => (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Link to={`/ProductDetail/${item.id}`}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:4000${item.prodimage}`}
                    style={{ height: "400px" }}
                  />
                  <Card.Body style={{ height: "250px" }}>
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
                    {isProductInWishlist(item._id) ? (
                      <Button
                        onClick={() => handleRemoveFromWishlist(item._id)}
                        className="btn mx-1 text-danger"
                      >
                        <MDBIcon
                          className="me mdn-icon"
                          fas
                          icon="heart"
                          size="lg"
                        />
                      </Button>
                    ) : (
                      <Link to="/wishlist">
                        <Button
                          onClick={() => handleAddToWishlist(item._id)}
                          className="btn mx-1 text-secondary"
                        >
                          <MDBIcon
                            className="me mdn-icon"
                            far
                            icon="heart"
                            size="lg"
                          />
                        </Button>
                      </Link>
                    )}
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

export default Products;
