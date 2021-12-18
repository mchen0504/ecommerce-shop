import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.1rem;
`;

const SectionTitle = () => {
  return (
    <Container>
      <Title>OUR BEST SELLERS</Title>
    </Container>
  );
};

export default SectionTitle;
