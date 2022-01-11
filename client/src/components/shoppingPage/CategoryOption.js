import { Link } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  position: fixed;
  opacity: 0;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${(props) => (props.isCurrentCategory ? "black" : "gray")};
  border-bottom: ${(props) =>
    props.isCurrentCategory ? "2px solid black;" : "2px solid transparent"};
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const CategoryOption = ({ category, currentCategory, closeMobileFilters }) => {
  return (
    <div>
      <Link to={`/products/${category}`} onClick={closeMobileFilters}>
        <Input type="radio" value={category} name="category" id={category} />
        <Label
          htmlFor={category}
          isCurrentCategory={category === currentCategory}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Label>
      </Link>
    </div>
  );
};

export default CategoryOption;
