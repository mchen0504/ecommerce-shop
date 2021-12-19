import styled from "styled-components";
import DescTabs from "./DescTabs";

const Container = styled.div`
  padding: 5% 10%;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 5%;
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
  margin-bottom: 0.3rem;
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
`;

const Option = styled.option``;

const Button = styled.button`
  padding: 0.4rem 4rem;
  background-color: black;
  color: white;
  border: none;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const ProductInfo = () => {
  return (
    <Container>
      <Left>
        <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20200930144925_720x.jpg?v=1632901109" />
      </Left>
      <Right>
        <Title>Elsie Chiffon Striping Blouse</Title>
        <Price>$235.99</Price>
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
        <Button>ADD TO CART</Button>

        <DescTabs />
      </Right>
    </Container>
  );
};

export default ProductInfo;
