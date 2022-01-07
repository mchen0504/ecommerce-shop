import styled from "styled-components";
import { Link } from "react-router-dom";
import { dropdownImgItems, newArrivals } from "../homeData";

const Container = styled.div`
  background-color: rgba(247, 240, 219);
  width: 100%;
  padding: 2% 3%;
  display: flex;
  justify-content: space-between;
  align-items: bottom;
  position: absolute;
  z-index: 2;
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
  font-size: 0.9rem;
  @media (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Options = styled.div`
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

const OptionItem = styled.span`
  font-size: 0.8rem;
  @media (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavOptionsExpand = ({
  mouseOnShopAll,
  mouseOnShopAllOptions,
  handleShopAllOptionsMouseEnter,
  handleShopAllOptionsMouseLeave,
}) => {
  const categories = ["tops", "dresses", "bottoms", "knitwear", "outerwear"];

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
        onMouseEnter={handleShopAllOptionsMouseEnter}
        onMouseLeave={handleShopAllOptionsMouseLeave}
      >
        <Left>
          <Section>
            <Title>CATEGORIES</Title>
            <Options>
              {categories.map((category) => {
                return (
                  <OptionItem
                    key={category}
                    onClick={handleShopAllOptionsMouseLeave}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/products/${category}`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  </OptionItem>
                );
              })}
            </Options>
          </Section>
          <Section style={{ flex: "2" }}>
            <Title>NEW ARRIVALS</Title>
            <Options>
              {newArrivals.map((item) => {
                return (
                  <OptionItem
                    key={item.id}
                    onClick={handleShopAllOptionsMouseLeave}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/product/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  </OptionItem>
                );
              })}
            </Options>
          </Section>
        </Left>
        <Right>
          {dropdownImgItems.map((item) => {
            return (
              <ProductContainer
                key={item.id}
                onClick={handleShopAllOptionsMouseLeave}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/product/${item.id}`}
                >
                  <ImageContainer>
                    <Image src={item.src}></Image>
                  </ImageContainer>
                </Link>
              </ProductContainer>
            );
          })}
        </Right>
      </Container>
    </div>
  );
};

export default NavOptionsExpand;
