import styled, { css } from "styled-components";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ColorButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 0.1px solid #d3d3d3;
  background-image: url(${(props) => props.url});
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
        {color.color_name}
      </Tooltip>
    );
  };

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <ColorButton
        url={color.color_url}
        color={color.color_backup}
        selected={selectedColor === color.color_name}
        onClick={() => setSelectedColor(color.color_name)}
      />
    </OverlayTrigger>
  );
};

export default SizeColorOption;
