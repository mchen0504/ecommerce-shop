import styled from "styled-components";
import ProductsAll from "../Products-flex";
import ProductsPartial from "./Products-scroll";

const AllProducts = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

const SwipeProducts = styled.div`
  @media (min-width: 577px) {
    display: none;
  }
`;

const HomeProducts = () => {
  return (
    <div>
      <AllProducts>
        <ProductsAll />
      </AllProducts>

      <SwipeProducts>
        <ProductsPartial />
      </SwipeProducts>
    </div>
  );
};

export default HomeProducts;
