import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { carouselSlideItems } from "../../homeData";

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
      {carouselSlideItems.map((slide) => {
        return (
          <Carousel.Item key={slide.category} style={{ height: "75vh" }}>
            <Link to={`/products/${slide.category}`}>
              <img
                className="d-block w-100"
                src={slide.src}
                alt="slide.category"
              />
              <Carousel.Caption style={{ marginBottom: "2rem" }}>
                <CaptionContainer>
                  <Title>{slide.title}</Title>
                  <Paragraph>{slide.text}</Paragraph>
                </CaptionContainer>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselSlide;
