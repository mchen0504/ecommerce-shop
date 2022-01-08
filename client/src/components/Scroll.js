import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 1%;
  margin-bottom: 7%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.6rem;
`;

const Title = styled.h2`
  font-size: 0.9rem;
  text-align: center;
  font-weight: 300;
  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

const Price = styled.span`
  font-size: 0.9rem;
  text-align: center;
  font-weight: 400;
  margin-top: -0.2rem;
  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

const Scroll = ({ products, type }) => {
  const settings = {
    autoplay: false,
    nav: false,
    loop: true,
    items: 2,
    margin: 10,
  };

  return (
    <Container>
      <OwlCarousel className="owl-carousel owl-theme" {...settings}>
        {products.map((product) => {
          return (
            <div key={type === "home" ? product.id : product._id}>
              <Link
                to={`/product/${type === "home" ? product.id : product._id}`}
              >
                <img src={product.src} />
              </Link>
              <Info>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/product/${type === "home" ? product.id : product._id}`}
                >
                  <Title>{product.title}</Title>
                </Link>
                <Price>
                  $
                  {type === "home"
                    ? product.price
                    : product.price.$numberDecimal}
                </Price>
              </Info>
            </div>
          );
        })}
      </OwlCarousel>
    </Container>
  );
};

export default Scroll;
