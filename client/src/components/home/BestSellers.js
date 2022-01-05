import styled from "styled-components";
import { bestSellers } from "../../homeData";
import ProductFlex from "../ProductFlex";
import ProductScroll from "../ProductScroll";

const ProductContainer = styled.div`
  padding: 0 3%;
`;

const AllProducts = styled.div`
  @media (max-width: 575px) {
    display: none;
  }
`;

const SwipeProducts = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`;

const BestSellers = () => {
  return (
    <ProductContainer>
      <AllProducts>
        <ProductFlex products={bestSellers} type="home" />
      </AllProducts>

      <SwipeProducts>
        <ProductScroll products={bestSellers} type="home" />
      </SwipeProducts>
    </ProductContainer>
  );
};

export default BestSellers;
