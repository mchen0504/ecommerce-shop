import ProductItem from "./ProductItem";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

const ProductContainer = styled.div`
  padding: 0 3%;
`;

const ProductsAll = ({ products }) => {
  return (
    <ProductContainer>
      <Container fluid style={{ padding: "5% 0 10% 0" }}>
        <Row>
          {products
            ? products.map((product) => {
                return (
                  <Col key={product._id} sm={4} md={3}>
                    <ProductItem product={product} />
                  </Col>
                );
              })
            : ""}
          {/* <Col sm={4} md={3}>
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
          </Col> */}
        </Row>
      </Container>
    </ProductContainer>
  );
};

export default ProductsAll;
