import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const CaptionContainer = styled.div`
  background: rgba(255,255,255, 0.4);
  border-radius: 15px;
  padding: 1rem;
  font-color: black;
`

const CarouselSlide = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item style={{height: "80vh"}}>
        <img
          className="d-block w-100"
          src="https://b2c-media.maxmara.com/sys-master/m0/MM/2021/2/9366121306/002/s3master/9366121306002-z-ussuri_normal.jpg#thumbnail-z"
          alt="First slide"
        />
        <Carousel.Caption>
        <CaptionContainer>
          <h3 style={{letterSpacing: "0.1rem", fontSize: "2.5rem"}}>NEW ARRIVALS</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CaptionContainer>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height: "80vh"}}>
        <img
          className="d-block w-100"
          src="https://b2c-media.maxmara.com/sys-master/m0/MM/2021/2/3366011606/001/s3master/3366011606001-z-gary_normal.jpg#thumbnail-z"
          alt="Second slide"
        />
                
        <Carousel.Caption>
        <CaptionContainer>
          <h3 style={{letterSpacing: "0.1rem", fontSize: "2.5rem", color: "rgba(0, 0, 0, 0.8)"}}>STAYING WARM</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CaptionContainer>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
