import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

import ProductFlex from "../ProductFlex";

const ProductContainer = styled.div`
  padding: 0 3%;
`;

const ProductList = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    let filtered = products;

    if (category && filters) {
      if (filters.colors.length === 0 && filters.sizes.length > 0) {
        filtered = products.filter((product) => {
          return product.sizes.some((eachValue) => {
            return filters.sizes.includes(eachValue);
          });
        });
      }

      if (filters.sizes.length === 0 && filters.colors.length > 0) {
        filtered = products.filter((product) => {
          return product.colors.some((eachValue) => {
            return filters.colors.includes(eachValue);
          });
        });
      }

      if (filters.sizes.length > 0 && filters.colors.length > 0) {
        filtered = products.filter((product) => {
          return Object.entries(filters).every(([key, value]) => {
            return product[key].some((eachValue) => {
              return value.includes(eachValue);
            });
          });
        });
      }
    }

    setFilteredProducts(filtered);
  }, [category, products, filters]);

  useEffect(() => {
    if (sort) {
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
        );
      }

      if (sort === "price-desc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => {
            return (
              parseFloat(b.price.$numberDecimal) -
              parseFloat(a.price.$numberDecimal)
            );
          })
        );
      }

      if (sort === "price-asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => {
            return (
              parseFloat(a.price.$numberDecimal) -
              parseFloat(b.price.$numberDecimal)
            );
          })
        );
      }
    }
  }, [filters, sort]);

  let displayedProducts = category
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  if (products.length === 0) {
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

  if (
    filters &&
    filteredProducts.length === 0 &&
    (filters.sizes.length > 0 || filters.colors.length > 0)
  ) {
    return (
      <ProductContainer>
        <div style={{ textAlign: "center" }}>
          <span>No products found</span>
        </div>
      </ProductContainer>
    );
  }

  return (
    <ProductContainer>
      <ProductFlex products={displayedProducts} />
    </ProductContainer>
  );
};

export default ProductList;
