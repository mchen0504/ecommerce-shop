import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import ProductsAll from "./ProductsAll";
import ProductsCarousel from "./ProductsCarousel";

const ProductContainer = styled.div`
  padding: 0 2%;
`;

const AllProducts = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const SwipeProducts = styled.div`
  @media (min-width: 768px) {
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
        <ProductsAll products={displayedProducts} type="recommendation" />
      </AllProducts>

      <SwipeProducts>
        <ProductsCarousel products={displayedProducts} type="recommendation" />
      </SwipeProducts>
    </ProductContainer>
  );
};

export default Recommendation;
