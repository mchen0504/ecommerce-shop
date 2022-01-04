import { useState } from "react";
import { useLocation } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import ProductInfo from "../components/productPage/ProductInfo";
import SectionTitle from "../components/SectionTitle";
import Recommendation from "../components/Recommendation";

const ProductPage = () => {
  const [category, setCategory] = useState();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <div>
      <Announcement />
      <Navbar />
      <ProductInfo setCategory={setCategory} />
      <SectionTitle title={"YOU MAY ALSO LIKE"} />
      <Recommendation category={category} id={id} />
      <Footer />
    </div>
  );
};

export default ProductPage;
