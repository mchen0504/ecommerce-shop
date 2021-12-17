import styled from "styled-components";

const Container = styled.div`
    position: relative;
    padding: 1rem 0;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const TitleContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.span`
    font-size: 2rem;
    color: white;
`

const CategoryItem = () => {
  return (
  <Container>
    <Image src="https://cdn.shopify.com/s/files/1/1276/0919/products/20200930144925_720x.jpg?v=1632901109"/>
    <TitleContainer>
        <Title>TOPS</Title>
    </TitleContainer>
  </Container>
  );
};

export default CategoryItem;
