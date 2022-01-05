import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  width: 95vw;
  display: flex;
  position: relative;
  margin-bottom: 15%;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "3%"};
  right: ${(props) => props.direction === "right" && "3%"};
  z-index: 2;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.productIndex * -100}vw);
`;

const Product = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  padding: 1rem;
`;

const Info = styled.div`
  width: 80%;
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  font-weight: 300;
`;

const Price = styled.span`
  font-size: 1.2rem;
  text-align: center;
  font-weight: 400;
  margin-top: -0.2rem;
`;

const ProductScroll = ({ products, type }) => {
  const [productIndex, setProductIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      setProductIndex(productIndex > 0 ? productIndex - 1 : 7);
    } else {
      setProductIndex(productIndex < 7 ? productIndex + 1 : 0);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown !== null) {
      const currentTouch = e.touches[0].clientX;
      const diff = touchDown - currentTouch;
      if (diff > 5) {
        handleClick("right");
      }
      if (diff < -5) {
        handleClick("left");
      }
      setTouchPosition(null);
    }
  };

  return (
    <Container>
      {productIndex > 0 && (
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <span className="material-icons-outlined" style={{ color: "white" }}>
            chevron_left
          </span>
        </Arrow>
      )}

      <ProductContainer
        productIndex={productIndex}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {products.map((product) => {
          return (
            <Product key={type === "home" ? product.id : product._id}>
              <Link
                to={`/product/${type === "home" ? product.id : product._id}`}
              >
                <ImageContainer>
                  <Image src={`https:${product.src}`}></Image>
                </ImageContainer>
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
            </Product>
          );
        })}
      </ProductContainer>
      {productIndex < 7 && (
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <span className="material-icons-outlined" style={{ color: "white" }}>
            chevron_right
          </span>
        </Arrow>
      )}
    </Container>
  );
};

export default ProductScroll;
