import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ShoppingPage from "./pages/ShoppingPage";
import SignUpLoginPage from "./pages/SignUpLoginPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  const PrivateRoute = ({ children }) => {
    let location = useLocation();
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    console.log(location);
    return children;
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     user ? (
    //       <Component {...props} />
    //     ) : (
    //       <Navigate
    //         to={{
    //           pathname: "/login",
    //           state: { from: props.location },
    //         }}
    //       />
    //     )
    //   }
    // />
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ShoppingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <SignUpLoginPage />}
        />
        <Route
          path="/cart"
          element={!user ? <Navigate to="/login" /> : <Cart />}
        />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
