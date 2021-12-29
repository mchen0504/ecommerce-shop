import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

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

const LeftItem = styled.div`
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

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Navbar = (props) => {
  const products = useSelector((state) => state.cart.products);

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
        <Link to="/" style={{ color: "inhert", textDecoration: "none" }}>
          <Logo>MICHELLE</Logo>
        </Link>
      </Center>
      <Right>
        <div
          className="material-icons-outlined"
          style={{ fontSize: "1.4rem", cursor: "pointer" }}
        >
          search
        </div>
        <div
          className="material-icons-outlined"
          style={{ fontSize: "1.4rem", marginLeft: "10%", cursor: "pointer" }}
        >
          person
        </div>
        <Link
          to={"/cart"}
          style={{ textDecoration: "none", marginLeft: "10%" }}
        >
          <div
            className={
              products.length === 0
                ? "material-icons-outlined"
                : "material-icons"
            }
            style={{ fontSize: "1.4rem", cursor: "pointer" }}
          >
            shopping_bag
          </div>
        </Link>
      </Right>
    </Container>
  );
};

export default Navbar;
