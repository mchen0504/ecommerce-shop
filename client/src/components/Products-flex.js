import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import ProductItem from "./ProductItem";

const ProductContainer = styled.div`
  padding: 0 3%;
`;

const ProductsAll = ({ category, filters, sort }) => {
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
            return filters.colors.includes(eachValue.color_backup);
          });
        });
      }

      if (filters.sizes.length > 0 && filters.colors.length > 0) {
        filtered = products.filter((product) => {
          return Object.entries(filters).every(([key, value]) => {
            return product[key].some((eachValue) => {
              if (key === "sizes") {
                return value.includes(eachValue);
              } else {
                return value.includes(eachValue.color_backup);
              }
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
        console.log(sort);
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
        );
      }

      if (sort === "price-desc") {
        console.log(sort);
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
        console.log(sort);
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
  }, [sort]);

  return (
    <ProductContainer>
      {products.length === 0 && !filters && (
        <Spinner animation="border" variant="secondary" />
      )}

      {filters.length > 0 && filteredProducts.length === 0 && (
        <span style={{ textAlign: "center" }}>No products found</span>
      )}

      {filteredProducts.length > 0 && (
        <Container fluid style={{ padding: "5% 0 10% 0" }}>
          <Row>
            {filteredProducts.map((product) => {
              return (
                <Col key={product._id} sm={4} md={3}>
                  <ProductItem product={product} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </ProductContainer>
  );
};

export default ProductsAll;
