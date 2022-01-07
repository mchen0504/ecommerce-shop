import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import CarouselSlide from "../components/home/CarouselSlide";
import Categories from "../components/home/Categories";
import SectionTitle from "../components/SectionTitle";
import BestSellers from "../components/home/BestSellers";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";

const Home = () => {
  // const [bestSellers, setBestSellers] = useState();

  return (
    <div>
      <Announcement />
      <Navbar />
      <CarouselSlide />
      <Categories />
      <SectionTitle title="OUR BEST SELLERS" />
      <BestSellers />
      <Footer />
    </div>
  );
};

export default Home;
