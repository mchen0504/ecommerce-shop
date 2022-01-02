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
  width: 90%;
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
`;

const Price = styled.span`
  font-size: 0.9rem;
  text-align: center;
  font-weight: 400;
  margin-top: -0.2rem;
`;

const ProductItem = ({ product }) => {
  return (
    <Container>
      <Link to={`/product/${product._id}`}>
        <ImageContainer>
          <Img src={`https://${product.src}`} />
        </ImageContainer>
      </Link>
      <ProductInfo>
        <Link style={{ textDecoration: "none" }} to={`/product/${product._id}`}>
          <Title>{product.title}</Title>
        </Link>
        <Price>${product.price.$numberDecimal}</Price>
      </ProductInfo>
    </Container>
  );
};

export default ProductItem;
