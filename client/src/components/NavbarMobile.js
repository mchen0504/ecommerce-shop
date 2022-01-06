import styled from "styled-components";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";

const Wrapper = styled.div`
  padding: 0 3%;
  margin-top: 1rem;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 500;
  color: black;
`;

const Options = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OptionItem = styled.span`
  color: gray;
`;

const NavbarMobile = ({ showMobileNav, setShowMobileNav }) => {
  const categories = ["tops", "dresses", "bottoms", "knitwear", "outerwear"];

  const handleClose = () => setShowMobileNav(false);

  return (
    <Offcanvas
      show={showMobileNav}
      onHide={handleClose}
      placement={"top"}
      style={{
        height: "70%",
        backgroundColor: "rgba(247, 240, 219)",
      }}
    >
      <Wrapper>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Top>
            <Title>CATEGORIES</Title>
            <Options>
              {categories.map((category) => {
                return (
                  <OptionItem key={category}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/products/${category}`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  </OptionItem>
                );
              })}
            </Options>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Title>BEST SELLERS</Title>
            </Link>
          </Top>
          <hr />
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Title>ACCOUNT</Title>
          </Link>
        </Offcanvas.Body>
      </Wrapper>
    </Offcanvas>
  );
};

export default NavbarMobile;
