import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { categoryItems } from "../../homeData";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container fluid style={{ padding: "7% 3%" }}>
      <Row>
        {categoryItems.map((item) => {
          return (
            <Col key={item.id} sm={6} md={3}>
              <CategoryItem item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Categories;
