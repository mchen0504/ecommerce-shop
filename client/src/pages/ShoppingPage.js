import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import FiltersMobile from "../components/shoppingPage/FiltersMobile";
import Filters from "../components/shoppingPage/Filters";
import ShoppingMain from "../components/shoppingPage/ShoppingMain";

const Container = styled.div`
  padding: 3%;
`;

const Content = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  @media (max-width: 575px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 3;
`;

const ShoppingPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({
    sizes: [],
    colors: [],
  });

  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    setFilters({
      ...filters,
      sizes: [],
      colors: [],
    });
  }, [location]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Content>
          <FiltersMobile
            category={category}
            filters={filters}
            setFilters={setFilters}
            showMobileNav={showMobileNav}
            setShowMobileNav={setShowMobileNav}
          />
          <Left>
            <Filters
              category={category}
              filters={filters}
              setFilters={setFilters}
            />
          </Left>
          <Right>
            <ShoppingMain
              category={category}
              filters={filters}
              setShowMobileNav={setShowMobileNav}
            />
          </Right>
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default ShoppingPage;
