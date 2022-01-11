import { useLocation } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import ProductInfo from "../components/productPage/ProductInfo";
import AddedConfirmation from "../components/productPage/AddedConfirmation";
import SectionTitle from "../components/SectionTitle";
import Recommendation from "../components/Recommendation";
import Footer from "../components/Footer";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <div>
      <Announcement />
      <Navbar />
      <ProductInfo />
      <AddedConfirmation />
      <SectionTitle title={"YOU MAY ALSO LIKE"} />
      <Recommendation id={id} />
      <Footer />
    </div>
  );
};

export default ProductPage;
