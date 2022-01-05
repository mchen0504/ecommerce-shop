import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import StripeCheckout from "react-stripe-checkout";

const PUBLIC_KEY =
  "pk_test_51KBwafLsJMKgwPZfRMS0rIiml3PC3cdMNWpnD5ZbWzcRumnVsMmWSYZWqO7sC8rlOOPI27nLBQeEVZqouSZzvGxt00vRFHUPQ0";

const Container = styled.div`
  padding: 5% 5% 10% 5%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  @media (max-width: 575px) {
    font-size: 1.5rem;
  }
`;

const PropertyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding: 0 2%;
  @media (max-width: 575px) {
    display: none;
  }
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
  justify-content: flex-end;
  margin: 1rem 0;
  @media (max-width: 575px) {
    justify-content: space-around;
  }
`;

const NextStep = styled.div`
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 575px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

const CheckoutButton = styled.button`
  padding: 0.3rem 1rem;
  background-color: black;
  color: white;
  border: 1px solid black;
  font-size: 0.9rem;
  border-radius: 3px;
  width: 16rem;
  @media (max-width: 575px) {
    width: 90vw;
  }
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
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const userToken = currentUser?.accessToken;
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleCheckout = () => {
    if (!currentUser) {
      navigate("/login");
    }
  };

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            header: { token: `Bearer ${userToken}` },
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        navigate("/success", {
          state: { stripeInfo: res.data, cart },
        });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && cart.total > 0 && makePaymentRequest();
  }, [stripeToken, cart.total, navigate]);

  const checkoutButton = currentUser ? (
    <StripeCheckout
      name="Michelle Shop"
      billingAddress
      shippingAddress
      description={`Your total is $${cart.total}`}
      amount={cart.total * 100}
      token={onToken}
      stripeKey={PUBLIC_KEY}
    >
      <CheckoutButton>CHECK OUT</CheckoutButton>
    </StripeCheckout>
  ) : (
    <CheckoutButton onClick={handleCheckout}>CHECK OUT</CheckoutButton>
  );

  if (cart.products.length === 0) {
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

      {cart.products.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
      <hr />

      <SummaryContainer type="summary">
        <FeeWrapper>
          <Fee>
            <span>Subtotal</span>
            <Amount>${cart.total}</Amount>
          </Fee>
          <Fee>
            <span>Shipping</span>
            <Amount>$0.00</Amount>
          </Fee>
          <Fee>
            <span>Estimated Total</span>
            <Amount>${cart.total}</Amount>
          </Fee>
        </FeeWrapper>
      </SummaryContainer>

      <hr />
      <NextStep>
        <Link to="/" style={{ color: "inherit" }}>
          Continue Shopping
        </Link>
        {checkoutButton}
      </NextStep>
    </Container>
  );
};

export default CartDetails;
