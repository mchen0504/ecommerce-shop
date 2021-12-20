import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.1rem;
`;

const SectionTitle = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default SectionTitle;
