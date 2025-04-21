import React from "react";
import professors from "./data/data2.json";
import { Card, Col, Row } from "react-bootstrap";

const ThankYouProfessors = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5">Thank You, Professors!</h1>
      <Row style={{ justifyContent: "space-around" }}>
        {professors.map((prof, index) => (
          <Col className="py-3" key={index} sm={12} md={6} lg={4} xl={3}>
            <Card className="itemCard" style={{ width: "19rem" }}>
              <Card.Img
                style={{ maxHeight: "250px", aspectRatio: "initial" }}
                variant="top"
                src={require(`./img/${prof.image}`)}
                alt={prof.name}
              />
              <Card.Body>
                <Card.Title>Dr. {prof.name}</Card.Title>
                <Card.Text>
                  <b>
                    <i>{prof.title}</i>
                  </b>{" "}
                  <br />
                  {prof.message}
                  <hr />
                  — With gratitude,
                  <br />
                  Parth Trivedi <br /> CE21B024
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ThankYouProfessors;
