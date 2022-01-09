import styled from "styled-components";

import { bestSellers } from "../../homeData";
import ProductsAll from "../ProductsAll";
import ProductsCarousel from "../ProductsCarousel";

const ProductContainer = styled.div`
  padding: 0 2%;
`;

const AllProducts = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const SwipeProducts = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const BestSellers = () => {
  return (
    <ProductContainer>
      <AllProducts>
        <ProductsAll products={bestSellers} type="home" />
      </AllProducts>

      <SwipeProducts>
        <ProductsCarousel products={bestSellers} type="home" />
      </SwipeProducts>
    </ProductContainer>
  );
};

export default BestSellers;
