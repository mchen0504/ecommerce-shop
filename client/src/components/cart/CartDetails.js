import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

import CartItem from "./CartItem";

import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51KBwafLsJMKgwPZfRMS0rIiml3PC3cdMNWpnD5ZbWzcRumnVsMmWSYZWqO7sC8rlOOPI27nLBQeEVZqouSZzvGxt00vRFHUPQ0";

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzNhZTUwOTAwM2MxMDMzMWQwYjRkZCIsImlhdCI6MTY0MDgwMzgwNywiZXhwIjoxNjQxMDYzMDA3fQ.VyqCz_uVSJbQshCfQKh32IO9P8PeRG6ofbt6483coJg";

const Container = styled.div`
  padding: 5% 5% 10% 5%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

const PropertyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding: 0 2%;
`;

const ItemContainer = styled.div`
  flex: 3;
  display: flex;
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

const SubtotalContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const SummaryContainer = styled.div`
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.type === "continueOrCheckout" ? "space-between" : "flex-end"};
  margin: ${(props) =>
    props.type === "continueOrCheckout" ? "2rem 0 0 0" : "1rem 0"};
`;

const Button = styled.button`
  padding: 0.3rem 1rem;
  background-color: ${(props) =>
    props.type === "checkout" ? "black" : "transparent"};
  color: ${(props) => (props.type === "checkout" ? "white" : "black")};
  border: 1px solid black;
  font-size: 0.9rem;
  border-radius: 3px;
  width: ${(props) => (props.type === "checkout" ? "16rem" : "5rem")};
`;

const FeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Fee = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Amount = styled.span`
  margin-left: 9rem;
`;

const CartDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const [subTotal, setSubTotal] = useState(0);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const removeProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  const getSubTotal = () => {
    products.reduce((price, product) => product.price * product.qty + price, 0);
  };

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            header: { token: `Bearer ${userToken}` },
            tokenId: stripeToken.id,
            amount: subTotal * 100,
          }
        );
        navigate("/success", {
          state: { stripeInfo: res.data, products: products },
        });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && subTotal > 0 && makePaymentRequest();
  }, [stripeToken, subTotal, products, navigate]);

  if (products.length === 0) {
    return (
      <Container style={{ height: "60vh" }}>
        <Title>SHOPPING BAG</Title>
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          Your bag is empty.{" "}
          <Link to={"/"} style={{ color: "inherit" }}>
            Continue Shopping
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Title>SHOPPING BAG</Title>
      <PropertyContainer>
        <ItemContainer>ITEM</ItemContainer>
        <PriceContainer>PRICE</PriceContainer>
        <QuantityContainer>QUANTITY</QuantityContainer>
        <SubtotalContainer>SUBTOTAL</SubtotalContainer>
      </PropertyContainer>
      <hr />

      {products.map((product) => {
        return (
          <CartItem
            key={product.id}
            product={product}
            removeProduct={removeProduct}
            setSubTotal={setSubTotal}
          />
        );
      })}
      <hr />

      <SummaryContainer>
        <FeeWrapper>
          <Fee>
            <span>Subtotal</span>
            <Amount>${getSubTotal()}</Amount>
          </Fee>
          <Fee>
            <span>Shipping</span>
            <Amount>$0.00</Amount>
          </Fee>
          <Fee>
            <span>Estimated Total</span>
            <Amount>${getSubTotal()}</Amount>
          </Fee>
        </FeeWrapper>
      </SummaryContainer>

      <hr />
      <SummaryContainer type="continueOrCheckout">
        <Link to="/" style={{ color: "inherit" }}>
          Continue Shopping
        </Link>
        <StripeCheckout
          name="Michelle Shop"
          billingAddress
          shippingAddress
          description={`Your total is ${subTotal}`}
          amount={subTotal * 100}
          token={onToken}
          stripeKey={KEY}
        >
          <Button type="checkout">CHECK OUT</Button>
        </StripeCheckout>
      </SummaryContainer>
    </Container>
  );
};

export default CartDetails;
