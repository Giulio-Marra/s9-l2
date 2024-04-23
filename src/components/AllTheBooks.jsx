import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class AllTheBooks extends Component {
  state = {
    selectedButtonCategory: null,
  };

  render() {
    return (
      <>
        <Container className="mt-3 mb-5">
          <Row className="mb-3 text-center">
            <h1>SELECT CATEGORY</h1>
            <Col className="d-flex justify-content-between">
              <Button
                variant="primary"
                onClick={() =>
                  this.setState({ selectedButtonCategory: fantasy })
                }
              >
                Fantasy
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  this.setState({ selectedButtonCategory: history })
                }
              >
                History
              </Button>
              <Button
                variant="success"
                onClick={() =>
                  this.setState({ selectedButtonCategory: horror })
                }
              >
                Horror
              </Button>
              <Button
                variant="danger"
                onClick={() =>
                  this.setState({ selectedButtonCategory: romance })
                }
              >
                Romance
              </Button>
              <Button
                variant="info"
                onClick={() => this.setState({ selectedButtonCategory: scifi })}
              >
                Sci-Fi
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mb-3">
            {this.state.selectedButtonCategory ? (
              this.state.selectedButtonCategory.map((book) => (
                <Col
                  key={book.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-2"
                >
                  <Card>
                    <Card.Img variant="top" src={book.img} alt={book.title} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>Price: {book.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p>No category selected</p>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  }
}
export default AllTheBooks;
