import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import ProductInfo from "../components/productPage/ProductInfo";
import SectionTitle from "../components/SectionTitle";
import Recommendation from "../components/Recommendation";

const ProductPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <ProductInfo />
      <SectionTitle title={"YOU MAY ALSO LIKE"} />
      <Recommendation />
      <Footer />
    </div>
  );
};

export default ProductPage;
