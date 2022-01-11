import styled from "styled-components";

const SizeButton = styled.button`
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

const ColorButton = styled.button`
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

const SelectOption = ({ type, label, selected, setSelected }) => {
  return type === "size" ? (
    <SizeButton
      selected={selected === label}
      onClick={() => setSelected(label)}
    >
      {label}
    </SizeButton>
  ) : (
    <ColorButton
      selected={selected === label}
      onClick={() => setSelected(label)}
    >
      {label}
    </ColorButton>
  );
};

export default SelectOption;
