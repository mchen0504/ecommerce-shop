import styled, { css } from "styled-components";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ColorButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 0.1px solid #d3d3d3;
  background-color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px 1.5px gray;
  }
  ${(props) =>
    props.selected &&
    css`
      box-shadow: 0px 0px 0px 1.5px gray;
    `}
`;

const SizeColorOption = ({ color, selectedColor, setSelectedColor }) => {
  const renderTooltip = (props) => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        {color}
      </Tooltip>
    );
  };

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <ColorButton
        color={color}
        selected={selectedColor === color}
        onClick={() => setSelectedColor(color)}
      />
    </OverlayTrigger>
  );
};

export default SizeColorOption;
