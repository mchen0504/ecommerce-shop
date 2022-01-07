import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import ProductFlex from "./ProductFlex";
import ProductScroll from "./ProductScroll";

import Spinner from "react-bootstrap/Spinner";
import Scroll from "./Scroll";

const ProductContainer = styled.div`
  padding: 0 4%;
`;

const AllProducts = styled.div`
  @media (max-width: 575px) {
    display: none;
  }
`;

const SwipeProducts = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`;

const Recommendation = ({ id }) => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const indices = [];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products`);
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      let toBeDisplayed = [];
      while (indices.length < 8) {
        let n = Math.floor(Math.random() * 80);
        if (!indices.includes(n) && products[n]._id !== id) {
          indices.push(n);
          toBeDisplayed.push(products[n]);
        }
      }
      setDisplayedProducts(toBeDisplayed);
    }
  }, [products]);

  if (displayedProducts.length === 0) {
    return (
      <ProductContainer>
        <div style={{ textAlign: "center" }}>
          <Spinner
            style={{ alignItems: "center" }}
            animation="border"
            variant="secondary"
          />
        </div>
      </ProductContainer>
    );
  }

  return (
    <ProductContainer>
      <AllProducts>
        <ProductFlex products={displayedProducts} type="recommendation" />
      </AllProducts>

      <SwipeProducts>
        {/* <ProductScroll products={displayedProducts} type="recommendation" /> */}
        <Scroll products={displayedProducts} type="recommendation" />
      </SwipeProducts>
    </ProductContainer>
  );
};

export default Recommendation;
