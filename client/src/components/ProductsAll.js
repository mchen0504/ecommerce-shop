import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductItem from "./ProductItem";

const ProductsAll = ({ products, type }) => {
  return (
    <Container fluid style={{ padding: "5% 0 10% 0" }}>
      <Row>
        {products.map((product) => {
          return (
            <Col
              key={type === "home" ? product.id : product._id}
              xs={6}
              sm={5.5}
              md={3}
            >
              <ProductItem product={product} type={type} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductsAll;
