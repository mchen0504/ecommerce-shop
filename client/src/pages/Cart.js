import Announcement from "../components/Announcement";
import CartDetails from "../components/cart/CartDetails";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Recommendation from "../components/Recommendation";
import SectionTitle from "../components/SectionTitle";

const Cart = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <CartDetails />
      <SectionTitle title="YOU MAY ALSO LIKE" />
      <Recommendation />
      <Footer />
    </div>
  );
};

export default Cart;
