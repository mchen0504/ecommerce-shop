import styled from "styled-components";

const Container = styled.div`
  height: 3rem;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const LeftItem = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 1.7rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Navbar = (props) => {
  return (
      <Container>
        <Left>
          <LeftItem
            onMouseEnter={() => props.handleShopAllMouseEnter("mouseOnShopAll")}
          >
            SHOP ALL
          </LeftItem>
          <LeftItem style={{ marginLeft: "10%" }}>BEST SELLERS</LeftItem>
        </Left>
        <Center>
          <Logo>MICHELLE</Logo>
        </Center>
        <Right>
          <span
            class="material-icons-outlined"
            style={{ fontSize: "1.4rem", cursor: "pointer" }}
          >
            search
          </span>
          <span
            class="material-icons-outlined"
            style={{ fontSize: "1.4rem", marginLeft: "10%", cursor: "pointer" }}
          >
            person
          </span>
          <span
            class="material-icons-outlined"
            style={{ fontSize: "1.4rem", marginLeft: "10%", cursor: "pointer" }}
          >
            shopping_bag
          </span>
        </Right>
      </Container>
  );
};

export default Navbar;