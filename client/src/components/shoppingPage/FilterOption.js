import styled from "styled-components";
import { useState } from "react";

const SizeOption = styled.button`
  height: 27px;
  width: 27px;
  border: 0.1px solid gray;
  border-radius: 3px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const ColorOption = styled.button`
  padding: 0.2rem 0.5rem;
  border: 0.1px solid gray;
  border-radius: 3px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const FilterOption = ({ type, label, selected, setFilter }) => {
  const whenNotSelected = {
    bg: "white",
    text: "gray",
  };

  const whenSelected = {
    bg: "gray",
    text: "white",
  };

  const [color, setColor] = useState(selected ? whenSelected : whenNotSelected);

  const handleClick = (filterType) => {
    setColor(color.bg === "white" ? whenSelected : whenNotSelected);
    setFilter(label, filterType);
  };

  return type === "size" ? (
    <SizeOption
      onClick={() => handleClick("sizes")}
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {label}
    </SizeOption>
  ) : (
    <ColorOption
      onClick={() => handleClick("colors")}
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {label}
    </ColorOption>
  );
};

export default FilterOption;
