import { useLocation } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Filters from "../components/shoppingPage/Filters";
import ProductList from "../components/shoppingPage/ProductList";

const Container = styled.div`
  padding: 3%;
`;

const Content = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
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

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Content>
          <Left>
            <Filters
              category={category}
              filters={filters}
              setFilters={setFilters}
            />
          </Left>
          <Right>
            <ProductList category={category} filters={filters} />
          </Right>
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default ShoppingPage;
