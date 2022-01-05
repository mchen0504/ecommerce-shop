import styled from "styled-components";

const Container = styled.div`
  height: 2.5rem;
  background-color: rgba(247, 240, 219, 0.5);
  font-weight: 400;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 575px) {
    font-size: 0.8rem;
  }
`;

const Announcement = () => {
  return (
    <Container>
      Standard shipping fee $7.99 for all orders. Free shipping for orders over
      $85.
    </Container>
  );
};

export default Announcement;
