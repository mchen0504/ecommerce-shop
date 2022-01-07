import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(247, 240, 219, 0.5);
  padding: 1% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 0.8rem;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const Announcement = () => {
  return (
    <Container>
      <Wrapper>
        Standard shipping fee $7.99 for all orders. Free shipping for orders
        over $85.
      </Wrapper>
    </Container>
  );
};

export default Announcement;
