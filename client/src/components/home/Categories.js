import CategoryItem from "./CategoryItem";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Categories = () => {
  return (
    <Container fluid style={{padding: "10% 3%"}}>
      <Row>
        <Col xs={12} sm={6} md={3}><CategoryItem/></Col>
        <Col xs={12} sm={6} md={3}><CategoryItem/></Col>
        <Col xs={12} sm={6} md={3}><CategoryItem/></Col>
        <Col xs={12} sm={6} md={3}><CategoryItem/></Col>
      </Row>
    </Container>
  );
};

export default Categories;
