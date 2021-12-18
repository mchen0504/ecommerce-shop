import { useState } from "react";
import styled from "styled-components";

import CarouselSlide from "./CarouselSlide";
import Navbar from "../Nav";
import NavOptionsExpand from "./NavOptionsExpand";

const Wrapper = styled.div`
  position: relative;
`;

const NavExpandSection = styled.div`
    position: absolute;
    z-index: 3;
`

const SlideSection = styled.div``

// const timeoutLength = 10;

const NavSlide = () => {
  const [shopAllMenu, setShopAllMenu] = useState({
    mouseOnShopAll: false,
    mouseOnShopAllOptions: false,
  });

  const handleShopAllMouseEnter = (target) => {
    setShopAllMenu({ [target]: true });
  };

  const handleShopAllMenuMouseLeave = () => {
    // setTimeout(() => {
    setShopAllMenu({ mouseOnShopAll: false });
    // }, timeoutLength);
  };

  const handleShopAllOptionsMouseLeave = () => {
    setShopAllMenu({ mouseOnShopAllOptions: false });
  };


  return (
    <div>
      <Navbar handleShopAllMouseEnter={handleShopAllMouseEnter} handleShopAllMenuMouseLeave={handleShopAllMenuMouseLeave}/>
      <Wrapper>
        <NavExpandSection>
          <NavOptionsExpand
            mouseOnShopAll={shopAllMenu.mouseOnShopAll}
            mouseOnShopAllOptions={shopAllMenu.mouseOnShopAllOptions}
            handleShopAllMouseEnter={handleShopAllMouseEnter}
            handleShopAllOptionsMouseLeave={handleShopAllOptionsMouseLeave}
          />
        </NavExpandSection>
        <SlideSection>
          <CarouselSlide />
        </SlideSection>
      </Wrapper>
    </div>
  );
};

export default NavSlide;
