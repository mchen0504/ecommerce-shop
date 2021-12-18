import styled from "styled-components";
import ProductsAll from "../home/Products-flex";

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  padding: 0 3% 0.5rem 3%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.1rem;
`;

const Select = styled.select`
    font-size: 0.8rem;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Top>
        <Title>Tops</Title>
        <Select name="sortby" id="sortby">
          <Option disabled selected>
            Sort by
          </Option>
          <Option value="best-sellers">Best Sellers</Option>
          <Option value="price-desc">Price - High to Low</Option>
          <Option value="price-asc">Price - Low to High</Option>
        </Select>
      </Top>
      <ProductsAll />
    </Container>
  );
};

export default ProductList;
