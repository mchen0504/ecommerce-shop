import { useState } from "react";

import styled from "styled-components";

const SizeOption = styled.button`
  height: 28px;
  width: 28px;
  border: 0.1px solid gray;
  border-radius: 3px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  font-size: 0.9rem;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ColorOption = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: gray;
  flex-wrap: wrap;
  box-shadow: ${(props) =>
    props.isSelected ? "0px 0px 0px 2.5px gray" : "none"};
  &:hover {
    box-shadow: 0px 0px 0px 2.5px gray;
  }
`;

const FilterOption = ({ type, label, selected, setFilter }) => {
  const [optionSelected, setOptionSelected] = useState(selected);

  const handleClick = (filterType) => {
    setFilter(label, filterType);
    setOptionSelected(!optionSelected);
  };

  return type === "size" ? (
    <SizeOption
      onClick={() => handleClick("sizes")}
      isSelected={optionSelected}
    >
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
