import styled from "styled-components";

const Container = styled.div``;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex-direction: ${(props) => props.type === "color" && "row"};
`;

const CategoryOption = styled.span`
  color: gray;
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

const ColorOption = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: gray;
  flex-wrap: wrap;
`;

const Filters = () => {
  return (
    <Container>
      <Section>
        <Title>CATEGORIES</Title>
        <FilterOptions>
          <CategoryOption>Tops</CategoryOption>
          <CategoryOption>Dresses</CategoryOption>
          <CategoryOption>Bottoms</CategoryOption>
          <CategoryOption>Knitwear</CategoryOption>
          <CategoryOption>Outerwear</CategoryOption>
        </FilterOptions>
      </Section>
      <Section>
        <Title>SIZE</Title>
        <FilterOptions>
          <SizeOption>XS</SizeOption>
          <SizeOption>S</SizeOption>
          <SizeOption>M</SizeOption>
          <SizeOption>L</SizeOption>
          <SizeOption>XL</SizeOption>
        </FilterOptions>
      </Section>
      <Section>
        <Title>COLOR</Title>
        <FilterOptions type="color">
          <ColorOption color="red"></ColorOption>
          <ColorOption color="orange"></ColorOption>
          <ColorOption color="yellow"></ColorOption>
          <ColorOption color="green"></ColorOption>
          <ColorOption color="blue"></ColorOption>
          <ColorOption color="black"></ColorOption>
        </FilterOptions>
      </Section>
    </Container>
  );
};

export default Filters;
