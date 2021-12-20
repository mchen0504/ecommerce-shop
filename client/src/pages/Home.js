import Announcement from "../components/Announcement";
import Categories from "../components/home/Categories";
import Footer from "../components/Footer";
import HomeProducts from "../components/home/HomeProducts";
import NavSlide from "../components/home/NavSlide";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavSlide />
      <Categories />
      <SectionTitle title="OUR BEST SELLERS" />
      <HomeProducts />
      <Footer />
    </div>
  );
};

export default Home;
