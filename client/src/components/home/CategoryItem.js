import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 1rem 0;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 2rem;
  color: white;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.src} />
        <TitleContainer>
          <Title>{item.category}</Title>
        </TitleContainer>
      </Link>
    </Container>
  );
};

export default CategoryItem;
