import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import CarouselSlide from "../components/home/CarouselSlide";
import Categories from "../components/home/Categories";
import SectionTitle from "../components/SectionTitle";
import HomeProducts from "../components/home/HomeProducts";
import Footer from "../components/Footer";
import NavSlide from "../components/home/NavSlide";

const Home = () => {
  return (
    <div>
      <Announcement />
      {/* <NavSlide /> */}
      <Navbar />
      <CarouselSlide />
      <Categories />
      <SectionTitle title="OUR BEST SELLERS" />
      <HomeProducts />
      <Footer />
    </div>
  );
};

export default Home;
