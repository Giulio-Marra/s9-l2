import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class AllTheBooks extends Component {
  state = {
    buttonPressed: true,
    selectedButtonCategory: null,
  };

  render() {
    return (
      <>
        <Container className="mt-3">
          <Row className="mb-3">
            <Col className="d-flex justify-content-between">
              <Button
                variant="primary"
                onClick={() => this.selectedButtonCategory("Fantasy")}
              >
                Fantasy
              </Button>
              <Button
                variant="secondary"
                onClick={() => this.selectedButtonCategory("History")}
              >
                History
              </Button>
              <Button
                variant="success"
                onClick={() => this.selectedButtonCategory("Horror")}
              >
                Horror
              </Button>
              <Button
                variant="danger"
                onClick={() => this.selectedButtonCategory("Romance")}
              >
                Romance
              </Button>
              <Button
                variant="info"
                onClick={() => this.selectedButtonCategory("Sci-Fi")}
              >
                Sci-Fi
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mb-3">
            {fantasy.map((book) => (
              <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-2">
                <Card>
                  <Card.Img variant="top" src={book.img} alt={book.title} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Price: {book.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default AllTheBooks;
