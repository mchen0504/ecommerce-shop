import styled from "styled-components";
import CategoryOption from "./CategoryOption";
import FilterOption from "./FilterOption";

const Container = styled.div``;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(props) => (props.type === "category" ? "0.6rem" : "0.5rem")};
  flex-direction: ${(props) => (props.type === "category" ? "column" : "row")};
`;

const Filters = ({ category, filters, setFilters }) => {
  const categories = ["tops", "dresses", "bottoms", "knitwear", "outerwear"];
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
    if (filters.sizes.includes(size)) {
      selected = true;
    }
    // }
    return (
      <FilterOption
        key={size}
        type="size"
        label={size}
        selected={selected}
        setFilter={handleFilterSelect}
      />
    );
  });

  let colorButtons = colors.map((color) => {
    let selected = false;
    if (filters.colors.includes(color)) {
      selected = true;
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

  return (
    <Container>
      <Section>
        <Title>CATEGORIES</Title>
        <FilterOptions type="category">
          {categories.map((eachCategory) => {
            return (
              <CategoryOption
                key={eachCategory}
                category={eachCategory}
                currentPageCategory={category}
              />
            );
          })}
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
