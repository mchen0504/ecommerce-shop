import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Tabs from "../Tabs";

import Spinner from "react-bootstrap/Spinner";
import SizeColorOption from "./SizeColorOption";

const LoadingContainer = styled.div`
  padding: 5% 10% 10% 10%;
  text-align: center;
`;

const Container = styled.div`
  padding: 5% 10% 10% 10%;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  padding-right: 5%;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 5%;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
`;

const Price = styled.span`
  font-weight: bold;
`;

const FilterContainer = styled.div``;

const Filter = styled.div`
  margin: 0.8rem 0;
`;

const FilterTitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;

const FilterOptions = styled.div`
  display: flex;
  gap: 5px;
`;

const SizeOption = styled.button`
  height: 28px;
  width: 28px;
  border: 0.1px solid gray;
  border-radius: 3px;
  background-color: white;
  color: black;
  font-size: 0.9rem;
`;

const ColorOption = styled.div`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: gray;
  flex-wrap: wrap;
`;

const Select = styled.select`
  width: 4rem;
  font-size: 0.8rem;
  text-align: center;
`;

const Option = styled.option``;

const Button = styled.button`
  width: 80%;
  padding: 0.4rem;
  background-color: black;
  color: white;
  border: none;
  font-size: 0.9rem;
  border-radius: 3px;
`;

const ProductInfo = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "brown",
    "black",
    "beige",
    "white",
  ];

  let maxQuantity = 10;
  if (product) {
    maxQuantity = Math.min(product.quantity, maxQuantity);
  }
  let quantityOptions = [...Array(10).keys()].map((q) => {
    return (
      <Option key={q + 1} value={q + 1}>
        {q + 1}
      </Option>
    );
  });

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner animation="border" variant="secondary" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Left>
        <Image src={`https://${product.src}`} />
      </Left>
      <Right>
        <Section>
          <Title>{product.title}</Title>
          <Price>${product.price?.$numberDecimal}</Price>
        </Section>
        <Section>
          <FilterContainer>
            <Filter>
              <FilterTitle>SIZE</FilterTitle>
              <FilterOptions>
                {product.sizes?.map((size) => {
                  return <SizeOption key={size}>{size}</SizeOption>;
                })}
              </FilterOptions>
            </Filter>
            <Filter>
              <FilterTitle>COLOR</FilterTitle>
              <FilterOptions>
                {product.colors?.map((color) => {
                  return (
                    <SizeColorOption key={color.color_name} color={color} />
                  );
                })}
              </FilterOptions>
            </Filter>
            <Filter>
              <FilterTitle>QUANTITY</FilterTitle>
              <FilterOptions>
                <Select name="quantity" id="quantity">
                  {quantityOptions}
                </Select>
              </FilterOptions>
            </Filter>
          </FilterContainer>
        </Section>
        <Section>
          <Button>ADD TO CART</Button>
        </Section>
        <Section>
          <Tabs product={product} />
        </Section>
      </Right>
    </Container>
  );
};

export default ProductInfo;
