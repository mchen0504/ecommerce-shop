import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(247, 240, 219);
  height: 40vh;
  padding: 2% 3%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  flex: 1;
`;

const Title = styled.span`
  font-weight: 700;
  color: black;
`;

const Options = styled.div`
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

const OptionItem = styled.span`
  font-size: 0.9rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const ProductContainer = styled.div`
  display: flex;
  margin-left: 1.5rem;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Desc = styled.span`
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

const NavOptionsExpand = (props) => {
  const {
    mouseOnShopAll,
    mouseOnShopAllOptions,
    handleShopAllMouseEnter,
    handleShopAllOptionsMouseLeave
  } = props;

  return (
    <div
      style={{
        display:
          mouseOnShopAll === true || mouseOnShopAllOptions === true
            ? "block"
            : "none",
      }}
    >
      <Container
        onMouseEnter={() => handleShopAllMouseEnter("mouseOnShopAllOptions")}
        onMouseLeave={handleShopAllOptionsMouseLeave}
      >
        <Left>
          <Section>
            <Title>CATEGORIES</Title>
            <Options>
              <OptionItem>Tops</OptionItem>
              <OptionItem>Dresses</OptionItem>
              <OptionItem>Bottoms</OptionItem>
              <OptionItem>Knitwear</OptionItem>
              <OptionItem>Outerwear</OptionItem>
            </Options>
          </Section>
          <Section style={{ flex: "2" }}>
            <Title>NEW ARRIVALS</Title>
            <Options>
              <OptionItem>Morgan Wool Coat</OptionItem>
              <OptionItem>Elizabeth Retro Printed Dress</OptionItem>
              <OptionItem>Fiona Cotton White Midi Dress</OptionItem>
              <OptionItem>Elsie Chiffon Striping Blouse</OptionItem>
              <OptionItem>Nafisa Printed Midi Dress</OptionItem>
            </Options>
          </Section>
        </Left>
        <Right>
          <ProductContainer>
            <ImageContainer>
              <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20201216104658_1080x.jpg?v=1611136789"></Image>
            </ImageContainer>
            <Desc>Best Sellers</Desc>
          </ProductContainer>
          <ProductContainer>
            <ImageContainer>
              <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20201216104658_1080x.jpg?v=1611136789"></Image>
            </ImageContainer>
            <Desc>New Arrivals</Desc>
          </ProductContainer>
          <ProductContainer>
            <ImageContainer>
              <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/7_70897da3-c8f1-4dfb-9ce8-363fc4acd6b7_1080x.jpg?v=1632820526"></Image>
            </ImageContainer>
            <Desc>New Sweaters</Desc>
          </ProductContainer>
          <ProductContainer>
            <ImageContainer>
              <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/7_70897da3-c8f1-4dfb-9ce8-363fc4acd6b7_1080x.jpg?v=1632820526"></Image>
            </ImageContainer>
            <Desc>Staying Warm</Desc>
          </ProductContainer>
        </Right>
      </Container>
    </div>
  );
};

export default NavOptionsExpand;
