import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

const SectionTitle = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default SectionTitle;
