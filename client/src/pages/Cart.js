import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import CartDetails from "../components/cart/CartDetails";
import SectionTitle from "../components/SectionTitle";
import Recommendation from "../components/Recommendation";
import Footer from "../components/Footer";

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
