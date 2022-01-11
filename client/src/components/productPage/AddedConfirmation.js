import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const Container = styled.div`
  padding: 2%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  height: 20vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 1rem;
`;

const NextStep = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 575px) {
    flex-direction: column-reverse;
    margin-top: 2rem;
  }
`;

const ContinueShopping = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

const ButtonContainer = styled.div`
  width: 100%;
  @media (min-width: 576px) {
    width: 40%;
  }
`;

const ViewBagButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;
  border-radius: 3px;
  @media (max-width: 575px) {
    margin-bottom: 1rem;
  }
`;

const AddedConfirmation = (props) => {
  const { title, src, price, quantity, size, color } = props;

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <TitleContainer>
              <span className="material-icons">check_circle</span>
              <Title>ADDED TO BAG</Title>
            </TitleContainer>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "1rem" }}>
          <ProductContainer>
            <Image src={src} alt="this image" />
            <InfoContainer>
              <h2 style={{ fontSize: "1rem" }}>{title}</h2>
              <Span style={{ fontWeight: "600" }}>${price * quantity}</Span>
              <Span>Quantity: {quantity}</Span>
              <Span>
                {size} | {color}
              </Span>
            </InfoContainer>
          </ProductContainer>
          <NextStep>
            <ContinueShopping onClick={props.onHide}>
              Continue Shopping
            </ContinueShopping>
            <ButtonContainer>
              <Link to="/cart">
                <ViewBagButton>VIEW SHOPPING BAG</ViewBagButton>
              </Link>
            </ButtonContainer>
          </NextStep>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default AddedConfirmation;
