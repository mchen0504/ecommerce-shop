import { useState } from "react";
import styled from "styled-components";
import ProductList from "./ProductList";

const Top = styled.div`
  display: flex;
  padding: 0 3% 0.5rem 3%;
  justify-content: space-between;
  align-items: center;
`;

const Select = styled.select`
  font-size: 0.8rem;
`;

const Option = styled.option``;

const ShoppingMain = ({ category, filters }) => {
  const [sort, setSort] = useState();

  return (
    <div>
      <Top>
        <h1 styled={{ fontSize: "1.1rem" }}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
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
      <ProductList category={category} filters={filters} sort={sort} />
    </div>
  );
};

export default ShoppingMain;
