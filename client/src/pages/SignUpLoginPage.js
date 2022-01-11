import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import Tabs from "../components/signUpLogin/Tabs";
import Footer from "../components/Footer";

const SignUpLogin = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Tabs />
      <Footer />
    </div>
  );
};

export default SignUpLogin;
