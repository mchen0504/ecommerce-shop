import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductList from "./ProductList";

const Top = styled.div`
  display: flex;
  padding: 0 3% 0.5rem 3%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: start;
    padding: 0 2% 0.5rem 2%;
  }
`;

const Title = styled.h1`
  font-size: 1.1rem;
  @media (max-width: 575px) {
    font-size: 1.3rem;
    padding: 2%;
  }
`;

const FilterSort = styled.div`
  @media (max-width: 575px) {
    padding: 3% 2%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
  }
`;

const FilterButton = styled.button`
  background-color: black;
  color: white;
  border: 0.1px solid black;
  font-size: 0.9rem;
  border-radius: 3px;
  width: 45%;
  height: 2.2rem;
  @media (min-width: 576px) {
    display: none;
  }
`;

const Select = styled.select`
  font-size: 0.9rem;
  @media (max-width: 575px) {
    width: 45%;
    height: 2.2rem;
    text-align: center;
  }
`;

const ShoppingMain = ({ category, filters, setShowMobileFilters }) => {
  const [sort, setSort] = useState("default");

  useEffect(() => {
    setSort("default");
  }, [category]);

  return (
    <div>
      <Top>
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
        <FilterSort>
          <FilterButton onClick={() => setShowMobileFilters(true)}>
            Filters
          </FilterButton>
          <Select
            name="sortby"
            id="sortby"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default" disabled>
              Sort by
            </option>
            <option value="newest">Newest</option>
            <option value="price-desc">Price - High to Low</option>
            <option value="price-asc">Price - Low to High</option>
          </Select>
        </FilterSort>
      </Top>
      <ProductList category={category} filters={filters} sort={sort} />
    </div>
  );
};

export default ShoppingMain;
