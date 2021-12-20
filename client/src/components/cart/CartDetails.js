import styled from "styled-components";

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
  height: 25vh;
  object-fit: cover;
`;

const DescContainer = styled.div`
  flex: 2;
`;

const ProductTitle = styled.h2`
  font-size: 1rem;
`;

const SizeColor = styled.span``;

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

const Select = styled.select`
  width: 4rem;
  font-size: 0.8rem;
  text-align: center;
`;

const Option = styled.option``;

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

const Input = styled.input`
  font-size: 0.9rem;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid gray;
  margin-right: 2rem;
  padding: 0.2rem 0.3rem;
  color: none;
  box-shadow: none;
  &:hover {
    outline: none;
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

const Type = styled.span``;

const Amount = styled.span`
  margin-left: 9rem;
`;

const Link = styled.a`
  color: inherit;
  cursor: pointer;
  &:hover {
    color: inherit;
`;

const CartDetails = () => {
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
      <ProductContainer>
        <ItemContainer>
          <ImageContainer>
            <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20200930144925_720x.jpg?v=1632901109" />
          </ImageContainer>
          <DescContainer>
            <ProductTitle>
              Elsie Chiffon Striping Blouse sdfasdasdfas sdfafwersa
              sdfasfsdfasdf
            </ProductTitle>
            <SizeColor>XS | Brown</SizeColor>
          </DescContainer>
        </ItemContainer>
        <PriceContainer>$235.99</PriceContainer>
        <QuantityContainer>
          <div>
            <Select name="quantity" id="quantity">
              <Option value="1" selected>
                1
              </Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </QuantityContainer>
        <SubtotalContainer>$235.99</SubtotalContainer>
      </ProductContainer>

      <ProductContainer>
        <ItemContainer>
          <ImageContainer>
            <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20200930144925_720x.jpg?v=1632901109" />
          </ImageContainer>
          <DescContainer>
            <ProductTitle>
              Elsie Chiffon Striping Blouse sdfasdasdfas sdfafwersa
              sdfasfsdfasdf
            </ProductTitle>
            <SizeColor>XS | Brown</SizeColor>
          </DescContainer>
        </ItemContainer>
        <PriceContainer>$235.99</PriceContainer>
        <QuantityContainer>
          <div>
            <Select name="quantity" id="quantity">
              <Option value="1" selected>
                1
              </Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </QuantityContainer>
        <SubtotalContainer>$235.99</SubtotalContainer>
      </ProductContainer>
      <hr />

      <SummaryContainer>
        <Input placeholder="Enter promo code" />
        <Button>APPLY</Button>
      </SummaryContainer>

      <SummaryContainer>
        <FeeWrapper>
          <Fee>
            <Type>Subtotal</Type>
            <Amount>$471.98</Amount>
          </Fee>
          <Fee>
            <Type>Shipping</Type>
            <Amount>$0.00</Amount>
          </Fee>
          <Fee>
            <Type>Subtotal</Type>
            <Amount>$471.98</Amount>
          </Fee>
        </FeeWrapper>
      </SummaryContainer>

      <hr />
      <SummaryContainer type="continueOrCheckout">
        <Link>Continue Shopping</Link>
        <Button type="checkout">CHECK OUT</Button>
      </SummaryContainer>
    </Container>
  );
};

export default CartDetails;
