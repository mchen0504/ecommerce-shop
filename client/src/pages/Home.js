import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import CarouselSlide from "../components/home/CarouselSlide";
import Categories from "../components/home/Categories";
import SectionTitle from "../components/SectionTitle";
import BestSellers from "../components/home/BestSellers";
import Footer from "../components/Footer";

const Home = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname, hash, key]);

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
