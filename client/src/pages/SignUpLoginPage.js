import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Tabs from "../components/signUpLogin/Tabs";
import Navbar from "../components/Nav";

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
