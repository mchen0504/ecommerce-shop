import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 3%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 5rem;
  font-size: 0.9rem;
  background-color: #2e1f0f;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.3rem;
`;

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Button onClick={handleLogout}>Logout</Button>
      </Container>
      <Footer />
    </div>
  );
};

export default ProfilePage;
