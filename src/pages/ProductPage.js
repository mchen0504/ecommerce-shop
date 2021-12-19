import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import ProductInfo from "../components/productPage/ProductInfo";

// const Top

const ProductPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
      {/* <Top> */}
        <ProductInfo/>
      {/* </Top> */}
      {/* <Bottom></Bottom> */}
      <Footer />
    </div>
  );
};

export default ProductPage;
