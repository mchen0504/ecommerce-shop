import React from "react";
import styled from "styled-components";
import ProductsAll from "./Products-flex";

const Container = styled.div`
  padding: 0 4%;
`;

const Recommendation = () => {
  return (
    <Container>
      <ProductsAll />
    </Container>
  );
};

export default Recommendation;
