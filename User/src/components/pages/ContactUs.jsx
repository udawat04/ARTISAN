import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBIcon } from "mdbreact";
import { Box } from '@mui/material';

const ContactUs = () => {
  return (<>
    <section
      className="py-7 bg-cover position-relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/image/contact-bg.jpg)`,
        backgroundPosition: "center center",
      }}
    >
      <div className="mask bg-gradient-dark"></div>
      <Container className="position-relative z-index-2">
        <Row>
          <Col lg={6} className="contact" style={{fontFamily: "DM Serif Display", fontStyle: "italic", marginTop: "1px"}}>
            <h2 className="text-black ">
              <b>
                Get <span className="hero-span text-warming">in</span> Touch
              </b>
            </h2>
            <p className="text-black text-lg mb-lg-5">
              You need more information? Check what other persons are saying
              about our product. They are very happy with their purchase.
            </p>
            <Row>
                <Col>
                <div className="p-3 d-flex">
              <span
                style={{
                  background:
                    "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                <MDBIcon icon="map-marker-alt" size="3x" />
              </span>
              <div className="ms-5">
                <h5 className="text-black">Find us at the office</h5>
                <p className="text-black text-sm">
                  Department of Computer Science,
                  Informatics And Computational Sciences Programme,            
                  <br />
                  MLSU University Udaipur,
                  <br />
                  Rajasthan
                </p>
              </div>
            </div>
                </Col>

                <Col>
                <div className="p-3 d-flex">
              <span
                style={{
                  background:
                    "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                <MDBIcon fas icon="phone" size="3x" />
              </span>

              <div className="ms-5">
                <h5 className="text-black">Give us a ring</h5>
                <p className="text-black text-sm">
                  Umang, Vishnu, Sudarshan, Komal
                  <br />
                  +91 73002 28722;
                  +91 94617 70403;
                  +91 98284 10476;
                  +91 6367 220384;

                  <br />
                  Mon - Fri, 8:00-15:00
                </p>
              </div>
            </div>
                </Col>
            </Row>
            
           
          </Col>
          <Col lg={5} className="m-auto">
            <Card className="card-contact card-raised">
              <Form id="contact-form1" method="post">
                <div className="p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div
                    className="contact py-3 pe-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(195deg, #ec407a, #D4B04C",
                      boxShadow:
                        "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
                      borderRadius: ".5rem",
                    }}
                  >
                    <h5
                      className="text-center text-white"
                      style={{ fontWeight: "bold", fontFamily: "DM Serif Display" }}
                    >
                      Contact Us
                    </h5>
                  </div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={6} className="pe-2">
                      <Form.Group className="mb-4">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="ps-2">
                      <Form.Group className="mb-4">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      id="message"
                      rows="6"
                    />
                  </Form.Group>
                  <Row>
                    <Col md={6} className="text-center m-auto">
                      <Button
                        type="submit"
                        className="bg-gradient bg-warning mb-0"
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <iframe
        title="Location Map"
        width="80%"
        height="400"
        
        src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Computer%20Science%20Department%20and%20MCA%20BCA%20department+(Artisan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps tracker sport</a>
      </iframe>
    </Box>
    </>
  );
};

export default ContactUs;
