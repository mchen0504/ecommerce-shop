import styled from "styled-components";
import FilterOption from "./FilterOption";

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
  gap: 0.5rem;
  flex-direction: ${(props) => props.type === "color" && "row"};
`;

// const CategoryOption = styled.span`
//   color: gray;
// `;

const CategoryOption = styled.div``;

const Input = styled.input`
  position: fixed;
  opacity: 0;
`;

const Label = styled.label`
  color: gray;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Filters = ({ filters, setFilters }) => {
  const categories = ["tops", "dresses", "bottoms", "knitwear", "outerwear"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

  const handleFilterSelect = (selected, filterType) => {
    let copy = [...filters[filterType]];
    let selectedIndex = copy
      ? copy.findIndex((current) => current === selected)
      : -1;
    if (selectedIndex !== -1) {
      copy.splice(selectedIndex, 1);
      setFilters({
        ...filters,
        [filterType]: copy,
      });
    } else {
      setFilters({
        ...filters,
        [filterType]: [...filters[filterType], selected],
      });
    }
  };

  let sizeButtons = sizes.map((size) => {
    let selected = false;
    if (filters.sizes) {
      if (filters.sizes.includes(size)) {
        selected = true;
      }
    }
    return (
      <FilterOption
        key={size}
        type={"size"}
        label={size}
        selected={selected}
        setFilter={handleFilterSelect}
      />
    );
  });

  let colorButtons = colors.map((color) => {
    let selected = false;
    if (filters.colors) {
      if (filters.colors.includes(color)) {
        selected = true;
      }
    }
    return (
      <FilterOption
        key={color}
        type={"color"}
        label={color}
        selected={selected}
        setFilter={handleFilterSelect}
      />
    );
  });

  const handleCategoryClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Section>
        <Title>CATEGORIES</Title>
        <FilterOptions>
          {categories.map((category) => {
            return (
              <CategoryOption>
                <Input
                  type="radio"
                  value={category}
                  name="category"
                  id={category}
                  onClick={handleCategoryClick}
                />
                <Label for={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Label>
              </CategoryOption>
            );
          })}
          {/* <CategoryOption>
            <Input type="radio" value="1" name="radio" id="radio1" />
            <label for="radio1">tops</label>
          </CategoryOption>
          <CategoryOption>
            <Input type="radio" value="1" name="radio" id="radio2" />
            <label for="radio2">dresses</label>
          </CategoryOption>
          <CategoryOption>
            <Input type="radio" value="1" name="radio" id="radio3" />
            <label for="radio3">bottoms</label>
          </CategoryOption>
          <CategoryOption>
            <Input type="radio" value="1" name="radio" id="radio4" />
            <label for="radio4">knitwear</label>
          </CategoryOption>
          <CategoryOption>
            <Input type="radio" value="1" name="radio" id="radio5" />
            <label for="radio5">outerwear</label>
          </CategoryOption> */}
          {/* {categories.map((category) => {
            return (
              <CategoryOption>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryOption>
            );
          })} */}
          {/* <CategoryOption>Tops</CategoryOption>
          <CategoryOption>Dresses</CategoryOption>
          <CategoryOption>Bottoms</CategoryOption>
          <CategoryOption>Knitwear</CategoryOption>
          <CategoryOption>Outerwear</CategoryOption> */}
        </FilterOptions>
      </Section>
      <Section>
        <Title>SIZE</Title>
        <FilterOptions>{sizeButtons}</FilterOptions>
      </Section>
      <Section>
        <Title>COLOR</Title>
        <FilterOptions type="color">{colorButtons}</FilterOptions>
      </Section>
    </Container>
  );
};

export default Filters;
