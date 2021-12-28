import styled, { css } from "styled-components";

const SizeButton = styled.button`
  height: 25px;
  width: 25px;
  border: 0.1px solid gray;
  border-radius: 3px;
  color: gray;
  background-color: white;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: black;
      color: white;
    `}
`;

const SizeOption = ({ size, selectedSize, setSelectedSize }) => {
  return (
    <SizeButton
      selected={selectedSize === size}
      onClick={() => setSelectedSize(size)}
    >
      {size}
    </SizeButton>
  );
};

export default SizeOption;
