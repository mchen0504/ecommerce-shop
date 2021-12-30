import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

import styled from "styled-components";

import Spinner from "react-bootstrap/Spinner";
import { resetCart } from "../redux/cartSlice";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.3rem 1rem;
  background-color: black;
  color: white;
  border: 1px solid black;
  font-size: 0.9rem;
  border-radius: 3px;
`;

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  const { state } = useLocation();
  const data = state.stripeInfo;
  const products = state.products;

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const TOKEN = currentUser?.accessToken;

  const [orderId, setOrderId] = useState();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios({
          method: "post",
          url: "http://localhost:5000/api/orders",
          headers: { Authorization: `Bearer ${TOKEN}` },
          data: {
            userId: currentUser._id,
            products: products.map((product) => ({
              productId: product.id,
              size: product.size,
              color: product.color,
              quantity: product.qty,
            })),
            amount: data.amount / 100,
            address: data.billing_details.address,
          },
        });
        setOrderId(res.data._id);
      } catch {}
    };
    if (data) {
      createOrder();
      dispatch(resetCart());
    }
  }, [data, products, TOKEN]);

  if (!orderId) {
    return (
      <Container>
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }

  return (
    <Container>
      Thank you for shopping with us. Your order number is ${orderId}.
      <Link to="/">
        <Button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</Button>
      </Link>
    </Container>
  );
};

export default PaymentSuccess;