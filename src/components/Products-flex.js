import ProductItem from "./ProductItem";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

const ProductContainer = styled.div`
  margin: 0 3%;
`;

const ProductsAll = () => {
  return (
    <ProductContainer>
      <Container fluid style={{padding: "5% 3% 10% 3%"}}>
        <Row>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
          <Col sm={4} md={3}>
            <ProductItem />
          </Col>
        </Row>
      </Container>
    </ProductContainer>
  );
};


export default ProductsAll;
