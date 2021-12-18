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
    row-gap: 0.2rem;
    flex-direction: ${props => props.type === "color" && "row"};
`

const CategoryOption = styled.span`
    color: gray;
`;

const SizeOption = styled.button`
    width: 35px;
    border: 0.1px solid black;
    border-radius: 3px;
    background-color: white;
    color: gray;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
`

const ColorOption = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background-color: red;
    color: gray;
    margin-right: 0.5rem;
    flex-wrap: wrap;
`

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
        <ColorOption></ColorOption>
        <ColorOption></ColorOption>
        <ColorOption></ColorOption>
        <ColorOption></ColorOption>
        <ColorOption></ColorOption>
        <ColorOption></ColorOption>
        </FilterOptions>
      </Section>
    </Container>
  );
};

export default Filters;
