import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import NavOptionsExpand from "./NavOptionsExpand";
import NavbarMobile from "./NavbarMobile";

const Container = styled.div`
  height: 3rem;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 575px) {
    padding: 0 5%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const HamburgerMenu = styled.span`
  @media (min-width: 576px) {
    display: none;
  }
`;

const LeftItem = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid black;
  }
  @media (max-width: 575px) {
    display: none;
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

const RightItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  margin-left: ${(props) => props.type === "login" && "10%"};
  @media (max-width: 576px) {
    display: ${(props) => props.type === "login" && "none"};
  }
`;

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const [shopAllMenu, setShopAllMenu] = useState({
    mouseOnShopAll: false,
    mouseOnShopAllOptions: false,
  });

  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShopAllMouseEnter = () => {
    setShopAllMenu({ ...shopAllMenu, mouseOnShopAll: true });
  };

  const handleShopAllOptionsMouseEnter = () => {
    setShopAllMenu({
      ...shopAllMenu,
      mouseOnShopAllOptions: true,
      mouseOnShopAll: false,
    });
  };

  // const handleShopAllMenuMouseLeave = () => {
  //   setTimeout(() => {
  //     setShopAllMenu({
  //       ...shopAllMenu,
  //       mouseOnShopAll: false,
  //     });
  //   }, 500);
  // };

  const handleShopAllOptionsMouseLeave = () => {
    setShopAllMenu({
      ...shopAllMenu,
      mouseOnShopAllOptions: false,
    });
  };

  return (
    <div>
      <Container>
        <Left>
          <HamburgerMenu
            className="material-icons-outlined"
            onClick={() => setShowMobileNav(true)}
          >
            menu
          </HamburgerMenu>

          <LeftItem
            onMouseEnter={handleShopAllMouseEnter}
            // onMouseLeave={handleShopAllMenuMouseLeave}
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
          <RightItem className="material-icons-outlined">search</RightItem>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", marginLeft: "10%" }}
          >
            <RightItem className="material-icons-outlined" type="login">
              person
            </RightItem>
          </Link>
          <Link
            to={"/cart"}
            style={{ textDecoration: "none", marginLeft: "10%" }}
          >
            <RightItem
              className={
                products.length === 0
                  ? "material-icons-outlined"
                  : "material-icons"
              }
            >
              shopping_bag
            </RightItem>
          </Link>
        </Right>
      </Container>
      <NavbarMobile
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <NavOptionsExpand
        mouseOnShopAll={shopAllMenu.mouseOnShopAll}
        mouseOnShopAllOptions={shopAllMenu.mouseOnShopAllOptions}
        handleShopAllOptionsMouseEnter={handleShopAllOptionsMouseEnter}
        handleShopAllOptionsMouseLeave={handleShopAllOptionsMouseLeave}
      />
    </div>
  );
};

export default Navbar;
