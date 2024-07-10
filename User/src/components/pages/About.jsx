import React from "react";
// import { Data } from "../../context/DataProvider";
import { Accordion, Container, Row, Col } from "react-bootstrap";

const About = () => {
  const sectionStyle = {
    padding: "2rem 0",
  };

  const headingStyle = {
    fontWeight: "bold",
    borderBottom: "1px solid #ddd",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div className="container mt-5">
      <div style={{ textAlign: "center" }}>
        <h1>
          <b>About Artisan</b>
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="underline"
            src={process.env.PUBLIC_URL + "/image/title-underline-2.png"}
            alt="LOGO"
          />
        </div>
      </div>

      <p className="lead text-center">
        Artisan is an E-commerce platform dedicated to empowering local vendors
        in India by helping them sell their products online. Committed to
        providing a high-quality shopping experience, Artisan connects customers
        with unique, handcrafted goods, ensuring satisfaction for both buyers
        and sellers.
      </p>
      <div className="row">
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <h2>
            <b>Our Mission</b>
          </h2>
          <p>
            Our mission is centered around providing users with a convenient and
            reliable platform to access a diverse range of high-quality, locally
            crafted products from Indian vendors.
          </p>
        </div>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <h2>
            <b>Our Values</b>
          </h2>
          <ul>
            <li>Transparency</li>
            <li>Reliability</li>
            <li>Efficiency</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>
          We prioritize transparency, reliability, and efficiency, continuously
          striving to exceed customer expectations at every opportunity.
        </p>
      </div>

      <section style={sectionStyle}>
        <Container>
          <Row className="my-5">
            <Col md={6} className="mx-auto text-center">
              <h2>
                <b>Frequently Asked Questions</b>
              </h2>
              <p>
                A lot of people don&#39;t appreciate the moment until it’s
                passed. I&#39;m not trying my hardest, and I&#39;m not trying to
                do
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="mx-auto">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="mb-3">
                  <h5 className="accordion-header" style={headingStyle}>
                    <Accordion.Button as="div" className="accordion-button">
                      How do I order?
                    </Accordion.Button>
                  </h5>
                  <Accordion.Body className="text-sm opacity-8">
                    We’re not always in the position that we want to be at.
                    We’re constantly growing. We’re constantly making mistakes.
                    We’re constantly trying to express ourselves and actualize
                    our dreams. If you have the opportunity to play this game of
                    life you need to appreciate every moment. A lot of people
                    don’t appreciate the moment until it’s passed.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-3">
                  <h5 className="accordion-header" style={headingStyle}>
                    <Accordion.Button as="div" className="accordion-button">
                      How can I make the payment?
                    </Accordion.Button>
                  </h5>
                  <Accordion.Body className="text-sm opacity-8">
                    It really matters and then like it really doesn’t matter.
                    What matters is the people who are sparked by it. And the
                    people who are like offended by it, it doesn’t matter.
                    Because it&#39;s about motivating the doers. Because I’m
                    here to follow my dreams and inspire other people to follow
                    their dreams, too.
                    <br />
                    We’re not always in the position that we want to be at.
                    We’re constantly growing. We’re constantly making mistakes.
                    We’re constantly trying to express ourselves and actualize
                    our dreams. If you have the opportunity to play this game of
                    life you need to appreciate every moment. A lot of people
                    don’t appreciate the moment until it’s passed.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-3">
                  <h5 className="accordion-header" style={headingStyle}>
                    <Accordion.Button as="div" className="accordion-button">
                      How much time does it take to receive the order?
                    </Accordion.Button>
                  </h5>
                  <Accordion.Body className="text-sm opacity-8">
                    The time is now for it to be okay to be great. People in
                    this world shun people for being great. For being a bright
                    color. For standing out. But the time is now to be okay to
                    be the greatest you. Would you believe in what you believe
                    in, if you were the only one who believed it? If everything
                    I did failed - which it doesn&#39;t, it actually succeeds -
                    just the fact that I&#39;m willing to fail is an
                    inspiration. People are so scared to lose that they
                    don&#39;t even try. Like, one thing people can&#39;t say is
                    that I&#39;m not trying, and I&#39;m not trying my hardest,
                    and I&#39;m not trying to do the best way I know how.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-3">
                  <h5 className="accordion-header" style={headingStyle}>
                    <Accordion.Button as="div" className="accordion-button">
                      Can I resell the products?
                    </Accordion.Button>
                  </h5>
                  <Accordion.Body className="text-sm opacity-8">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They&#39;re slowed down by their perception
                    of themselves. If you&#39;re taught you can’t do anything,
                    you won’t do anything. I was taught I could do everything.
                    <br />
                    <br />
                    If everything I did failed - which it doesn&#39;t, it
                    actually succeeds - just the fact that I&#39;m willing to
                    fail is an inspiration. People are so scared to lose that
                    they don&#39;t even try. Like, one thing people can&#39;t
                    say is that I&#39;m not trying, and I&#39;m not trying my
                    hardest, and I&#39;m not trying to do the best way I know
                    how.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-3">
                  <h5 className="accordion-header" style={headingStyle}>
                    <Accordion.Button as="div" className="accordion-button">
                      Where do I find the shipping details?
                    </Accordion.Button>
                  </h5>
                  <Accordion.Body className="text-sm opacity-8">
                    There’s nothing I really wanted to do in life that I wasn’t
                    able to get good at. That’s my skill. I’m not really
                    specifically talented at anything except for the ability to
                    learn. That’s what I do. That’s what I’m here for. Don’t be
                    afraid to be wrong because you can’t learn anything from a
                    compliment. I always felt like I could do anything. That’s
                    the main thing people are controlled by! Thoughts- their
                    perception of themselves! They&#39;re slowed down by their
                    perception of themselves. If you&#39;re taught you can’t do
                    anything, you won’t do anything. I was taught I could do
                    everything.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
