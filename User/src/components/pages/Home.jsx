import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Event from "../Module/Event";
import "../../App.css"; // Import the corrected CSS file
import Category from "../Module/Category";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="container-fluid container-fluid-hero">
        <Container>
          <Row>
            <Col className="my-5" xs={12} md={6}>
              <h5 className="hero-text-yellow">ARTISAN</h5>
              <h1 className="hero-text-black">
                <b>
                  The <span className="hero-span">Craftsmenship</span> of Hands
                </b>
              </h1>
              <p className="hero-white">
                Discover unique, handcrafted products from local vendors across
                India. At Artisan, our mission is to help local vendors showcase
                and sell their products online, connecting them with customers
                who appreciate the artistry and quality of their work.
                <br />
                Find exquisite crafts, handmade goods, and unique items crafted
                with passion and skill by talented artisans. Explore our
                platform to support local vendors and discover one-of-a-kind
                products.
              </p>
            </Col>
            <Col xs={6} md={6}>
              <Col lg={8} className="gallery" style={{ width: "100%" }}>
                <Row className="mt-5">
                  <Col lg={3} xs={6}>
                    <img
                      className="w-100 border-radius-lg shadow mt-0 mt-lg-7"
                      style={{ borderRadius: "1rem" }}
                      src={process.env.PUBLIC_URL + "/image/footer/g10.png"}
                      alt="flower-1"
                      loading="lazy"
                    />
                  </Col>
                  <Col lg={3} xs={6}>
                    <img
                      className="w-100 border-radius-lg shadow"
                      style={{ borderRadius: "1rem" }}
                      src={process.env.PUBLIC_URL + "/image/footer/g4.png"}
                      alt="flower-2"
                      loading="lazy"
                    />
                    <img
                      className="w-100 border-radius-lg shadow mt-4"
                      style={{ borderRadius: "1rem" }}
                      src={process.env.PUBLIC_URL + "/image/footer/g9.png"}
                      alt="flower-3"
                      loading="lazy"
                    />
                  </Col>
                  <Col lg={3} xs={6} className="mb-3">
                    <img
                      className="w-100 border-radius-lg shadow mt-0 mt-lg-5"
                      style={{ borderRadius: "1rem" }}
                      src={process.env.PUBLIC_URL + "/image/footer/g3.png"}
                      alt="flower-4"
                      loading="lazy"
                    />
                    <img
                      className="w-100 border-radius-lg shadow mt-4"
                      style={{ borderRadius: "1rem" }}
                      src={process.env.PUBLIC_URL + "/image/footer/g5.png"}
                      alt="flower-5"
                      loading="lazy"
                    />
                  </Col>
                  <Col lg={3} xs={6}>
                    <img
                      className="w-100 border-radius-lg shadow mt-3"
                      style={{ borderRadius: "1rem" }}
                      src={process.env.PUBLIC_URL + "/image/footer/g6.png"}
                      alt="flower-6"
                      loading="lazy"
                    />
                    <img
                      className="w-100 border-radius-lg shadow mt-4"
                      style={{ borderRadius: "1rem" }}
                      src={process.env.PUBLIC_URL + "/image/footer/g7.png"}
                      alt="flower-7"
                      loading="lazy"
                    />
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-md">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 my-3 carousel-image"
              src={process.env.PUBLIC_URL + "/image/Carousel/c1.png"}
              alt="First Slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 my-3 carousel-image"
              src={process.env.PUBLIC_URL + "/image/Carousel/c2.png"}
              alt="Second Slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 my-3 carousel-image"
              src={process.env.PUBLIC_URL + "/image/Carousel/c3.png"}
              alt="Third Slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 my-3 carousel-image"
              src={process.env.PUBLIC_URL + "/image/Carousel/c4.png"}
              alt="Third Slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div
        className="LOGO d-flex justify-content-center"
        style={{ backgroundColor: "wheat", borderRadius: "1rem" }}
      >
        <img
          className="LOGO d-block "
          style={{ width: "500px", marginTop: "-90px", marginBottom: "-90px" }}
          src={process.env.PUBLIC_URL + "/image/logo2.png"}
          alt="LOGO"
        />
      </div>

      <div>
        {/* <Event /> */}
        <Category/>
      </div>

      <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 my-3 carousel-image"
              src={process.env.PUBLIC_URL + "/image/Carousel/c7.png"}
              alt="First Slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 my-3 carousel-image"
              src={process.env.PUBLIC_URL + "/image/Carousel/c8.png"}
              alt="Second Slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 my-3 carousel-image"
              src={process.env.PUBLIC_URL + "/image/Carousel/c9.png"}
              alt="Third Slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="Rotater" style={{ paddingBottom: "31.5rem" }}>
        <Container>
          <Row className="justify-content-between py-2">
            <Col md={6} className="mx-auto">
              <div className="rotating-ad-container">
                <Card className="ad-rotate card-background mt-md-0 mt-5">
                  <div
                    className="front front-background min-height-500"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/image/footer/a1.png)`,
                      backgroundSize: "cover",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body
                      className="pt-7 text-center"
                      style={{
                        fontFamily: "DM Serif Display",
                        margin: "45px",
                        color: "black",
                        backgroundColor: "white",
                        opacity: "0.9",
                        borderRadius: "20px"
                      }}
                    >
                      <p
                        className="text-lg text text-uppercase "
                        style={{ fontSize: "50px", margin: "10%" }}
                      >
                        USP
                      </p>
                      <h4 className="text ">
                        Unique Selling Proposition for Artisan
                      </h4>
                      <p
                        className="text opacity-1"
                        style={{ fontStyle: "italic" }}
                      >
                        "Artisan empowers local vendors of India by providing a
                        dynamic E-commerce platform that bridges traditional
                        craftsmanship with modern technology. Our platform not
                        only amplifies the reach of unique, high-quality
                        products but also supports sustainable economic growth
                        for local communities. At Artisan, we bring the rich
                        heritage of Indian craftsmanship to a global audience,
                        ensuring every purchase supports a local artisan."
                      </p>
                    </Card.Body>
                  </div>
                  <div
                    className="back back-background min-height-500"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/image/footer/a1.png)`,
                      borderRadius: "15px",
                    }}
                  ></div>
                </Card>
              </div>
            </Col>

            <Col md={6} className="mx-auto">
              <div className="rotating-ad-container">
                <Card className="ad-rotate ab-background mt-md-0 mt-5">
                  <div
                    className="front front-background min-height-500"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/image/footer/a2.png)`,
                      backgroundSize: "cover",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body
                      className="pt-7 text-center"
                      style={{
                        fontFamily: "DM Serif Display",
                        color: "black",
                        margin: "54px",
                        backgroundColor: "white",
                        opacity: "0.9",
                        borderRadius: "20px",
                      }}
                    >
                      <p
                        className="text-lg text text-uppercase "
                        style={{ fontSize: "50px", margin: "10%" }}
                      >
                        Artisan
                      </p>
                      <h4 className="text">Welcome to Artisan</h4>
                      <p className="text" style={{ fontStyle: "italic" }}>
                        Artisan, where we showcase authentic Indian
                        craftsmanship by empowering local vendors. Explore a
                        curated selection of handmade treasures, from
                        traditional textiles to exquisite handicrafts, and
                        support artisans with every purchase. Celebrate India's
                        rich cultural heritage and make a positive impact on
                        local communities by shopping at Artisan.
                      </p>
                    </Card.Body>
                  </div>
                  <div
                    className="back back-background min-height-500"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/image/footer/a2.png)`,
                      borderRadius: "15px",
                    }}
                  ></div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
