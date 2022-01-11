import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { logout } from "../redux/userSlice";

const Container = styled.div`
  padding: 0 3%;
  height: 70vh;
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
