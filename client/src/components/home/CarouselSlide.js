import styled from "styled-components";

import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

const CaptionContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 2% 0;
  font-color: black;
`;

const Title = styled.h3`
  letter-spacing: 0.1rem;
  font-size: 2rem;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
  @media (max-width: 575px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p``;

const CarouselSlide = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item style={{ height: "80vh" }}>
        <Link to="/products/knitwear">
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/1276/0919/products/5_101f4fdf-878d-4c25-a1c4-57b9026f6fda_1080x.jpg?v=1632905516"
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: "1rem" }}>
            <CaptionContainer>
              <Title>STAYING WARM</Title>
              <Paragraph>Cozy knitwear to wear under your coats.</Paragraph>
            </CaptionContainer>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item style={{ height: "80vh" }}>
        <Link to="/products/outerwear">
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/1276/0919/products/2_75fc49d9-80de-4ea3-88d3-e9479dd4a84e_1080x.jpg?v=1630468376"
            alt="Second slide"
          />

          <Carousel.Caption style={{ marginBottom: "1rem" }}>
            <CaptionContainer>
              <Title>STAYING WARM</Title>
              <Paragraph>Check out our outerwear for a warm winter.</Paragraph>
            </CaptionContainer>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
