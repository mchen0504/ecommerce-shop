import { useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
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
  padding: 0 1rem;
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

const ProductsPartial = () => {
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
          <span class="material-icons-outlined" style={{color: "white"}}>chevron_left</span>
        </Arrow>
      )}

      <ProductContainer
        productIndex={productIndex}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20200930144925_1080x.jpg?v=1632901109"></Image>
          <Info>
            <Title>Ally Floral Handmade Embroidery Creamy Yellow Knit Cardigan</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/17_7125b465-f700-4228-affc-d4cdef96770d_1080x.jpg?v=1602033589"></Image>
          <Info>
            <Title>Jasmine Cable Polo Yellow Knit Sweater</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20201216104658_1080x.jpg?v=1611136789"></Image>
          <Info>
            <Title>Morgan Wool Coat</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/7_70897da3-c8f1-4dfb-9ce8-363fc4acd6b7_1080x.jpg?v=1632820526"></Image>
          <Info>
            <Title>Morgan Wool Coat</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/5_03be961d-2a4b-4f6c-8d00-e3eb5eb7bf68_1080x.jpg?v=1626834733"></Image>
          <Info>
            <Title>Morgan Wool Coat</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/11_d76fee4d-4b85-488b-a2c2-19103a1a835b_1080x.jpg?v=1630736159"></Image>
          <Info>
            <Title>Morgan Wool Coat</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/1_f16f5dfe-98d4-4f64-b7bb-4bee56ad9d4a_1080x.jpg?v=1629195968"></Image>
          <Info>
            <Title>Morgan Wool Coat</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/7_95443517-90d2-40f9-b662-171d4d667c19_1080x.jpg?v=1616490320"></Image>
          <Info>
            <Title>Morgan Wool Coat</Title>
            <Price>$235.99</Price>
          </Info>
        </Product>
      </ProductContainer>
      {productIndex < 7 && (
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <span class="material-icons-outlined" style={{color: "white"}}>chevron_right</span>
        </Arrow>
      )}
    </Container>
  );
};

export default ProductsPartial;
