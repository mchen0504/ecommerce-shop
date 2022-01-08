import styled from "styled-components";
import { bestSellers } from "../../homeData";
import ProductFlex from "../ProductFlex";
import ProductScroll from "../ProductScroll";
import Scroll from "../Scroll";

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
        <ProductFlex products={bestSellers} type="home" />
      </AllProducts>

      <SwipeProducts>
        <Scroll products={bestSellers} type="home" />
        {/* <ProductScroll products={bestSellers} type="home" /> */}
      </SwipeProducts>
    </ProductContainer>
  );
};

export default BestSellers;
