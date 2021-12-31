import { useState } from "react";
import styled, { css } from "styled-components";

import { useDispatch } from "react-redux";
import { signUp, login } from "../../redux/userSlice";

const Container = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`;

const TabButton = styled.div`
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
  font-size: 0.9rem;
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
  font-size: 0.9rem;
  background-color: #2e1f0f;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.3rem;
`;

const Tabs = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            onClick={() => setSelectedTab("signIn")}
          >
            SIGN IN
          </TabButton>
          <TabButton
            selected={selectedTab === "createAccount"}
            onClick={() => setSelectedTab("createAccount")}
          >
            CREATE ACCOUNT
          </TabButton>
        </Sidebar>

        <InputContainer>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="pass"
            name="password"
            placeholder="Password"
            minlength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {selectedTab === "signIn" ? (
            <SubmitButton onClick={handleLogin}>SIGN IN</SubmitButton>
          ) : (
            <SubmitButton onClick={handleSignUp}>CREATE ACCOUNT</SubmitButton>
          )}
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default Tabs;
