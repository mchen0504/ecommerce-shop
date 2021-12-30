import { useState } from "react";

import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding: 0 2%;
`;

const ItemContainer = styled.div`
  flex: 3;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 70%;
  height: 20vh;
  object-fit: cover;
`;

const DescContainer = styled.div`
  flex: 2;
`;

const ProductTitle = styled.h2`
  font-size: 1rem;
`;

const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Select = styled.select`
  width: 4rem;
  font-size: 0.8rem;
  text-align: center;
`;

const SubtotalContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const CartItem = ({ product, removeProduct, setSubTotal }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(product.qty);

  const handleQtyChange = (e) => {
    if (e.target.value > 0) {
      setSelectedQuantity(e.target.value);
      setSubTotal(e.target.value);
    } else {
      removeProduct(product.id);
    }
  };

  return (
    <ProductContainer>
      <ItemContainer>
        <ImageContainer>
          <Image src={`https://${product.src}`} />
        </ImageContainer>
        <DescContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <span>
            {product.size} | {product.color}
          </span>
        </DescContainer>
      </ItemContainer>
      <PriceContainer>${product.price}</PriceContainer>
      <QuantityContainer>
        <div>
          <Select
            name="quantity"
            id="quantity"
            value={selectedQuantity}
            onChange={handleQtyChange}
          >
            {[...Array(Math.min(10, product.quantity)).keys()].map((q) => {
              return (
                <option key={q} value={q}>
                  {q}
                </option>
              );
            })}
          </Select>
        </div>
      </QuantityContainer>
      <SubtotalContainer>${product.qty * product.price}</SubtotalContainer>
    </ProductContainer>
  );
};

export default CartItem;
