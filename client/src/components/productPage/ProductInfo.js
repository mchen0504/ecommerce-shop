import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Spinner from "react-bootstrap/Spinner";

import ColorOption from "./ColorOption";
import SizeOption from "./SizeOption";
import Tabs from "./InfoTabs";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

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
  height: 80vh;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 5%;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
`;

const Price = styled.span`
  font-weight: bold;
`;

const FilterContainer = styled.div``;

const Filter = styled.div`
  margin: 1rem 0;
`;

const FilterTitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;

const FilterOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 0.5rem;
`;

const Select = styled.select`
  width: 4rem;
  font-size: 0.8rem;
  text-align: center;
`;

const Option = styled.option``;

const AddToCartButton = styled.button`
  width: 80%;
  padding: 0.4rem;
  background-color: ${(props) => (props.disabled ? "gray" : "black")};
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  font-size: 0.9rem;
  border-radius: 3px;
`;

const ProductInfo = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

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

  let maxQuantity = 10;
  if (product.quantity) {
    maxQuantity = Math.min(product.quantity, maxQuantity);
  }
  let quantityOptions = [...Array(maxQuantity).keys()].map((q) => {
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

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        selectedSize,
        selectedColor,
        selectedQuantity,
      })
    );
    setSelectedSize();
    setSelectedColor();
    setSelectedQuantity(1);
  };

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
                  return (
                    <SizeOption
                      key={size}
                      size={size}
                      selectedSize={selectedSize}
                      setSelectedSize={setSelectedSize}
                    />
                  );
                })}
              </FilterOptions>
            </Filter>
            <Filter>
              <FilterTitle>COLOR</FilterTitle>
              <FilterOptions>
                {product.colors?.map((color) => {
                  return (
                    <ColorOption
                      key={color.color_name}
                      color={color}
                      selectedColor={selectedColor}
                      setSelectedColor={setSelectedColor}
                    />
                  );
                })}
              </FilterOptions>
            </Filter>
            <Filter>
              <FilterTitle>QUANTITY</FilterTitle>
              <FilterOptions>
                <Select
                  name="quantity"
                  id="quantity"
                  onChange={(e) => setSelectedQuantity(e.target.value)}
                >
                  {quantityOptions}
                </Select>
              </FilterOptions>
            </Filter>
          </FilterContainer>
        </Section>
        <Section>
          <AddToCartButton
            disabled={
              !(
                typeof selectedSize !== "undefined" &&
                typeof selectedColor !== "undefined"
              )
            }
            onClick={handleAddToCart}
          >
            ADD TO CART
          </AddToCartButton>
        </Section>
        <Section>
          <Tabs product={product} />
        </Section>
      </Right>
    </Container>
  );
};

export default ProductInfo;
