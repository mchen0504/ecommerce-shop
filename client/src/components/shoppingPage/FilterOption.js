import styled from "styled-components";

const SizeOption = styled.button`
  height: 27px;
  width: 27px;
  border: 0.1px solid gray;
  border-radius: 3px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "gray")};
  font-size: 0.9rem;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ColorOption = styled.button`
  width: 21px;
  height: 21px;
  border: ${(props) => (props.color === "white" ? "0.1px solid gray" : "none")};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: gray;
  flex-wrap: wrap;
  box-shadow: ${(props) =>
    props.isSelected ? "0px 0px 0px 1.5px gray" : "none"};
  &:hover {
    box-shadow: 0px 0px 0px 1.5px gray;
  }
`;

const FilterOption = ({ type, label, selected, setFilter }) => {
  const handleClick = (filterType) => {
    setFilter(label, filterType);
  };

  return type === "size" ? (
    <SizeOption onClick={() => handleClick("sizes")} isSelected={selected}>
      {label}
    </SizeOption>
  ) : (
    <ColorOption
      color={label}
      type={"color"}
      onClick={() => handleClick("colors")}
      isSelected={selected}
    />
  );
};

export default FilterOption;
