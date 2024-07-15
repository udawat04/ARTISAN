import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MDBIcon } from "mdb-react-ui-kit";

// const images = [
//   "/image/sticks/s1.png", // Main image
//   "/image/sticks/s2.png", //Thumbnail 1
//   "/image/sticks/s4.png", //Thumbnail 2
//   "/image/sticks/s3.png", //Thumbnail 3
//   "/image/sticks/s5.png", //Thumbnail 4
// ];


 
const ProductDetail = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage,setSelectedImage] =useState("");
   const { user } = useAuth();
   const [cart, setCart] = useState([]);
let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/product/call/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
   
      
        if (data.length > 0) {
          setSelectedCategory(data[0]); // Select the first category by default
          setSelectedImage(data[0].prodimage);
        }
        console.log("Categories:", data);
      })
      .catch((error) => console.log(error));


  }, [id]);

  const handleThumbnailClick =(image)=>{
    setSelectedImage(image)
  }

  useEffect(() => {
   if (user && user?._id) {
     fetch(`http://localhost:4000/getCartItems/${user._id}`, {
       method: "GET",
     })
       .then((res) => res.json())
       .then((data) => setCart(data))
       .catch((error) => console.log(error));
   }
  },[user])

   const handleAddToCart = (productId) => {
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
   };

   const isProductInCart = (productId) => {
     return cart.some((item) => item.productId._id === productId);
   };
  
  return (
    <Container className="py-5">
      <div className="p-0 position-relative mt-n4 mx-5 z-index-2">
        <div
          className="contact py-4 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          <h5
            className="text-center text-white"
            style={{ fontWeight: "bold", fontFamily: "DM Serif Display" }}
          >
            Product Details
          </h5>
        </div>
      </div>
      <Row className="py-5">
        <Col lg={6} className="d-flex align-items-center">
          <div className="product-page">
            <div className="product-image-container">
              <div className="product-image">
                <div className="zoom-container">
                  {selectedCategory && (
                    <img
                      src={`http://localhost:4000${selectedImage}`}
                      alt="Product"
                    />
                  )}
                </div>
              </div>
              <div className="thumbnail-gallery">
                {selectedCategory && (
                  <>
                    <img
                      src={`http://localhost:4000${selectedCategory.prodimage}`}
                      alt="Main Thumbnail"
                      onClick={() =>
                        handleThumbnailClick(selectedCategory.prodimage)
                      }
                      className={
                        selectedCategory.prodimage === selectedImage
                          ? "active"
                          : ""
                      }
                    />
                    {selectedCategory.slider.map((image, index) => (
                      <img
                        key={index}
                        src={`http://localhost:4000${image}`}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleThumbnailClick(image)}
                        className={image === selectedImage ? "active" : ""}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="product-details"></div>
          </div>
        </Col>
        <Col lg={6}>
          <Card className="border-0">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">PHOOL</Card.Subtitle>
              <Card.Title className="mb-3">
                {categories.length > 0 && categories[0].name}
                <br />
              </Card.Title>
              <Row className="mb-4">
                <Col>
                  <div className="d-flex align-items-center">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning me-1"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.181-4.411c.197-.397.73-.397.927 0l2.181 4.411 4.898.696c.441.063.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                    <svg
                      fill="currentColor"
                      className="bi bi-star text-warning"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.181-4.411c.197-.397.73-.397.927 0l2.181 4.411 4.898.696c.441.063.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <span className="ms-2 text-muted">4 Reviews</span>
                  </div>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Button variant="link" className="text-muted">
                    <i className="bi bi-facebook"></i>
                  </Button>
                  <Button variant="link" className="text-muted ms-2">
                    <i className="bi bi-twitter"></i>
                  </Button>
                  <Button variant="link" className="text-muted ms-2">
                    <i className="bi bi-instagram"></i>
                  </Button>
                </Col>
              </Row>
              <Card.Text>
                Embark on a spiritual journey with the Phool Ayodhya Soumya
                Chandan Incense Sticks.
                <br />
                ❀ Handcrafted using the sacred flowers from temples in Ayodhya
                <br />
                ❋ Made using a blend of flowers, 100% pure extracts of Chandan,
                and traditional herbs
                <br />
                ❈ The pack consists of 40 units
                <br />
                ❂ Long burning time of 40-45 minutes per stick
                <br />
                ❁ The fragrance is rich and aromatic with warm undertones of
                amber and wood
                <br />
                ❃ The authentic scent of Chandan helps in refreshing and
                energizing the mind and body
                <br />
                ✼ These sticks are ideal for your daily rituals and prayers
                <br />
              </Card.Text>

              <Row className="align-items-center">
                <Col>
                  <h4 className="mb-0">
                    ${categories.length > 0 && categories[0].price}
                  </h4>
                </Col>
                <Col className="d-flex justify-content-end">
                  {categories.length > 0 &&
                  isProductInCart(categories[0]._id) ? (
                    <Button className="btn btn-success mx-2">
                      <MDBIcon fas icon="check" /> In Cart
                    </Button>
                  ) : (
                    <Link to="/ShoppingCart">
                      <Button
                        onClick={() => handleAddToCart(categories[0]._id)}
                        className="btn btn-warning mx-2"
                      >
                        <MDBIcon fas icon="cart-plus" /> Add to Cart
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="outline-secondary"
                    className="rounded-circle p-0"
                  >
                    <i className="bi bi-heart"></i>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
