import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: rgba(247, 240, 219, 0.5);
  padding: 5% 3% 7% 3%;
  @media (min-width: 768px) {
    padding: 3% 3% 5% 3%;
  }
`;

const StyledRow = styled(Row)`
  gap: 3rem;
  @media (min-width: 768px) {
    gap: 7rem;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  font-size: 0.9rem;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid gray;
  margin-right: 0.6rem;
  padding: 0.2rem 0.3rem;
  color: none;
  box-shadow: none;
  &:hover {
    outline: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Span = styled.div`
  color: gray;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <StyledRow className="d-flex justify-content-between">
          <Col sm>
            <Title>NEWSLETTER</Title>
            <ContentWrapper>
              <Span>Get exclusive updates on deals and new styles!</Span>
              <EmailContainer>
                <Input type="email" placeholder="Your email address" />
                <span
                  style={{ cursor: "pointer" }}
                  className="material-icons-round"
                >
                  send
                </span>
              </EmailContainer>
            </ContentWrapper>
          </Col>

          <Col sm>
            <Title>CONNECT</Title>
            <ContentWrapper>
              <Span>Instagram</Span>
              <Span>Facebook</Span>
              <Span>Twitter</Span>
            </ContentWrapper>
          </Col>

          <Col sm>
            <Title>SUPPORT</Title>
            <ContentWrapper>
              <Span>Returns</Span>
              <Span>Shipping</Span>
              <Span>Contact Us</Span>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
