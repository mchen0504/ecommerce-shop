import styled from "styled-components"

const Container = styled.div`
    margin-bottom: 1rem;
`

const Img = styled.img`
    width: 100%;
    object-fit: cover;
`

const ProductInfo = styled.div`
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    font-size: 0.8rem;
    text-align: center;
    font-weight: 300;
`

const Price = styled.span`
    font-size: 0.9rem;
    text-align: center;
    font-weight: 400;
    margin-top: -0.2rem;
`

const ProductItem = () => {
    return (
        <Container>
            <Img src="https://cdn.shopify.com/s/files/1/1276/0919/products/20200930144925_1080x.jpg?v=1632901109"/>
            <ProductInfo>
                <Title>Ally Floral Handmade Embroidery Creamy Yellow Knit Cardigan</Title>
                <Price>$235.99</Price>
            </ProductInfo>
        </Container>
    )
}

export default ProductItem
