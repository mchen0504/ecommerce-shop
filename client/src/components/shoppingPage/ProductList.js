import { useState } from "react";
import styled from "styled-components";

import ProductsAll from "../Products-flex";

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

const ProductList = ({ category, filters }) => {
  const [sort, setSort] = useState();

  return (
    <Container>
      <Top>
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
        <Select
          name="sortby"
          id="sortby"
          defaultValue={"default"}
          onChange={(e) => setSort(e.target.value)}
        >
          <Option value="default" disabled>
            Sort by
          </Option>
          <Option value="newest">Newest</Option>
          <Option value="price-desc">Price - High to Low</Option>
          <Option value="price-asc">Price - Low to High</Option>
        </Select>
      </Top>
      <ProductsAll category={category} filters={filters} sort={sort} />
    </Container>
  );
};

export default ProductList;
