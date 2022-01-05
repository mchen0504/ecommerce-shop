import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: rgba(247, 240, 219, 0.5);
  padding: 4% 3%;
`;

const SectionWrapper = styled.div`
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 0.9rem;
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
`;

const Span = styled.div`
  color: gray;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col sm>
            <SectionWrapper>
              <Title>NEWSLETTER</Title>
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
            </SectionWrapper>
          </Col>

          <Col sm>
            <SectionWrapper>
              <Title>CONNECT</Title>
              <ContentWrapper>
                <Span>Instagram</Span>
                <Span>Facebook</Span>
                <Span>Twitter</Span>
              </ContentWrapper>
            </SectionWrapper>
          </Col>

          <Col sm>
            <SectionWrapper>
              <Title>SUPPORT</Title>
              <ContentWrapper>
                <Span>Returns</Span>
                <Span>Shipping</Span>
                <Span>Contact Us</Span>
              </ContentWrapper>
            </SectionWrapper>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

// const Container = styled.div`
//   background-color: #f7f0db;
//   padding: 3% 0;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   @media (max-width: 576px) {
//     flex-direction: column;
//     align-items: flex-start;
// }
// `;

// const SectionWrapper = styled.div`
//   justify-content: center;
//   @media (max-width: 576px) {
//     justfy-content: flex-start;
//     padding: 3%;
// }
// `;

// const Title = styled.h1`
//   font-size: 1.1rem;
//   font-weight: 600;
// `;

// const EmailContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Input = styled.input`
//   background-color: transparent;
//   border: none;
//   border-bottom: 2px solid gray;
//   margin-right: 10px;
//   padding: 3px 5px;
//   color: none;
//   box-shadow: none
//   &:hover {
//     border: none;
//   }
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Footer = () => {
//   return (
//     <Container>
//       <SectionWrapper>
//         <Title>Newsletter</Title>
//         <p>Get exclusive updates on deals and new styles!</p>
//         <EmailContainer>
//           <Input type="email" placeholder="Your email address" />
//           <span style={{ cursor: "pointer" }} class="material-icons-round">
//             send
//           </span>
//         </EmailContainer>
//       </SectionWrapper>
//       <SectionWrapper>
//         <Title>Connect</Title>
//         <ContentWrapper position="center">
//           <span>Instagram</span>
//           <span>Facebook</span>
//           <span>Twitter</span>
//         </ContentWrapper>
//       </SectionWrapper>
//       <SectionWrapper>
//       <Title>Support</Title>
//         <ContentWrapper position="right">
//           <span>Returns</span>
//           <span>Shipping</span>
//           <span>Contact Us</span>
//         </ContentWrapper>
//       </SectionWrapper>
//     </Container>
//   );
// };

export default Footer;
