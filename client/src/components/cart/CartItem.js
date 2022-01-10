import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { editCart, removeFromCart } from "../../redux/cartSlice";

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
  position: relative;
`;

const ProductTitle = styled.h2`
  font-size: 1rem;
`;

const Size = styled.span`
  @media (max-width: 575px) {
    bottom: 0;
    position: absolute;
  }
`;

const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 575px) {
    display: none;
  }
`;

const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
    position: relative;
  }
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
  @media (max-width: 575px) {
    display: none;
  }
`;

const SubtotalContainerMobile = styled.div`
  bottom: 0;
  position: absolute;
  @media (min-width: 576px) {
    display: none;
  }
`;

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(product.qty);

  const handleQtyChange = (e) => {
    if (e.target.value > 0) {
      setSelectedQuantity(e.target.value);
      dispatch(
        editCart({
          id: product.id,
          size: product.size,
          color: product.color,
          qty: e.target.value,
        })
      );
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <ProductContainer>
      <ItemContainer>
        <ImageContainer>
          <Link to={`/product/${product.id}`}>
            <Image src={product.src} alt={product.title} />
          </Link>
        </ImageContainer>
        <DescContainer>
          <Link
            to={`/product/${product.id}`}
            style={{ color: "inhert", textDecoration: "none" }}
          >
            <ProductTitle>{product.title}</ProductTitle>
          </Link>
          <Size>
            {product.size} | {product.color}
          </Size>
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
            {[...Array(Math.min(10, product.qtyInStock)).keys()].map((q) => {
              return (
                <option key={q} value={q}>
                  {q}
                </option>
              );
            })}
          </Select>
        </div>
        <SubtotalContainerMobile>
          ${(product.qty * product.price).toFixed(2)}
        </SubtotalContainerMobile>
      </QuantityContainer>
      <SubtotalContainer>
        ${(product.qty * product.price).toFixed(2)}
      </SubtotalContainer>
    </ProductContainer>
  );
};

export default CartItem;
