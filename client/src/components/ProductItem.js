import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 95%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  text-align: center;
  font-weight: 300;
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const Price = styled.span`
  font-size: 0.8rem;
  text-align: center;
  font-weight: 400;
  margin-top: -0.2rem;
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const ProductItem = ({ product, type }) => {
  return (
    <Container>
      <Link to={`/product/${type === "home" ? product.id : product._id}`}>
        <ImageContainer>
          <Img src={product.src} alt={product.title} />
        </ImageContainer>
      </Link>
      <ProductInfo>
        <Link
          style={{ textDecoration: "none" }}
          to={`/product/${type === "home" ? product.id : product._id}`}
        >
          <Title>{product.title}</Title>
        </Link>
        <Price>
          ${type === "home" ? product.price : product.price.$numberDecimal}
        </Price>
      </ProductInfo>
    </Container>
  );
};

export default ProductItem;
