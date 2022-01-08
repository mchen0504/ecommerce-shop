import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Input = styled.input`
  position: fixed;
  opacity: 0;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${(props) => (props.isPageCategory ? "black" : "gray")};
  border-bottom: ${(props) =>
    props.isPageCategory ? "2px solid black;" : "2px solid transparent"};
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const CategoryOption = ({ category, currentPageCategory }) => {
  return (
    <Container>
      <Link to={`/products/${category}`}>
        <Input type="radio" value={category} name="category" id={category} />
        <Label
          htmlFor={category}
          isPageCategory={category === currentPageCategory}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Label>
      </Link>
    </Container>
  );
};

export default CategoryOption;
