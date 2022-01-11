import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import FiltersMobile from "../components/shoppingPage/FiltersMobile";
import Filters from "../components/shoppingPage/Filters";
import ShoppingMain from "../components/shoppingPage/ShoppingMain";
import Footer from "../components/Footer";

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

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    sizes: [],
    colors: [],
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products?category=${category}`
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

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
            products={products}
            filters={filters}
            setFilters={setFilters}
            showMobileFilters={showMobileFilters}
            setShowMobileFilters={setShowMobileFilters}
          />
          <Left>
            <Filters
              category={category}
              products={products}
              filters={filters}
              setFilters={setFilters}
            />
          </Left>
          <Right>
            <ShoppingMain
              category={category}
              products={products}
              filters={filters}
              setShowMobileFilters={setShowMobileFilters}
            />
          </Right>
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default ShoppingPage;
