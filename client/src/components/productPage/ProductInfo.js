import styled from "styled-components";
import Tabs from "../Tabs";

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
  return (
    <Container>
      <Left>
        <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20200930144925_720x.jpg?v=1632901109" />
      </Left>
      <Right>
        <Section>
          <Title>
            Elsie Chiffon Striping Blouse sdfasdasdfas sdfafwersa sdfasfsdfasdf
            sdfadsfdsa
          </Title>
          <Price>$235.99</Price>
        </Section>
        <Section>
          <FilterContainer>
            <Filter>
              <FilterTitle>SIZE</FilterTitle>
              <FilterOptions>
                <SizeOption>XS</SizeOption>
                <SizeOption>S</SizeOption>
                <SizeOption>M</SizeOption>
                <SizeOption>L</SizeOption>
                <SizeOption>XL</SizeOption>
              </FilterOptions>
            </Filter>
            <Filter>
              <FilterTitle>COLOR</FilterTitle>
              <FilterOptions>
                <ColorOption color="red"></ColorOption>
                <ColorOption color="orange"></ColorOption>
                <ColorOption color="yellow"></ColorOption>
                <ColorOption color="green"></ColorOption>
                <ColorOption color="blue"></ColorOption>
                <ColorOption color="black"></ColorOption>
              </FilterOptions>
            </Filter>
            <Filter>
              <FilterTitle>QUANTITY</FilterTitle>
              <FilterOptions>
                <Select name="quantity" id="quantity">
                  <Option value="1" selected>
                    1
                  </Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                </Select>
              </FilterOptions>
            </Filter>
          </FilterContainer>
        </Section>
        <Section>
          <Button>ADD TO CART</Button>
        </Section>
        <Section>
          <Tabs />
        </Section>
      </Right>
    </Container>
  );
};

export default ProductInfo;
