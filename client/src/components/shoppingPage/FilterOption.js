import styled from "styled-components";

const SizeOption = styled.button`
  height: 27px;
  width: 27px;
  border: 0.1px solid gray;
  border-radius: 3px;
  background-color: ${(props) => (props.selected ? "gray" : "white")};
  color: ${(props) => (props.selected ? "white" : "gray")};
  font-size: 0.9rem;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const ColorOption = styled.button`
  padding: 0.2rem 0.5rem;
  border: 0.1px solid gray;
  border-radius: 3px;
  background-color: ${(props) => (props.selected ? "gray" : "white")};
  color: ${(props) => (props.selected ? "white" : "gray")};
  font-size: 0.9rem;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const FilterOption = ({ type, label, selected, setFilter }) => {
  const handleClick = (filterType) => {
    setFilter(label, filterType);
  };

  return type === "size" ? (
    <SizeOption onClick={() => handleClick("sizes")} selected={selected}>
      {label}
    </SizeOption>
  ) : (
    <ColorOption onClick={() => handleClick("colors")} selected={selected}>
      {label}
    </ColorOption>
  );
};

export default FilterOption;
