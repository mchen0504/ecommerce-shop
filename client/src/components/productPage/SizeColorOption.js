import { useState } from "react";

import styled from "styled-components";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const SizeOption = styled.button`
  height: 25px;
  width: 25px;
  border: 0.1px solid gray;
  border-radius: 3px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "gray")};
  font-size: 0.8rem;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ColorOption = styled.button`
  width: 19px;
  height: 19px;
  border: ${(props) => (props.color === "white" ? "0.1px solid gray" : "none")};
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

const Input = styled.input`
  position: fixed;
  opacity: 0;
`;

const Label = styled.label`
  font-size: 0.95rem;
  color: ${(props) => (props.isPageCategory ? "black" : "gray")};
  border-bottom: ${(props) =>
    props.isPageCategory ? "2px solid black;" : "2px solid transparent"};
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const SizeColorOption = ({ color }) => {
  //   const [optionSelected, setOptionSelected] = useState(selected);

  //   const handleClick = (filterType) => {
  //     setFilter(label, filterType);
  //     setOptionSelected(!optionSelected);
  //   };

  const renderTooltip = () => {
    return <Tooltip>{color.color_name}</Tooltip>;
  };

  return (
    <div>
      {console.log(color)}
      {console.log(color.color_backup)}
      <Input
        type="radio"
        value={color.color_name}
        name={color.color_name}
        id={color.color_name}
      />
      <Label htmlFor={color.color_name}>
        <ColorOption url={color.color_url} color={color.color_backup} />
      </Label>
      {/* </OverlayTrigger> */}
    </div>
  );

  //   return type === "size" ? (
  //     <SizeOption
  //       onClick={() => handleClick("sizes")}
  //       isSelected={optionSelected}
  //     >
  //       {label}
  //     </SizeOption>
  //   ) : (
  //     <ColorOption
  //       color={label}
  //       type={"color"}
  //       onClick={() => handleClick("colors")}
  //       isSelected={selected}
  //     />
  //   );
};

export default SizeColorOption;
