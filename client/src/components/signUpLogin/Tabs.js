import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { signUp, login, clearError } from "../../redux/userSlice";

const Container = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
`;

const Sidebar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`;

const TabButton = styled.div`
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  outline: none;
  color: gray;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 2px solid #2e1f0f;
      color: #2e1f0f;
      font-weight: 600;
    `}
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2.1rem;
  font-size: 1rem;
  background-color: transparent;
  border: 1.5px solid #d3d3d3;
  border-radius: 3px;
  padding: 0.2rem 0.3rem;
  &:hover {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 2.1rem;
  font-size: 1rem;
  background-color: #2e1f0f;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.3rem;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  height: 1rem;
`;

const Tabs = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { currentUser, error } = useSelector((state) => state.user);

  const [selectedTab, setSelectedTab] = useState("signIn");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  useEffect(() => {
    dispatch(clearError());
  }, [location, selectedTab]);

  useEffect(() => {
    if (currentUser) {
      const { from } = location.state || { from: { pathname: "/" } };
      console.log(from);
      navigate(from);
    }
  }, [currentUser]);

  const handleSwitchTab = (tab) => {
    setInputs((inputs) => ({ ...inputs, email: "", password: "" }));
    setSelectedTab(tab);
  };

  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  const handleSignUp = () => {
    dispatch(signUp({ email, password }));
  };

  return (
    <Container>
      <Wrapper>
        <Sidebar>
          <TabButton
            selected={selectedTab === "signIn"}
            onClick={() => handleSwitchTab("signIn")}
          >
            SIGN IN
          </TabButton>
          <TabButton
            selected={selectedTab === "createAccount"}
            onClick={() => handleSwitchTab("createAccount")}
          >
            CREATE ACCOUNT
          </TabButton>
        </Sidebar>

        <InputContainer>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={email}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required
            onChange={handleInputsChange}
          />
          <Input
            type="password"
            id="pass"
            name="password"
            value={password}
            placeholder="Password"
            required
            onChange={handleInputsChange}
          />
          {selectedTab === "signIn" ? (
            <SubmitButton onClick={handleLogin}>SIGN IN</SubmitButton>
          ) : (
            <SubmitButton onClick={handleSignUp}>CREATE ACCOUNT</SubmitButton>
          )}
        </InputContainer>
      </Wrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

export default Tabs;
